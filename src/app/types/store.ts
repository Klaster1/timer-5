import type { RouterReducerState } from '@ngrx/router-store';
import { Task, Theme } from './domain';

export interface StoreState {
  tasks: {
    ids: string[];
    values: { [id: string]: Task };
  };
  router: RouterReducerState;
  theme: Theme;
}
