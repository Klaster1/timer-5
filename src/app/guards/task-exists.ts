import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AppStore } from '@app/providers/state';

export const taskExistsGuard: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const store = inject(AppStore);
  if (store.tasks()[next.params['taskId']]) return true;
  // Task is gone — redirect up to the list. Filters live in query params, preserved via `queryParams`;
  // the parent `:state` segment (and any matrix params it carries) is rebuilt from the parent route.
  const router = inject(Router);
  const { state = 'active', ...matrix } = next.parent?.params ?? {};
  return router.createUrlTree([state, matrix], { queryParams: next.queryParams });
};
