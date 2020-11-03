import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() event: IEvent;
  @Input() isLast = false;

  constructor() {}

  ngOnInit() {}
}
