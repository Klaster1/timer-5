import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { isValidTaskState } from '@app/domain/no-dom';

@Injectable({ providedIn: 'root' })
export class GameStateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const gamesState = next.params.state.split(';')[0];
    return isValidTaskState(gamesState) || gamesState === 'all' ? true : this.router.navigate(['/tasks/active']);
  }
}
