import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { routing } from './devextreme-test.routes';
import { DevExtremeTestComponent } from './devextreme-test.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';


@NgModule({
    imports: [
        routing,
        SharedModule,
        DxButtonModule,
        DxDataGridModule
    ],
    exports: [],
    declarations: [
        DevExtremeTestComponent
    ],
    providers: [],
})
export class DevExtremeTestModule { }