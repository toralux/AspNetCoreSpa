import { Routes, RouterModule } from '@angular/router';

import { RealtimeComponent } from './realtime.component';

const routes: Routes = [
  { path: '', component: RealtimeComponent }
];

export const routing = RouterModule.forChild(routes);
