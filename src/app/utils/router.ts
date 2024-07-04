import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

export type ResolveDataTyped<T extends Record<any, any>> = {
  [P in keyof T]: ResolveFn<T[P]>;
};

export const getAllChildren = (route: ActivatedRouteSnapshot): ActivatedRouteSnapshot[] => {
  return route.children.flatMap((child) => [child, ...getAllChildren(child)]);
};

export const getAllParents = (route: ActivatedRouteSnapshot): ActivatedRouteSnapshot[] => {
  return route.parent ? [route.parent, ...getAllParents(route.parent)] : [];
};
