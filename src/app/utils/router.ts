import { ActivatedRouteSnapshot } from '@angular/router';

export const getAllChildren = (route: ActivatedRouteSnapshot): ActivatedRouteSnapshot[] => {
  return route.children.flatMap((child) => [child, ...getAllChildren(child)]);
};

export const getAllParents = (route: ActivatedRouteSnapshot): ActivatedRouteSnapshot[] => {
  return route.parent ? [route.parent, ...getAllParents(route.parent)] : [];
};
