import {createFeatureSelector,createSelector} from '@ngrx/store'
import {StoreState, TaskState} from '@app/types'

export const tasks = createFeatureSelector<StoreState, StoreState['tasks']>('tasks')
export const userTasks = createSelector(
    tasks,
    (tasks: StoreState['tasks'], props: {userId: string, state?: TaskState}) => {
        return Object.values(tasks)
        // return Object.values(tasks).filter(task => task.userId === props.userId && props.state ? task.state === props.state : true)
    }
)