import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';

const routes: Routes = [
  {path:"invoice/invoicelist",component:InvoicelistComponent},
  {path:"invoice/invoicedetails",component:InvoicedetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
