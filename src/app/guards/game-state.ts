import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { isValidTaskState } from '@app/domain/task';

export const gameStateGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const tasksState = next.params.state;
  return (tasksState && isValidTaskState(tasksState)) || tasksState === 'all'
    ? true
    : inject(Router).navigate(['/active']);
};
