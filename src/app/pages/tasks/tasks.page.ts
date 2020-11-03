import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ITaskBlock } from 'src/app/interfaces/IBlock';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskService } from 'src/app/services/task/task.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { TaskEditPage } from '../task-edit/task-edit.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  blocks: ITaskBlock[] = [];
  count = 0;

  constructor(
    private taskService: TaskService,
    private utility: UtilityService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.taskService.tasks.subscribe((tasks) => {
      this.blocks = <ITaskBlock[]>this.utility.createBlocks(tasks);
    });
  }

  async addTask() {
    const modal = await this.modalController.create({
      component: TaskEditPage,
      cssClass: 'app-modal',
    });

    return await modal.present();
  }
}
