import { ActivatedRouteSnapshot } from '@angular/router';
import { isTruthy } from '@app/utils/assert';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';
import { RouteTaskState, TaskId, TaskState } from './task';

type EncodedParams<T> = Partial<Record<keyof T, string>>;

export type FilterMatrixParams = Partial<{
  search: string;
  from: Date;
  to: Date;
  durationSort: 'longestFirst' | 'shortestFirst';
}>;
export type RouteFragmentParams = Partial<{ taskId: TaskId; state: RouteTaskState }>;
export type RouteParams = Partial<FilterMatrixParams & RouteFragmentParams>;

export type URL = string;
export type URLFragment = string;
export const urlFragments = (url: URL): URLFragment[] => url.split('/');
export const joinUrlFragments = (fragments: URLFragment[]): URL => fragments.join('/');
export const matrixParamFragments = (fragment: URLFragment) => fragment.split(';');
export const joinMatrixParamFragments = (values: string[]): URLFragment => values.join(';');
export const extractRouteParam = (fragment: URLFragment) => matrixParamFragments(fragment)?.[0];
export const urlFragmentMatrixParams = <Decoded>(fragment: URLFragment): EncodedParams<Decoded> =>
  Object.fromEntries(
    matrixParamFragments(fragment)
      .filter((param) => param.includes('='))
      .map((param) => param.split('='))
      .filter((pair): pair is [string, string] => pair.every(isTruthy) && pair.length === 2)
      .map(([key, value]) => [key, decodeURIComponent(value)])
  ) as EncodedParams<Decoded>;
export const toMatrixParamsString = <Decoded>(params: EncodedParams<Decoded>): URLFragment =>
  joinMatrixParamFragments(
    Object.entries(params)
      .filter(isTruthy)
      .map((pair) => `${pair[0]}=${encodeURIComponent(pair[1] as string)}`)
  );
export const updateMatrixParamsAtIndex = <Decoded>(url: URL, params: EncodedParams<Decoded>, index: number) => {
  return joinUrlFragments(
    urlFragments(url).map((fragment, i) => {
      const routeParam = extractRouteParam(fragment);
      return i === index && routeParam
        ? joinMatrixParamFragments([routeParam, toMatrixParamsString(params)])
        : fragment;
    })
  );
};

export const parseMatrixParamsAtIndex = <T>(url: URL, fn: Decoder<T>, index: number) => {
  const fragment = urlFragments(url)[index];
  return fn(urlFragmentMatrixParams<T>(fragment ?? ''));
};

export const getAllChildren = <T extends { children: T[] }>(route: T): T[] =>
  route.children.length ? [...route.children, ...route.children.map(getAllChildren).flat()] : [];

export const getAllRouteParams = <Params extends Record<string, string>>(
  route: ActivatedRouteSnapshot
): Partial<Params> =>
  [route, ...getAllChildren(route)].reduce((acc, route) => ({ ...acc, ...route.params }), {} as Partial<Params>);

export type Decoder<Decoded> = (value: EncodedParams<Decoded>) => Decoded;
export type Encoder<Decoded> = (value: Decoded) => EncodedParams<Decoded>;

export const decodeFilterMatrixParams: Decoder<FilterMatrixParams> = (value) => {
  const result = {} as FilterMatrixParams;
  if (value.search) result.search = value.search;
  if (value.from) {
    const parsedFrom = parseISO(value.from);
    if (isValid(parsedFrom)) result.from = parsedFrom;
  }
  if (value.to) {
    const parsedTo = parseISO(value.to);
    if (isValid(parsedTo)) result.to = parsedTo;
  }
  if (value.durationSort === 'longestFirst' || value.durationSort === 'shortestFirst')
    result.durationSort = value.durationSort;
  return result;
};

export const decodeRouteParams: Decoder<RouteFragmentParams> = (value) => {
  const result = {} as RouteFragmentParams;
  if (value.taskId) result.taskId = value.taskId;
  if (value.state) {
    for (const i of [TaskState.finished, TaskState.active, TaskState.dropped, 'all'] as const) {
      if (value.state === i) result.state = i;
    }
  }
  return result;
};

export const decodeWholeAppRouteParams: Decoder<RouteParams> = (value) => ({
  ...decodeFilterMatrixParams(value),
  ...decodeRouteParams(value),
});

export const encodeFilterParams: Encoder<FilterMatrixParams> = (value) => {
  const result = {} as Record<string, string>;
  if (value.search) result.search = value.search;
  if (value.from) result.from = value.from?.toISOString();
  if (value.to) result.to = value.to?.toISOString();
  if (value.durationSort) result.durationSort = value.durationSort;
  return result;
};
