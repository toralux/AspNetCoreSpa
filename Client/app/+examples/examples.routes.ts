import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
    {
        path: '', component: ExamplesComponent, children: [
            { path: 'animationexamples', loadChildren: './animations/animations.module#AnimationsModule' },
            { path: 'reactiveforms', loadChildren: './reactive-forms/product.module#ReactiveFormsExampleModules' },
            { path: 'components', loadChildren: './component/component-home.module#ComponentModule' },
            { path: 'directives', loadChildren: './directives/directives.module#DirectivesModule' },
            { path: 'jquery', loadChildren: './jquery/jquery.module#JqueryModule' },
            { path: 'googlemaps', loadChildren: './google-maps/google-maps.module#GoogleMapsModule' },
            { path: 'texteditor', loadChildren: './text-editor/text-editor.module#TextEditorModule' },
            { path: 'markdowneditor', loadChildren: './markdown-editor/markdown-editor.module#MarkdownEditorModule' },
            { path: 'devextreme-test', loadChildren: './devextreme-test/devextreme-test.module#DevExtremeTestModule' }
        ]
    },
];

export const routing = RouterModule.forChild(routes);
