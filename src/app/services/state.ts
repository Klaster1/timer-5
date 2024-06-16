import { DestroyRef, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Theme } from '@app/domain/storage';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { produce } from 'immer';

type State = {
  theme: Theme;
};

const initialState: State = {
  theme: 'dark',
};

type RouterState = {
  root: {
    url: ActivatedRouteSnapshot['url'];
    params: ActivatedRouteSnapshot['params'];
    queryParams: ActivatedRouteSnapshot['queryParams'];
    firstChild?: ActivatedRouteSnapshot['firstChild'];
  } | null;
};

export const RouterStore = signalStore(
  { providedIn: 'root' },
  withState<RouterState>({ root: null }),
  withMethods((store) => {
    const router = inject(Router);
    const destroyRef = inject(DestroyRef);
    return {
      hookUpRouter() {
        router.events.pipe(takeUntilDestroyed(destroyRef)).subscribe((event) => {
          if (event instanceof NavigationEnd) {
            patchState(store, (state) =>
              produce(state, (draft) => {
                const route = router.routerState.snapshot.root;
                draft.root = {
                  url: route?.url,
                  params: route?.params,
                  queryParams: route?.queryParams,
                  firstChild: route?.children.at(0),
                };
              }),
            );
          }
        });
      },
    };
  }),
  withComputed((store) => {
    const currentRoute = computed(() => {
      const rootRoute = store.root();
      if (!rootRoute) {
        return undefined;
      }
      let route = rootRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    });
    const routeParams = computed(() => currentRoute()?.params);
    const queryParams = computed(() => currentRoute()?.queryParams);
    return {
      currentRoute,
      routeParams,
      queryParams,
    };
  }),
);

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<State>(initialState),
  withMethods((store) => {
    const router = inject(Router);
    return {
      toggleTheme() {
        patchState(store, (state) =>
          produce(state, (draft) => {
            draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
          }),
        );
      },
      loadFromLocalStorage() {
        const theme = localStorage.getItem('theme') ?? initialState.theme;
        patchState(store, (state) =>
          produce(state, (draft) => {
            draft.theme = theme as Theme;
          }),
        );
      },
    };
  }),
  withHooks({
    onInit(store) {
      store.loadFromLocalStorage();
      effect(() => {
        const theme = store.theme();
        localStorage.setItem('theme', theme);
      });
    },
  }),
);
