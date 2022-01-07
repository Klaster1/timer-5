import { ActivatedRouteSnapshot } from '@angular/router';
import { isTruthy } from '@app/utils/assert';
import { isValidISO8601String } from './date-time';
import { RouteTaskState, TaskId, TaskState } from './task';

export type FilterMatrixParams = {
  search?: string;
  from?: Date;
  to?: Date;
  durationSort?: 'longestFirst' | 'shortestFirst';
};
export type RouteFragmentParams = { taskId?: TaskId; state?: RouteTaskState };
export type RouteParams = FilterMatrixParams & RouteFragmentParams;

export const getAllChildren = <T extends { children: T[] }>(route: T): T[] =>
  route.children.length ? [...route.children, ...route.children.map(getAllChildren).flat()] : [];

export const getAllRouteParams = <Params extends Record<string, string>>(
  route: ActivatedRouteSnapshot
): Partial<Params> =>
  [route, ...getAllChildren(route)].reduce((acc, route) => ({ ...acc, ...route.params }), {} as Partial<Params>);

export type Entries<T> = {
  [P in keyof T]: [P, T[P]];
}[keyof T];

export type Decoder<T> = (key: string, rawValue: string) => Entries<T> | null;

export const decodeFilterMatrixParams: Decoder<FilterMatrixParams> = (key, rawValue) => {
  switch (key) {
    case 'search':
      return [key, rawValue];
    case 'from':
    case 'to':
      return isValidISO8601String(rawValue) ? [key, new Date(rawValue)] : null;
    case 'durationSort': {
      switch (rawValue) {
        case 'longestFirst':
        case 'shortestFirst':
          return [key, rawValue];
        default:
          return null;
      }
    }
    default:
      return null;
  }
};

export const decodeRouteParams: Decoder<RouteFragmentParams> = (key, value) => {
  switch (key) {
    case 'taskId':
      return [key, value];
    case 'state':
      switch (value) {
        case 'finished':
          return [key, TaskState.finished];
        case 'active':
          return [key, TaskState.active];
        case 'dropped':
          return [key, TaskState.dropped];
        case 'all':
        default:
          return [key, 'all'];
      }
    default:
      return null;
  }
};

export const decodeWholeAppRouteParams: Decoder<RouteParams> = (key, value) => {
  switch (key) {
    case 'taskId':
    case 'state':
      return decodeRouteParams(key, value);
    default:
      return decodeFilterMatrixParams(key, value);
  }
};

export const decode = <T extends any>(params: unknown, decoder: Decoder<T>): T => {
  if (params === undefined || params === null || typeof params !== 'object') return {} as T;
  const entries = Object.entries(params);
  const decoded = entries.map((entry) => decoder(...entry)).filter(isTruthy);
  return Object.fromEntries(decoded) as T;
};
