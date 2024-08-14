import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { WhislistComponent } from './whislist/whislist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"ecommerce/add-product",component:AddProductComponent},
  {path:"ecommerce/cart",component:CartComponent},
  {path:"ecommerce/checkout",component:CheckoutComponent},
  {path:"ecommerce/edit-product",component:EditProductComponent},
  {path:"ecommerce/order-details",component:OrderdetailsComponent},
  {path:"ecommerce/orders",component:OrdersComponent},
  {path:"ecommerce/product-details",component:ProductDetailsComponent},
  {path:"ecommerce/product-list",component:ProductListComponent},
  {path:"ecommerce/products",component:ProductsComponent},
  {path:"ecommerce/whislist",component:WhislistComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
