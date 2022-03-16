import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKey } from 'src/app/interfaces/ISetting';
import { ITask } from 'src/app/interfaces/ITask';
import { StorageService } from '../storage/storage.service';
import { v4 as uuidv4 } from 'uuid';
import { take } from 'rxjs/operators';
import { LectureStatus } from 'src/app/interfaces/ILecture';
import { saveAs } from 'file-saver';

import { Plugins } from '@capacitor/core';
const { Clipboard, Share } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksBs = new BehaviorSubject<ITask[]>([]);
  tasks: Observable<ITask[]> = this.tasksBs.asObservable();

  constructor(private storage: StorageService) {
    this.getTasks().then((tasks) => {
      this.tasksBs.next(tasks);
    });
  }

  private async getTasks(): Promise<ITask[]> {
    const tasks = await this.storage.get(StorageKey.TASKS);

    if (Array.isArray(tasks)) {
      tasks.forEach((event) => {
        event.start = new Date(event.start);
        event.end = new Date(event.end);

        if ('course' in event) {
          event.lecture = event.course;
          delete event.course;
        }
      });

      return this.sortTasks(tasks);
    } else {
      return [];
    }
  }

  async delete(task: ITask): Promise<void> {
    let deleted = this.tasksBs.getValue().filter((stored) => {
      return stored.id !== task.id;
    });

    deleted = this.sortTasks(deleted);
    this.tasksBs.next(deleted);
    await this.storage.store(StorageKey.TASKS, deleted);
  }

  async addTask(task: ITask): Promise<void> {
    task.id = uuidv4();
    let stored = this.tasksBs.getValue();

    if (
      stored.find((i) => {
        return i.id === task.id;
      })
    ) {
      // task already stored
      return;
    }

    stored.push(task);
    stored = this.sortTasks(stored);
    this.tasksBs.next(stored);
    await this.storage.store(StorageKey.TASKS, stored);
  }

  async updateTask(task: ITask) {
    const stored = this.tasksBs.getValue();
    let updated: ITask[] = [];

    stored.forEach((storedTask) => {
      if (storedTask.id === task.id) {
        updated.push(task);
      } else {
        updated.push(storedTask);
      }
    });

    updated = this.sortTasks(updated);
    this.tasksBs.next(updated);
    await this.storage.store(StorageKey.TASKS, updated);
  }

  async getUniqueLectures(): Promise<string[]> {
    const unique: string[] = [];

    try {
      const lectures = await this.storage.lectures.pipe(take(1)).toPromise();

      lectures.forEach((lecture) => {
        if (
          !unique.includes(lecture.name) &&
          lecture.status !== LectureStatus.REMOVED
        ) {
          unique.push(lecture.name);
        }
      });
    } finally {
      return unique.sort();
    }
  }

  sortTasks(tasks: ITask[]): ITask[] {
    return tasks.sort((a, b) => {
      return a.start.getTime() - b.start.getTime();
    });
  }

  async copyToClipboard(): Promise<void> {
    const tasks = this.tasksBs.getValue();

    let string = '';
    tasks.forEach((task) => {
      if (string) {
        string += '\n\n';
      }

      string += `Aufgabe: ${
        task.name
      }\nAbgabe bis: ${task.end.toLocaleDateString()}, ${task.end.getHours()}:${task.end.getMinutes()} Uhr\nKurs: ${
        task.lecture
      }`;

      if (task.notes) {
        string += `\nBeschreibung:${task.notes}`;
      }
    });

    await Clipboard.write({
      string: string.trim(),
    });
  }

  async exportFile(): Promise<void> {
    const tasks = this.tasksBs.getValue();

    // remove "start" attribute
    tasks.forEach((task) => {
      delete task.start;
    });

    await this.storage.shareFile(
      JSON.stringify(this.tasksBs.getValue()),
      `tasks-${new Date()
        .toLocaleDateString()
        .replace('.', '-')
        .replace('.', '-')}.json`
    );
  }

  async import(file: File): Promise<boolean> {
    return new Promise((resolve) => {
      if (file.type !== 'application/json' || !file) {
        console.error(`Wrong file type: ${file.type} or file undefined`);
        return resolve(false);
      }

      const readFile = new FileReader();
      let validImport = true;
      const backup = this.tasksBs.getValue();

      readFile.onload = async (e) => {
        try {
          const buffer = e.target.result;
          const json: any[] = JSON.parse(buffer.toString());
          let validTasks: ITask[] = [];

          for (const task of json) {
            if (
              'id' in task &&
              'end' in task &&
              'name' in task &&
              'notes' in task &&
              ('lecture' in task || 'course' in task)
            ) {
              validTasks.push({
                id: task.id,
                end: new Date(task.end),
                start: new Date(task.end),
                name: task.name,
                notes: task.notes,
                lecture: 'lecture' in task ? task.lecture : task.course,
              });
            }
          }

          if (validTasks.length > 0) {
            validTasks = this.sortTasks(validTasks);
            this.tasksBs.next(validTasks);
            await this.storage.store(StorageKey.TASKS, validTasks);
            validImport = true;
          } else {
            validImport = false;
          }

          return resolve(validImport);
        } catch (error) {
          // import failed
          this.tasksBs.next(backup);
          await this.storage.store(StorageKey.TASKS, backup);
          return resolve(false);
        }
      };

      readFile.readAsText(file);
    });
  }
}
