import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { NgsFormsModule } from '@ng-stack/forms';
import { DialogPromptComponent } from './dialog-prompt.component';

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgsFormsModule],
  declarations: [DialogPromptComponent],
  exports: [DialogPromptComponent],
})
export class DialogPromptModule {}
