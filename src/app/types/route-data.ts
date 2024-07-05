import { Session, Task } from '@app/domain/task';

export interface SessionRoute {
  session: Session;
}

export interface TaskRoute {
  task: Task;
}
