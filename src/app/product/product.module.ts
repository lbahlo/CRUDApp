import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductGetComponent } from './components/product-get/product-get.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsServiceMock } from '../product/products.service.mock';

import {
  MatButtonModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  declarations: [ProductAddComponent, ProductGetComponent, ProductEditComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  providers: [ProductsServiceMock]
})

export class ProductModule { }
