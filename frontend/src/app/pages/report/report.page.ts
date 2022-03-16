import { Component, OnInit } from '@angular/core';
import { IMail } from 'src/app/interfaces/IMail';
import { MailService } from 'src/app/services/mail/mail.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  name = '';
  email = '';
  type = '';
  message = '';
  checkbox = false;
  valid = true;
  invalidFields: string[] = [];

  constructor(private mail: MailService, private utility: UtilityService) {}

  ngOnInit() {}

  checkFields(): boolean {
    this.name = this.name.trim();
    this.email = this.email.trim();
    this.type = this.type.trim();
    this.message = this.message.trim();
    this.invalidFields = [];

    if (!this.name) {
      this.invalidFields.push('name');
    }

    if (!this.email) {
      this.invalidFields.push('email');
    }

    if (!this.type) {
      this.invalidFields.push('type');
    }

    if (!this.message) {
      this.invalidFields.push('message');
    }

    if (!this.checkbox) {
      this.invalidFields.push('checkbox');
    }

    return this.invalidFields.length === 0;
  }

  async send(): Promise<void> {
    if (!this.checkFields()) {
      return;
    }

    const loading = await this.utility.showLoading('Formular wird gesendet...');

    const mail: IMail = {
      to: 'lar.rickert.19@lehre.mosbach.dhbw.de',
      replyTo: this.email,
      subject: 'Bug Report',
      message: `Hey,\nich habe einen Fehler in der Vertretungsplan App gefunden.\n\nFehlerart: ${this.type}\nBeschreibung:\n${this.message}\n\n---\nLiebe Grüße\n${this.name}`,
    };

    const isSend = await this.mail.sendMail(mail);

    if (isSend) {
      this.name = '';
      this.email = '';
      this.type = '';
      this.message = '';
      this.invalidFields = [];
      this.checkbox = false;

      this.utility.showToast('Vielen Dank für deine Nachricht!');
    } else {
      this.utility.showToast(
        'Beim Senden deines Nachricht ist ein Fehler aufgetreten! Bitte versuche es später erneut.'
      );
    }

    loading.dismiss();
  }
}
