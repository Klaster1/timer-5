import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToStringPipeModule } from '@app/pipes/to-string.pipe';
import { DialogPromptComponent, DialogPromptData } from './component';
export { DialogPromptComponent, DialogPromptData };

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ToStringPipeModule],
  declarations: [DialogPromptComponent],
  exports: [DialogPromptComponent],
})
export class DialogPromptModule {}
