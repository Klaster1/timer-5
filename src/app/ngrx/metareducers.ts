import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer<T>(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['tasks', 'theme'],
    rehydrate: true,
  })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
