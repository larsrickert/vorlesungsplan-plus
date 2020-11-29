import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskService } from 'src/app/services/task/task.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage implements OnInit {
  @Input() task: ITask;
  min = new Date().toISOString();
  max = `${new Date().getFullYear() + 1}-12-31`;

  changedTask: ITask;
  availableLectures: string[] = [];
  isoDate = '';

  constructor(
    private taskService: TaskService,
    private modalController: ModalController,
    private utility: UtilityService
  ) {}

  ngOnInit() {
    // init changed task object
    this.changedTask = this.task
      ? Object.assign({}, this.task)
      : {
          id: '',
          lecture: '',
          start: null,
          end: null,
          name: '',
          notes: '',
        };

    this.isoDate = this.changedTask.end
      ? this.changedTask.end.toISOString()
      : '';

    this.taskService.getUniqueLectures().then((lectures) => {
      this.availableLectures = lectures.length > 0 ? lectures : ['<keine>'];
    });
  }

  async save(): Promise<void> {
    this.changedTask.name = this.changedTask.name.trim();
    this.changedTask.notes = this.changedTask.notes.trim();

    if (!this.changedTask.name || !this.changedTask.lecture || !this.isoDate) {
      // inputs not valid
      this.utility.showToast('Bitte fülle alle erforderlichen Felder aus.');
      return;
    }

    this.changedTask.end = new Date(this.isoDate);
    this.changedTask.start = this.changedTask.end;

    this.changedTask.start = new Date(this.changedTask.start);
    this.changedTask.end = new Date(this.changedTask.end);

    if (this.task) {
      await this.taskService.updateTask(this.changedTask);
      this.utility.showToast('Aufgabe aktualisiert.');
    } else {
      await this.taskService.addTask(this.changedTask);
      this.utility.showToast('Aufgabe hinzugefügt.');
    }

    // close modal
    if (await this.modalController.getTop()) {
      this.modalController.dismiss();
    }
  }
}
