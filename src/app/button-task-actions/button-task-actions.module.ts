import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipeModule } from '@app/pipes/task-state.pipe';
import { ButtonTaskActionsComponent } from './button-task-actions.component';

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    TaskStateIconPipeModule,
    TaskStatePipeModule,
    CommonModule,
  ],
  declarations: [ButtonTaskActionsComponent],
  exports: [ButtonTaskActionsComponent],
})
export class ButtonTaskActionsModule {}
