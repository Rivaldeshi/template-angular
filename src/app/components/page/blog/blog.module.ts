import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { SwiperModule } from 'swiper/angular';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [BlogComponent, BlogDetailsComponent, EditBlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModuleModule,
    FormsModule,
    NgxMatTimepickerModule,
    NgSelectModule,
    NgxDropzoneModule,
    SharedModule,
    SwiperModule,
    NgxEditorModule,
    ReactiveFormsModule
  ],
})
export class BlogModule {}
