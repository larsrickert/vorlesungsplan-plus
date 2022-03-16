import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ITaskBlock } from 'src/app/interfaces/IBlock';
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
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.taskService.tasks.subscribe((tasks) => {
      this.blocks = <ITaskBlock[]>this.utility.createBlocks(tasks);
      this.count = tasks.length;
    });
  }

  async addTask() {
    const modal = await this.modalController.create({
      component: TaskEditPage,
      cssClass: 'app-modal',
    });

    return await modal.present();
  }

  async showShareSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Aufgaben teilen',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'In die Zwischenablage',
          icon: 'copy-outline',
          handler: async () => {
            if (this.count > 0) {
              await this.taskService.copyToClipboard();
              this.utility.showToast(
                'Aufgabe(n) in die Zwischenablage kopiert.'
              );
            } else {
              this.utility.showToast(
                'Du hast noch keine Aufgaben hinzugefügt.'
              );
            }
          },
        },
        {
          text: 'Als Datei exportieren',
          icon: 'document-outline',
          handler: () => {
            if (this.count > 0) {
              this.taskService.exportFile();
            } else {
              this.utility.showToast(
                'Du hast noch keine Aufgaben hinzugefügt.'
              );
            }
          },
        },
        {
          text: 'Importieren',
          icon: 'download-outline',
          handler: () => {
            document.getElementById('importFile').click();
          },
        },
        {
          text: 'Abbrechen',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });

    await actionSheet.present();
  }

  async import(ev): Promise<void> {
    const imported = await this.taskService.import(ev.target.files[0]);

    if (imported) {
      this.utility.showToast('Aufgaben erfolgreich importiert.');
    } else {
      this.utility.showToast(
        'Beim Import deiner Aufgaben ist ein Fehler aufgetreten.'
      );
    }
  }
}
