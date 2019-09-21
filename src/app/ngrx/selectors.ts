import {createFeatureSelector,createSelector} from '@ngrx/store'
import {StoreState, TaskState, Session} from '@app/types'
import {getSelectors} from '@ngrx/router-store'
import {isTask, compareTasks} from '@app/domain'

export const tasks = createFeatureSelector<StoreState, StoreState['tasks']>('tasks')
export const router = createFeatureSelector<StoreState, StoreState['router']>('router')
export const {selectRouteParam} = getSelectors(router);
export const currentTaskId = selectRouteParam('taskId')
export const currentTasksState = selectRouteParam('state')
export const taskById = createSelector(
    tasks,
    (tasks: StoreState['tasks'], props: {taskId: string}) => tasks.values[props.taskId]
)
export const currentTask = createSelector(
    currentTaskId,
    tasks,
    (id, tasks) => id ? tasks.values[id] : undefined
)
export const currentStateTasks = createSelector(
  tasks,
  currentTasksState,
  (tasks, state) => {
    return tasks.ids.map(id=>state==='all'
      ? tasks.values[id]
      : tasks.values[id].state === state
        ? tasks.values[id]
        : undefined
    ).filter(isTask).sort(compareTasks)
  }
)