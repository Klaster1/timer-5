import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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
