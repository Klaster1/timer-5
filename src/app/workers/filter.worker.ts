/// <reference lib="webworker" />

import * as Comlink from 'comlink';
import { Task, TasksFilterParams } from '../types/domain';

const filterByName = (filter: TasksFilterParams, t: Task): boolean => {
  const { search } = filter;
  if (typeof search === 'string' && search.length) {
    return t.name.toLowerCase().includes(search.toLowerCase());
  } else {
    return true;
  }
};
const filterByFrom = (filter: TasksFilterParams, t: Task): boolean => {
  const { from } = filter;
  if (from instanceof Date && !Number.isNaN(from.valueOf())) {
    return t.sessions.some((s) => s.start >= from.valueOf());
  } else {
    return true;
  }
};
const filterByTo = (filter: TasksFilterParams, t: Task): boolean => {
  const { to } = filter;
  if (to instanceof Date && !Number.isNaN(to.valueOf())) {
    return t.sessions.some((s) => (typeof s.end === 'number' ? s.end <= to.valueOf() : true));
  } else {
    return true;
  }
};

export const stats = (filter: TasksFilterParams, values: Task[]): Task[] => {
  return values.filter((t) => [filterByName, filterByTo, filterByFrom].every((predicate) => predicate(filter, t)));
};

Comlink.expose(stats);
