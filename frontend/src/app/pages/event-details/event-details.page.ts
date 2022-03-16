import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  id = null;
  event: IEvent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    // subscribe to router event
    this.eventService.events.subscribe(() => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params.id ? params.id : null;
        this.event = this.eventService.getEventById(this.id);
      });
    });
  }
}
