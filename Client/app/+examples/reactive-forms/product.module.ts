import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StarComponent } from './components/star.component';
import { SharedModule } from './../../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard, ProductEditGuard } from './product-guard.service';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'reactiveforms', component: ProductListComponent },
      { path: 'reactiveforms/product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      { path: 'reactiveforms/productEdit/:id', canDeactivate: [ProductEditGuard], component: ProductEditComponent }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe,
    StarComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
    ProductEditGuard
  ]
})
export class ReactiveFormsExampleModules { }
