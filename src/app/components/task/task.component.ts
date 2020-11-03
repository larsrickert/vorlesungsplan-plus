import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskEditPage } from 'src/app/pages/task-edit/task-edit.page';
import { TaskService } from 'src/app/services/task/task.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Input() isLast = false;
  @Input() accent = false;
  @Input() skeleton = false;
  @ViewChild('sliding') sliding: HTMLIonItemSlidingElement;

  constructor(
    private taskService: TaskService,
    private modalController: ModalController,
    private alertController: AlertController,
    private utility: UtilityService
  ) {}

  ngOnInit() {}

  async edit() {
    const modal = await this.modalController.create({
      component: TaskEditPage,
      cssClass: 'app-modal',
      componentProps: {
        task: this.task,
      },
    });

    await this.sliding.close();
    return await modal.present();
  }

  async delete() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert',
      header: 'Aufgabe löschen',
      message: `Bist du sicher, dass du die Aufgabe "${this.task.name}" löschen möchtest? Du kannst sie nicht wiederherstellen.`,
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            this.sliding.close();
          },
        },
        {
          text: 'Löschen',
          cssClass: 'delete',
          handler: async () => {
            await this.taskService.delete(this.task);
            this.utility.showToast('Aufgabe gelöscht.');
          },
        },
      ],
    });

    await alert.present();
  }
}
