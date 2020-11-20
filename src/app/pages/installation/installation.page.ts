import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

import { Plugins, Capacitor } from '@capacitor/core';
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
  isNative = Capacitor.isNative;
  latestVersion = '';
  currentVersion = UtilityService.appVersion;
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private utility: UtilityService
  ) {}

  ngOnInit() {
    this.utility.getLatestAppVersion().then((version) => {
      this.latestVersion = version;
    });
  }

  async downloadWidgetScript(): Promise<void> {
    try {
      const script = await this.http
        .get(
          `https://api.rickstack.de/files/mosbach-vorlesungsplan-widget.scriptable?${new Date().getTime()}`,
          {
            responseType: 'blob',
          }
        )
        .toPromise();

      await this.storage.shareFile(
        await script.text(),
        'mosbach-vorlesungsplan-widget.scriptable',
        script.type
      );
    } catch (error) {
      this.utility.showToast(
        'Beim Herunterladen der Datei ist ein Fehler aufgetreten.'
      );
    }
  }

  async downloadApk() {
    const loading = await this.utility.showLoading('APK wird heruntergeladen');

    try {
      const apk = await this.http
        .get(
          `https://api.rickstack.de/files/app-release.apk?${new Date().getTime()}`,
          {
            responseType: 'blob',
          }
        )
        .toPromise();

      await this.storage.shareFile(
        await apk.text(),
        `vorlesungsplan-plus-v${this.latestVersion}.apk`,
        apk.type
      );
      await loading.dismiss();
    } catch (error) {
      await loading.dismiss();
      this.utility.showToast(
        'Beim Download der APK ist ein Fehler aufgetreten.'
      );
    }
  }
}
