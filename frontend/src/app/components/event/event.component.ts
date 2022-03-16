import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/interfaces/IEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() event: IEvent;
  @Input() isLast = false;
  @Input() disabled = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    if (!this.disabled) {
      this.router.navigate(['/event-details', this.event.id]);
    }
  }
}
