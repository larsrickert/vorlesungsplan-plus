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
const { SplashScreen, StatusBar, Keyboard } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public navItems = [
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
  public bottomNavItems = [
    {
      title: 'Einstellungen',
      url: '/settings',
      icon: 'cog-outline',
    },
    {
      title: 'Installation',
      url: '/installation',
      icon: 'download-outline',
    },
  ];

  setThemeFunction;
  darkModeUserPreference: MediaQueryList;

  constructor(public router: Router, private storage: StorageService) {
    this.initializeApp();
  }

  // initialze app style and theme
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
}
