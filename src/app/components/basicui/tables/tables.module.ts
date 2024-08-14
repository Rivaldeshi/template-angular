import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BasictablesComponent } from './basictables/basictables.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { EdittablesComponent } from './edittables/edittables.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { BasicAngularTableComponent } from './data_table_component/basic-angular-table/basic-angular-table.component';
import { AddRemoveDataComponent } from './data_table_component/add-remove-data/add-remove-data.component';
import { MatTableModule } from '@angular/material/table';
import { SortableDataComponent } from './data_table_component/sortable-data/sortable-data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SelectionDatatableComponent } from './data_table_component/selection-datatable/selection-datatable.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTableComponent } from './data_table_component/edit-table/edit-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogComponent } from './data_table_component/mat-dialog/mat-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    BasictablesComponent,
    DatatablesComponent,
    EdittablesComponent,
    BasicAngularTableComponent,
    AddRemoveDataComponent,
    SortableDataComponent,
    SelectionDatatableComponent,
    EditTableComponent,
    MatDialogComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
})
export class TablesModule {}
