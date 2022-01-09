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

export type Decoder<Decoded> = (value: any) => Decoded;
export type Encoder<Decoded> = (value: Decoded) => EncodedParams<Decoded>;

export const decodeFilterMatrixParams: Decoder<FilterMatrixParams> = (value) => {
  const result = {} as FilterMatrixParams;
  if (value.search) result.search = decodeURIComponent(value.search);
  if (value.from) {
    const parsedFrom = parseISO(decodeURIComponent(value.from));
    if (isValid(parsedFrom)) result.from = parsedFrom;
  }
  if (value.to) {
    const parsedTo = parseISO(decodeURIComponent(value.to));
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

export const encodeFilterParams: Encoder<FilterMatrixParams> = (value) => {
  const result = {} as Record<string, string>;
  if (value.search) result.search = encodeURIComponent(value.search);
  if (value.from) result.from = encodeURIComponent(value.from.toISOString());
  if (value.to) result.to = encodeURIComponent(value.to?.toISOString());
  if (value.durationSort) result.durationSort = value.durationSort;
  return result;
};
