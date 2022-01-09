import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { extractRouteParam } from '@app/domain/router';
import { isValidTaskState } from '@app/domain/task';

@Injectable({ providedIn: 'root' })
export class GameStateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const tasksState = extractRouteParam(next.params.state);
    return (tasksState && isValidTaskState(tasksState)) || tasksState === 'all'
      ? true
      : this.router.navigate(['/active']);
  }
}
