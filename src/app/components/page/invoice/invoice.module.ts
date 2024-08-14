import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpDatePickerModule } from 'ng2-date-picker';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [InvoicedetailsComponent, InvoicelistComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    DpDatePickerModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
})
export class InvoiceModule {}
