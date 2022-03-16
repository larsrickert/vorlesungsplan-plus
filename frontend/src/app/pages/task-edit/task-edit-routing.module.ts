import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskEditPage } from './task-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TaskEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskEditPageRoutingModule {}
