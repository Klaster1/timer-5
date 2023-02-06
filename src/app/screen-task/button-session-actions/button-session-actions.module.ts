import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ButtonSessionActionsComponent } from './button-session-actions.component';

@NgModule({
  imports: [MatMenuModule, MatButtonModule, MatSelectModule, MatIconModule, RouterModule],
  declarations: [ButtonSessionActionsComponent],
  exports: [ButtonSessionActionsComponent],
})
export class ButtonSessionActionsModule {}
