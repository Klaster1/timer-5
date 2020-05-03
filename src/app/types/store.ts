import type { RouterReducerState } from '@ngrx/router-store';
import { User, Task, Theme } from './domain';

export interface StoreState {
  user: User;
  tasks: {
    ids: string[];
    values: { [id: string]: Task };
  };
  router: RouterReducerState;
  theme: Theme;
}
