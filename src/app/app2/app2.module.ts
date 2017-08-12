import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent, ServiceComponent
  ],
  declarations: [ProductComponent, ServiceComponent]
})
export class App2Module { }
