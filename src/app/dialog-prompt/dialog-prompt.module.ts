import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgStackFormsModule } from '@ng-stack/forms';
import { DialogPromptComponent } from './dialog-prompt.component';

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgStackFormsModule],
  declarations: [DialogPromptComponent],
  exports: [DialogPromptComponent],
})
export class DialogPromptModule {}
