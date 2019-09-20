import {Pipe, NgModule} from '@angular/core'
import {Task} from '@app/types'

@Pipe({
    name: 'taskStateIcon',
})
export class TaskStateIconPipe {
    transform(t?: Task | string) {
        if (!t) return 'timer-logo'
        if (typeof t !== 'string' && !!t.sessions && !!t.sessions.length && !t.sessions[t.sessions.length-1].end) {
            return 'pause_circle_filled'
        }
        const v = typeof t === 'string' ? t : t.state
        switch (v) {
            case 'active': return 'play_circle_filled'
            case 'done': return 'check_circled'
            case 'dropped': return 'delete'
            case 'on-hold': return 'low_priority'
            case 'to-do': return 'bookmark'
        }
    }
}

@NgModule({declarations: [TaskStateIconPipe], exports: [TaskStateIconPipe]})
export class TaskStateIconPipeModule {}