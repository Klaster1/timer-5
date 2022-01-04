import type { RouterReducerState } from '@ngrx/router-store';
import { Task, Theme, User } from './domain';

export interface StoreState {
  user: User;
  tasks: {
    ids: string[];
    values: { [id: string]: Task };
  };
  router: RouterReducerState;
  theme: Theme;
}
