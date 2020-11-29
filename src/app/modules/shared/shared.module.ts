import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BlockComponent } from 'src/app/components/block/block.component';
import { LectureComponent } from 'src/app/components/lecture/lecture.component';
import { LectureStatusFabComponent } from 'src/app/components/lecture-status-fab/lecture-status-fab.component';
import { EventComponent } from 'src/app/components/event/event.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { ScrollBtnComponent } from 'src/app/components/scroll-btn/scroll-btn.component';

const components = [
  HeaderComponent,
  BlockComponent,
  LectureComponent,
  LectureStatusFabComponent,
  EventComponent,
  TaskComponent,
  ScrollBtnComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
