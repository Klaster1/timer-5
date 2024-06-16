import { DestroyRef, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Theme } from '@app/domain/storage';
import {
  patchState,
  signalStore,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';

const withRouter = () => {
  type RouterState = {
    router: {
      url: ActivatedRouteSnapshot['url'];
      params: ActivatedRouteSnapshot['params'];
      queryParams: ActivatedRouteSnapshot['queryParams'];
      firstChild?: ActivatedRouteSnapshot['firstChild'];
    } | null;
  };
  const initialState: RouterState = {
    router: null,
  };
  return signalStoreFeature(
    withState<RouterState>(initialState),
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
                  draft.router = {
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
        const rootRoute = store.router();
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
    withHooks({
      onInit(store) {
        store.hookUpRouter();
      },
    }),
  );
};

const withTheme = () => {
  type ThemeState = {
    theme: Theme;
  };
  const initialState: ThemeState = {
    theme: 'dark',
  };
  return signalStoreFeature(
    withState<ThemeState>(initialState),
    withMethods((store) => {
      const router = inject(Router);
      return {
        toggleTheme(theme?: Theme) {
          patchState(store, (state) =>
            produce(state, (draft) => {
              if (theme) {
                draft.theme = theme;
              } else {
                draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
              }
            }),
          );
        },
      };
    }),
    withHooks({
      onInit(store) {
        store.toggleTheme((localStorage.getItem('theme') as Theme | null) ?? initialState.theme);
        effect(() => {
          localStorage.setItem('theme', store.theme());
        });
      },
    }),
  );
};

export const AppStore = signalStore({ providedIn: 'root' }, withTheme(), withRouter());
