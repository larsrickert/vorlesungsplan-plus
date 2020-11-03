import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Input() back = false;
  isModal = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.modalController.getTop().then((modal) => {
      this.isModal = modal !== undefined;
    });
  }

  closeModal(): Promise<boolean> {
    return this.modalController.dismiss();
  }
}
