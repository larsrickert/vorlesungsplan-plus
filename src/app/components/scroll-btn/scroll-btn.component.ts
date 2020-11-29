import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-btn',
  templateUrl: './scroll-btn.component.html',
  styleUrls: ['./scroll-btn.component.scss'],
})
export class ScrollBtnComponent implements OnInit {
  @ViewChild('fab') fab: HTMLIonFabButtonElement;
  @Input() direction = 'top';
  @Input() offset = 600;
  content: HTMLIonContentElement;
  hide = true;
  mode = 'top';

  constructor() {}

  ngOnInit() {
    this.content = document.querySelector('ion-router-outlet ion-content');
    this.mode = this.direction;

    if (this.content) {
      this.content.scrollEvents = true;
      this.content.addEventListener('ionScrollEnd', (ev) => {
        this.content.getScrollElement().then((e) => {
          const height = e.scrollTop;
          const end = e.scrollHeight - this.content.scrollHeight;

          if (this.direction === 'both') {
            // enable to top AND to bottom button depending on current scroll height
            this.mode = height < end / 2 ? 'bottom' : 'top';
          }

          // hide scroll button when height is lower then the offset
          if (this.mode === 'bottom') {
            // to bottom
            this.hide = end - height < this.offset;
          } else {
            // to top
            this.hide = height < this.offset;
          }
        });
      });
    }
  }

  // scrolls to top or bottom of the page depending on the set direction
  async scroll(): Promise<void> {
    const speed = 300;

    if (this.content) {
      if (this.fab) {
        this.fab.disabled = true;
      }

      if (this.mode === 'bottom') {
        await this.content.scrollToBottom(speed);
      } else {
        await this.content.scrollToTop(speed);
      }

      // reactivate button after delay
      setTimeout(() => {
        if (this.fab) {
          this.fab.disabled = false;
        }
      }, 250);
    }
  }
}
