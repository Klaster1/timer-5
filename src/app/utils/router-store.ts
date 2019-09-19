import {
  RouterNavigatedPayload,
  MinimalActivatedRouteSnapshot,
  ROUTER_NAVIGATION, RouterNavigationAction,
  ROUTER_NAVIGATED, RouterNavigatedAction
} from '@ngrx/router-store';
import { ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store'
import { pipe } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import {selectRouteParam} from '@app/ngrx/selectors'
import {StoreState} from '@app/types'

type ArrayContents<U> = U extends Array<infer T> ? T : never;
type ActivatedRouteSnapshot = ArrayContents<RouterNavigatedPayload['routerState']['root']['children']>;

export const findRoute = (rootChildren: ActivatedRouteSnapshot[], path: string[]): ActivatedRouteSnapshot|undefined  => {
    const found = path.reduce((children, child, i) => {
        if (!children.length) return [];
        if (i === path.length - 1) return children;
        const found = children.find(c => c.routeConfig && c.routeConfig.path === path[i]);
        return found ? found.children : [];
    }, rootChildren)
    return found.length ? found[0] : void 0;
};

export const pathNavigate = (path: string[]) => pipe(
    ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
    map(a => findRoute(a.payload.routerState.root.children, path))
);
