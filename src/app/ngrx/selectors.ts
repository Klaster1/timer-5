import {createFeatureSelector,createSelector} from '@ngrx/store'
import {StoreState, TaskState} from '@app/types'

export const user = createFeatureSelector<StoreState, StoreState['user']>('user')
export const tasks = createFeatureSelector<StoreState, StoreState['tasks']>('tasks')
export const userTasks = createSelector(
    tasks, user,
    (tasks: StoreState['tasks'], user: StoreState['user'], props: {state?: TaskState}) => {
        return Object.values(tasks).filter(task => task.userId === user.id && props.state ? task.state === props.state : true)
    }
)