import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';
import { ExamplesHomeComponent } from './examples-home/examples-home.component';
import { AnimationComponent } from './animation/animation.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AdvancedDirectivesModule } from './advanced-directives/advaned-directive.module';
import { WikipediaService } from './typeahead/wikipedia.service';
import { JqueryIntegrationComponent } from './jquery-integration/jquery-integration.component';
import { ChangeDetectionDefaultComponent } from './change-detection/comment-selection-2.component';
import { ChangeDetectionOnPushComponent } from './change-detection/comment-selection-1.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { routing } from './examples.routes';

@NgModule({
    imports: [routing, SharedModule, AdvancedDirectivesModule],
    declarations: [
        ExamplesComponent,
        ExamplesHomeComponent,
        // Examples
        AnimationComponent,
        TypeaheadComponent,
        RxjsComponent,
        JqueryIntegrationComponent,
        ChangeDetectionComponent,
        ChangeDetectionOnPushComponent,
        ChangeDetectionDefaultComponent
    ],
    providers: [WikipediaService]
})
export class ExamplesModule { }
