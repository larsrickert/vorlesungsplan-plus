import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

import { Plugins } from '@capacitor/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
const { Share } = Plugins;

@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss'],
})
export class InstallationPage implements OnInit {
  device = 'android';

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private utility: UtilityService
  ) {}

  ngOnInit() {}

  async downloadWidgetScript(): Promise<void> {
    const filename = 'Mosbach_Vorlesungsplan.scriptable';

    try {
      const script = await this.http
        .get('https://api.rickstack.de/ios-widget/', {
          responseType: 'blob',
        })
        .toPromise();

      try {
        const result = await this.storage.storeInFilesystem(
          await script.text(),
          filename
        );

        if (result) {
          console.log(result);

          await Share.share({
            url: `file://${result}`,
          });
        }
      } catch (e) {
        // Web Share API may not be available
        saveAs(script, filename);
      }
    } catch (error) {
      this.utility.showToast(
        'Beim Herunterladen der Datei ist ein Fehler aufgetreten.'
      );
    }
  }
}
