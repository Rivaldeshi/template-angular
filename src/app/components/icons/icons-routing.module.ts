import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemixiconsComponent } from './remixicons/remixicons.component';
import { TablericonsComponent } from './tablericons/tablericons.component';

const routes: Routes = [
  {path:"icons/remixicons",component:RemixiconsComponent},
  {path:"icons/tablericons",component:TablericonsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
