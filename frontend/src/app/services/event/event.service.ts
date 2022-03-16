import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKey } from 'src/app/interfaces/ISetting';
import { IEvent } from 'src/app/interfaces/IEvent';
import { StorageService } from '../storage/storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventsBs = new BehaviorSubject<IEvent[]>([]);
  events: Observable<IEvent[]> = this.eventsBs.asObservable();

  constructor(private http: HttpClient, private storage: StorageService) {
    this.getEvents().then((events) => {
      this.eventsBs.next(events);
    });
  }

  async fetchEvents(): Promise<boolean> {
    try {
      // send get request to api
      const events: IEvent[] = await this.http
        .get<IEvent[]>(`${environment.apiHost}events?excludePast=true`)
        .toPromise();

      events.forEach((event) => {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
        event.lastModified = new Date(event.lastModified);
      });

      this.eventsBs.next(events);

      // store fetched events in local storage
      await this.storage.store(StorageKey.EVENTS, events);
      return true;
    } catch (error) {
      console.error('Error while fetching events!');

      // load lectures from local storage
      const local: IEvent[] = await this.getEvents();
      this.eventsBs.next(local ? local : []);

      console.log('Fetched events from local storage.');
      return false;
    }
  }

  getEventById(id: string): IEvent | null {
    const event = this.eventsBs.getValue().find((e) => e.id === id);
    return event ? event : null;
  }

  private async getEvents(): Promise<IEvent[]> {
    const events = await this.storage.get(StorageKey.EVENTS);

    if (Array.isArray(events)) {
      events.forEach((event) => {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      });

      return events;
    } else {
      return [];
    }
  }
}
