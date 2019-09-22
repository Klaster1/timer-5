import {NgModule} from '@angular/core';
import {ScreenLoginComponent} from './component';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

export {ScreenLoginComponent};

@NgModule({
    declarations: [ScreenLoginComponent],
    entryComponents: [ScreenLoginComponent],
    exports: [ScreenLoginComponent],
    imports: [
        NgxAuthFirebaseUIModule
    ]
})
export class ScreenLoginModule {}
