import {Pipe, NgModule} from '@angular/core'
import {Task} from '@app/types'
import {isTaskRunning, isTask} from '@app/domain'

@Pipe({
    name: 'taskStateIcon',
})
export class TaskStateIconPipe {
    transform(t?: Task | string) {
        if (!t) return 'timer-logo'
        if (isTask(t) && isTaskRunning(t)) return 'pause_circle_filled'
        const v = isTask(t) ? t.state : t
        switch (v) {
            case 'active': return 'play_circle_outline'
            case 'done': return 'check_circle_outline'
            case 'dropped': return 'delete_outline'
            case 'on-hold': return 'low_priority'
            case 'to-do': return 'bookmark_border'
        }
    }
}

@NgModule({declarations: [TaskStateIconPipe], exports: [TaskStateIconPipe]})
export class TaskStateIconPipeModule {}