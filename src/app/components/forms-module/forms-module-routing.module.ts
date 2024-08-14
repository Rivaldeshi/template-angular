import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormInputGroupComponent } from './form-input-group/form-input-group.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormelementsComponent } from './formelements/formelements.component';

const routes: Routes = [
  {path:"form-module/advanced-forms",component:AdvancedFormsComponent},
  {path:"form-module/form-uploads",component:FileUploadsComponent},
  {path:"form-module/form-checkbox",component:FormCheckboxComponent},
  {path:"form-module/form-editor",component:FormEditorComponent},
  {path:"form-module/form-input-group",component:FormInputGroupComponent},
  {path:"form-module/form-layouts",component:FormLayoutsComponent},
  {path:"form-module/form-radio",component:FormRadioComponent},
  {path:"form-module/form-select",component:FormSelectComponent},
  {path:"form-module/form-switch",component:FormSwitchComponent},
  {path:"form-module/form-validations",component:FormValidationsComponent},
  {path:"form-module/form-elements",component:FormelementsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsModuleRoutingModule { }
