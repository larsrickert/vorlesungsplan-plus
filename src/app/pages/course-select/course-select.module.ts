import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseSelectPageRoutingModule } from './course-select-routing.module';

import { CourseSelectPage } from './course-select.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseSelectPageRoutingModule,
    SharedModule,
  ],
  declarations: [CourseSelectPage],
})
export class CourseSelectPageModule {}
