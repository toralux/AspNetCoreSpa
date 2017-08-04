import { Routes, RouterModule } from '@angular/router';

import { DevExtremeTestComponent } from './devextreme-test.component';

const routes: Routes = [
    {
        path: '', component: DevExtremeTestComponent
    }
];
export const routing = RouterModule.forChild(routes);