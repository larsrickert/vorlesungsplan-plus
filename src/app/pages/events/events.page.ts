import { Component, OnInit, ViewChild } from '@angular/core';
import { IEventBlock } from 'src/app/interfaces/IBlock';
import { EventService } from 'src/app/services/event/event.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  blocks: IEventBlock[] = [];
  displayedBlocks: IEventBlock[] = [];
  count = 0;
  @ViewChild('searchbar') searchbar: HTMLIonSearchbarElement;

  constructor(
    private eventService: EventService,
    private utility: UtilityService
  ) {}

  ngOnInit() {
    this.eventService.events.subscribe((events) => {
      this.blocks = <IEventBlock[]>this.utility.createBlocks(events);
      this.displayedBlocks = this.blocks;
      this.count = this.countEvents();
    });

    this.eventService.fetchEvents();
  }

  search(ev: any): void {
    let searchedValue = ev.target.value.toLowerCase();

    if (searchedValue === '') {
      // display blocks of active segment when search is canceled or cleared
      this.displayedBlocks = this.blocks;
      return;
    } else if (searchedValue.trim() === '') {
      // do nothing when empty search input is entered
      return;
    }

    searchedValue = searchedValue.trim();

    const results: IEventBlock[] = [];

    this.blocks.forEach((block) => {
      const matchingEvents = block.items.filter((event) => {
        let match = false;

        if (event.name.toLowerCase().includes(searchedValue)) {
          match = true;
        }

        if (
          event.location &&
          event.location.toLowerCase().includes(searchedValue)
        ) {
          match = true;
        }

        return match;
      });

      if (matchingEvents.length > 0) {
        results.push({ date: block.date, items: matchingEvents });
      }
    });

    this.displayedBlocks = results;
  }

  countEvents() {
    let count = 0;

    this.blocks.forEach((block) => {
      count += block.items.length;
    });

    return count;
  }
}
