import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModuleRoutingModule } from './forms-module-routing.module';
import { FormelementsComponent } from './formelements/formelements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormInputGroupComponent } from './form-input-group/form-input-group.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxEditorModule } from 'ngx-editor';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxColorsModule } from 'ngx-colors';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    FormelementsComponent,
    AdvancedFormsComponent,
    FormInputGroupComponent,
    FileUploadsComponent,
    FormCheckboxComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormSwitchComponent,
    FormLayoutsComponent,
    FormValidationsComponent,
    FormEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModuleRoutingModule,
    NgxDropzoneModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxMatTimepickerModule,
    MaterialModuleModule,
    HttpClientModule,
    MaterialModuleModule,
    ColorPickerModule,
    DpDatePickerModule,
    NgxColorsModule,
    NgxDaterangepickerMd.forRoot(),
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        // bullet_list: 'Bullet List',
        // ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        // align_left: 'Left Align',
        // align_center: 'Center Align',
        // align_right: 'Right Align',
        // align_justify: 'Justify',
        // text_color: 'Text Color',
        // background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
    AngularEditorModule,
  ],
})
export class FormsModuleModule {}
