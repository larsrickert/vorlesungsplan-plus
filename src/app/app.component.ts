import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  Capacitor,
  KeyboardStyle,
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
import { SettingKey } from './interfaces/ISetting';
import { StorageService } from './services/storage/storage.service';
const {
  SplashScreen,
  StatusBar,
  Keyboard,
  Browser,
  LocalNotifications,
} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navItems = [
    {
      title: 'Vorlesungsplan',
      url: '/timetable',
      icon: 'school-outline',
    },
    {
      title: 'Veranstaltungen',
      url: '/events',
      icon: 'calendar-outline',
    },
    {
      title: 'Aufgaben',
      url: '/tasks',
      icon: 'file-tray-full-outline',
    },
  ];
  bottomNavItems = [
    {
      title: 'Installation',
      url: '/installation',
      icon: 'download-outline',
    },
    {
      title: 'Einstellungen',
      url: '/settings',
      icon: 'cog-outline',
    },
  ];
  links = [
    {
      title: 'INF19 Wiki',
      href: 'https://wiki.siphalor.de/',
      image: '/assets/images/logo-siphalor-wiki.png',
    },
    {
      title: 'INF19 OneDrive',
      desc: 'Du musst dich mit deinem DHBW Microsoft-Konto anmelden',
      href:
        'https://lehremosbachdhbwde-my.sharepoint.com/:f:/g/personal/lar_rickert_19_lehre_mosbach_dhbw_de/Eii8oVgD33pDovLSbxYxsk0BAVJDy5DMMEGpZy-A5xVZ1Q?e=h6NzDz',
      image: '/assets/images/logo-onedrive.svg',
    },
  ];

  setThemeFunction;
  darkModeUserPreference: MediaQueryList;
  showLinks = false;
  autoFetch: any;

  constructor(public router: Router, private storage: StorageService) {
    this.initializeApp();
  }

  initializeApp() {
    // set theme listeners (dark / light mode)
    this.setTheme();

    // set text color of status bar (clock, battery percentage etc.)
    // StatusBarStyle.Dark = white text , StatusBarStyle.Light = dark text
    // https://capacitorjs.com/docs/apis/status-bar
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.setStyle({
        style: StatusBarStyle.Dark,
      });
    }

    // hide splash screen automatically when app is ready to be used
    // https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    if (Capacitor.isPluginAvailable('SplashScreen')) {
      SplashScreen.hide();
    }

    // remove "installation" nav item when running native
    if (Capacitor.isNative) {
      this.bottomNavItems = this.bottomNavItems.filter((item) => {
        return item.url !== '/installation';
      });
    }

    // redirect to intro when no course is set
    // watch whether to hide links or not
    this.storage.settings.subscribe(() => {
      if (StorageService.INIT_SETTINGS) {
        const course = this.storage.getSetting(SettingKey.COURSE);

        if (!this.storage.getSetting(SettingKey.INTRO) && !course) {
          this.router.navigate(['/intro']);
        }

        this.showLinks = course && course.includes('INF19');
      }
    });

    // request permissions for sending notifications
    LocalNotifications.requestPermission();

    // fetch lectures every 10 minutes
    if (!this.autoFetch) {
      this.autoFetch = setInterval(() => {
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'Testnachricht',
              body: 'Test',
              id: 1,
              schedule: { at: new Date(Date.now()) },
              sound: null,
              attachments: null,
              actionTypeId: '',
              extra: null,
            },
          ],
        });
      }, 1000 * 60 * 1);
    }
  }

  // call once to enable auto changing of theme (dark / light)
  // user preference can be added, a.e. theme depending on a setting
  private setTheme(): void {
    this.storage.settings.subscribe((settings) => {
      // get reference to users device dark mode setting
      if (!this.darkModeUserPreference) {
        this.darkModeUserPreference = window.matchMedia(
          '(prefers-color-scheme: dark)'
        );
      }

      // set inital theme to user device preference, will eventuelly be changed to user selection (may prevent visual artifacts)
      this.toggleDarkTheme(this.darkModeUserPreference.matches);

      // remove any theme listeners
      if (this.setThemeFunction) {
        this.darkModeUserPreference.removeEventListener(
          'change',
          this.setThemeFunction
        );
        this.setThemeFunction = null;
      }

      // change value of customUserSetting to change theme to user selection
      // true = dark mode
      // false = light mode
      // null = auto (based on device settings)
      const customUserSetting = this.storage.getSetting(SettingKey.DARKMODE);

      if (customUserSetting === null) {
        // auto dark mode detection (based on device settings)
        if (!this.setThemeFunction) {
          // create function that toggles theme
          this.setThemeFunction = function toggleDarkTheme(e) {
            document.body.classList.toggle('dark', e.matches);
          };
        }

        // apply app theme (dark / light) to auto deteced value
        this.toggleDarkTheme(this.darkModeUserPreference.matches);

        // add listener for changes to user device theme setting
        this.darkModeUserPreference.addEventListener(
          'change',
          this.setThemeFunction
        );
      } else if (!customUserSetting) {
        // enable static light mode
        this.toggleDarkTheme(false);
      } else {
        // enable static dark mode
        this.toggleDarkTheme(true);
      }
    });
  }

  // apply dark / light mode to app
  private toggleDarkTheme(dark: boolean) {
    document.body.classList.toggle('dark', dark);
    this.toggleKeyboardStyle(dark);
  }

  // change keyboard color
  private toggleKeyboardStyle(dark: boolean) {
    if (Capacitor.isPluginAvailable('Keyboard')) {
      const style = dark ? KeyboardStyle.Dark : KeyboardStyle.Light;
      Keyboard.setStyle({ style });
    }
  }

  navigate(url: string) {
    Browser.open({ url });
  }
}
