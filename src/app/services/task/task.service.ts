import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKey } from 'src/app/interfaces/ISetting';
import { ITask } from 'src/app/interfaces/ITask';
import { StorageService } from '../storage/storage.service';
import { v4 as uuidv4 } from 'uuid';
import { take } from 'rxjs/operators';
import { LectureStatus } from 'src/app/interfaces/ILecture';

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
      });

      return tasks;
    } else {
      return [];
    }
  }

  async delete(task: ITask): Promise<void> {
    const deleted = this.tasksBs.getValue().filter((stored) => {
      return stored.id !== task.id;
    });

    this.tasksBs.next(this.sortTasks(deleted));
    await this.storage.store(StorageKey.TASKS, deleted);
  }

  async addTask(task: ITask): Promise<void> {
    task.id = uuidv4();
    const stored = this.tasksBs.getValue();

    if (
      stored.find((i) => {
        return i.id === task.id;
      })
    ) {
      // task already stored
      return;
    }

    stored.push(task);
    this.tasksBs.next(this.sortTasks(stored));
    await this.storage.store(StorageKey.TASKS, stored);
  }

  async updateTask(task: ITask) {
    const stored = this.tasksBs.getValue();
    const updated: ITask[] = [];

    stored.forEach((storedTask) => {
      if (storedTask.id === task.id) {
        updated.push(task);
      } else {
        updated.push(storedTask);
      }
    });

    this.tasksBs.next(this.sortTasks(updated));
    await this.storage.store(StorageKey.TASKS, updated);
  }

  async getUniqueCourses(): Promise<string[]> {
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
}
