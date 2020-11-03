import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMail } from 'src/app/interfaces/IMail';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  static MAIL_HOST = 'https://api.rickstack.de/mail/';

  constructor(private http: HttpClient) {}

  async sendMail(mail: IMail): Promise<boolean> {
    try {
      // send get request to api
      const response = await this.http
        .post<any>(MailService.MAIL_HOST, JSON.stringify(mail), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }
}
