import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseSelectPage } from './course-select.page';

const routes: Routes = [
  {
    path: '',
    component: CourseSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSelectPageRoutingModule {}
