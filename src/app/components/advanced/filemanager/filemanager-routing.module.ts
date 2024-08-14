import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { FilemanagerlistComponent } from './filemanagerlist/filemanagerlist.component';
import { FiledetailsComponent } from './filedetails/filedetails.component';

const routes: Routes = [
  {path:'filemanager/filemanager', component:FilemanagerComponent},
  {path:'filemanager/filemanagerlist', component:FilemanagerlistComponent},
  {path:'filemanager/filedetails', component:FiledetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilemanagerRoutingModule { }
