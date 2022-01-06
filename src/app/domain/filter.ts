import { Task, TasksFilterParams } from '../types/domain';
import { taskDurationPure } from './no-dom';

type Nullable<T> = T | null;

const filterByTaskId = (filter: TasksFilterParams, t: Nullable<Task>): Nullable<Task> => {
  if (!t) return t;
  const { taskId } = filter;
  if (typeof taskId === 'string' && taskId.length) {
    return t.id === taskId ? t : null;
  } else {
    return t;
  }
};

const filterByName = (filter: TasksFilterParams, t: Nullable<Task>): Nullable<Task> => {
  if (!t) return t;
  const { search } = filter;
  if (typeof search === 'string' && search.length) {
    return t.name.toLowerCase().includes(search.toLowerCase()) ? t : null;
  } else {
    return t;
  }
};
const filterByFrom = (filter: TasksFilterParams, t: Nullable<Task>): Nullable<Task> => {
  if (!t) return t;
  const { from } = filter;
  if (from instanceof Date && !Number.isNaN(from.valueOf())) {
    const sessions = t.sessions.filter((s) => s.start >= from.valueOf());
    return sessions.length ? { ...t, sessions } : null;
  } else {
    return t;
  }
};
const filterByTo = (filter: TasksFilterParams, t: Nullable<Task>): Nullable<Task> => {
  if (!t) return t;
  const { to } = filter;
  if (to instanceof Date && !Number.isNaN(to.valueOf())) {
    const sessions = t.sessions.filter((s) => (typeof s.end === 'number' ? s.end <= to.valueOf() : true));
    return sessions.length ? { ...t, sessions } : null;
  } else {
    return t;
  }
};

const sortByDuration = (filter: TasksFilterParams, tasks: Task[]): Task[] => {
  const now = (filter.to ?? new Date()).valueOf();
  if (filter.durationSort) {
    return tasks.sort((a, b) =>
      filter.durationSort === 'shortestFirst'
        ? taskDurationPure(a, now) - taskDurationPure(b, now)
        : taskDurationPure(b, now) - taskDurationPure(a, now)
    );
  } else {
    return tasks;
  }
};

const composedPredicate = (filter: TasksFilterParams, t: Nullable<Task>): Nullable<Task> =>
  filterByTo(filter, filterByFrom(filter, filterByName(filter, t)));

export const filter = (filter: TasksFilterParams, values: Task[]): Task[] =>
  sortByDuration(
    filter,
    values.reduce((acc: Task[], task) => {
      const result = composedPredicate(filter, task);
      if (result) {
        acc.push(result);
      }
      return acc;
    }, [])
  );
