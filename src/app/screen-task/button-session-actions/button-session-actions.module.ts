import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { RouterModule } from '@angular/router';
import { ButtonSessionActionsComponent } from './button-session-actions.component';

@NgModule({
  imports: [MatMenuModule, MatButtonModule, MatSelectModule, MatIconModule, RouterModule],
  declarations: [ButtonSessionActionsComponent],
  exports: [ButtonSessionActionsComponent],
})
export class ButtonSessionActionsModule {}
