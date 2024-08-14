import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { WhislistComponent } from './whislist/whislist.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { SwiperModule } from 'swiper/angular';
import { DpDatePickerModule } from 'ng2-date-picker';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    OrderdetailsComponent,
    WhislistComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    NgxDropzoneModule,
    NgxMatTimepickerModule,
    SwiperModule,
    DpDatePickerModule,
    NgxEditorModule,
    CarouselModule,
    HttpClientModule,
    AngularEditorModule,
  ],
})
export class EcommerceModule {}
