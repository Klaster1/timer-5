import { Theme } from '@app/domain/storage';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { produce } from 'immer';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<{ theme: Theme }>({ theme: 'dark' }),
  withMethods((store) => ({
    toggleTheme() {
      patchState(store, (state) =>
        produce(state, (draft) => {
          draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
        }),
      );
    },
  })),
);
