import {Pipe, NgModule} from '@angular/core'
import {Task} from '@app/types'

@Pipe({
    name: 'taskStateIcon',
})
export class TaskStateIconPipe {
    transform(t?: Task | string) {
        if (!t) return 'timer-logo'
        const v = typeof t === 'string' ? t : t.state
        switch (v) {
            case 'active':
                return typeof t === 'string'
                    ? 'play_circle_filled'
                    : !!t.sessions && !!t.sessions.length && !t.sessions[t.sessions.length-1].end
                        ? 'pause_circle_filled'
                        : 'play_circle_filled'
            case 'done': return 'check_circled'
            case 'dropped': return 'delete'
            case 'on-hold': return 'low_priority'
            case 'to-do': return 'bookmark'
        }
    }
}

@NgModule({declarations: [TaskStateIconPipe], exports: [TaskStateIconPipe]})
export class TaskStateIconPipeModule {}