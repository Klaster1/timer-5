import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AppStore } from '@app/providers/state';

export const taskExistsGuard: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const store = inject(AppStore);
  if (store.tasks()[next.params['taskId']]) return true;
  // Task is gone — redirect up to the list, preserving the :state segment and its matrix params (filters)
  const router = inject(Router);
  const { state = 'active', ...matrix } = next.parent?.params ?? {};
  return router.createUrlTree([state, matrix], { queryParams: next.queryParams });
};
