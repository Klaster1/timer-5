import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogEditSessionComponent, DialogEditSessionData } from './component';
export { DialogEditSessionComponent, DialogEditSessionData };

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  declarations: [DialogEditSessionComponent],
  exports: [DialogEditSessionComponent],
  entryComponents: [DialogEditSessionComponent],
})
export class DialogEditSessionModule {}
