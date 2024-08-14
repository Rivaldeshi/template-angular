import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicuiRoutingModule } from './basicui-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { TooltipPopoversComponent } from './tooltip-popovers/tooltip-popovers.component';
import { TablesModule } from './tables/tables.module';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [
    DropdownComponent,
    ModalComponent,
    OffcanvasComponent,
    TooltipPopoversComponent,
  ],
  imports: [
    CommonModule,
    BasicuiRoutingModule,
    TablesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    SimplebarAngularModule,
  ],
})
export class BasicuiModule {}
