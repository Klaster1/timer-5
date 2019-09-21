import {NgModule} from '@angular/core'
import {MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material'
import {DialogPromptComponent, DialogPromptData} from './component'
export {DialogPromptComponent, DialogPromptData}

@NgModule({
    imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
    declarations: [DialogPromptComponent],
    exports: [DialogPromptComponent],
    entryComponents: [DialogPromptComponent]
})
export class DialogPromptModule {}