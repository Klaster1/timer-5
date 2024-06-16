import { effect } from '@angular/core';
import { Theme } from '@app/domain/storage';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { produce } from 'immer';

type State = {
  theme: Theme;
};
const initialState: State = {
  theme: 'dark',
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<State>(initialState),
  withMethods((store) => ({
    toggleTheme() {
      patchState(store, (state) =>
        produce(state, (draft) => {
          draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
        }),
      );
    },
    loadFromLocalStorage() {
      const theme = localStorage.getItem('theme') ?? initialState.theme;
      patchState(store, (state) =>
        produce(state, (draft) => {
          draft.theme = theme as Theme;
        }),
      );
    },
  })),
  withHooks({
    onInit(store) {
      store.loadFromLocalStorage();
      effect(() => {
        const theme = store.theme();
        localStorage.setItem('theme', theme);
      });
    },
  }),
);
