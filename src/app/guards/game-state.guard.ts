import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { isValidTaskState } from '@app/domain';

@Injectable({ providedIn: 'root' })
export class GameStateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const gamesState = next.params.state;
    return isValidTaskState(gamesState) || gamesState === 'all' ? true : this.router.navigate(['/tasks/active']);
  }
}
