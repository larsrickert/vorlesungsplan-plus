import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationPageRoutingModule } from './installation-routing.module';

import { InstallationPage } from './installation.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationPageRoutingModule,
    SharedModule,
  ],
  declarations: [InstallationPage],
})
export class InstallationPageModule {}
