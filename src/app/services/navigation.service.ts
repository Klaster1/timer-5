import { Injectable } from '@angular/core';
import { StoreState } from '@app/domain/storage';
import { RouteTaskState, TaskId } from '@app/domain/task';
import { selectDecodedFilterParams, selectDecodedRouteParams } from '@app/ngrx/selectors';
import { isTruthy } from '@app/utils/assert';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private store: Store<StoreState>) {}

  taskStateCommands = (state: RouteTaskState): Observable<any[]> => {
    return combineLatest([
      this.store.select(selectDecodedRouteParams),
      this.store.select(selectDecodedFilterParams),
    ]).pipe(
      map(([routeParams, filterParams]) => {
        return ['tasks', state, filterParams, routeParams.taskId].filter(isTruthy);
      })
    );
  };

  taskIdCommands = (taskId: TaskId): Observable<any[]> => {
    return combineLatest([
      this.store.select(selectDecodedRouteParams),
      this.store.select(selectDecodedFilterParams),
    ]).pipe(
      map(([routeParams, filterParams]) => {
        return ['tasks', routeParams.state, filterParams, taskId].filter(isTruthy);
      })
    );
  };
}
