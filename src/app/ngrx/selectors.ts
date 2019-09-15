import {createFeatureSelector,createSelector} from '@ngrx/store'
import {StoreState, TaskState} from '@app/types'
import {getSelectors} from '@ngrx/router-store'

export const user = createFeatureSelector<StoreState, StoreState['user']>('user')
export const isLoggedIn = createSelector(
    user,
    (user) => !!user
)
export const tasks = createFeatureSelector<StoreState, StoreState['tasks']>('tasks')
export const userTasks = createSelector(
    tasks, user,
    (tasks: StoreState['tasks'], user: StoreState['user'], props: {state?: TaskState}) => {
        return Object.values(tasks).filter(task => task.userId === user.id && props.state ? task.state === props.state : true)
    }
)
export const router = createFeatureSelector<StoreState, StoreState['router']>('router')
const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = getSelectors(router);
export const currentTaskId = selectRouteParam('taskId')
export const taskById = createSelector(
    tasks,
    (tasks, props: {taskId: string}) => tasks[props.taskId]
)
export const currentTask = createSelector(
    currentTaskId,
    tasks,
    (id, tasks) => tasks[id]
)