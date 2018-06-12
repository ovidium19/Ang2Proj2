import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ProductDetailComponent} from '../../products/product-detail.component';
import {ProductListComponent} from '../../products/product-list.component';
import {ProductService} from '../../products/product.service';
import {ProductGuardService} from '../../products/product-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent},
      ]
    )
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
