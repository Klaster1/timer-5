import { ActivatedRouteSnapshot } from '@angular/router';

export const getAllChildren = <T extends { children: T[] }>(route: T): T[] =>
  route.children.length ? [...route.children, ...route.children.map(getAllChildren).flat()] : [];

export const getAllRouteParams = <Params extends Record<string, string>>(
  route: ActivatedRouteSnapshot
): Partial<Params> =>
  [route, ...getAllChildren(route)].reduce((acc, route) => ({ ...acc, ...route.params }), {} as Partial<Params>);
