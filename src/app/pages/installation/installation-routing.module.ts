import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationPage } from './installation.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationPageRoutingModule {}
