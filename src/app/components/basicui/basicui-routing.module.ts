import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { TooltipPopoversComponent } from './tooltip-popovers/tooltip-popovers.component';

const routes: Routes = [
{path:"basicui/dropdown",component:DropdownComponent},
{path:"basicui/modal",component:ModalComponent},
{path:"basicui/offcanvas",component:OffcanvasComponent},
{path:"basicui/tooltip-popovers",component:TooltipPopoversComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicuiRoutingModule { }
