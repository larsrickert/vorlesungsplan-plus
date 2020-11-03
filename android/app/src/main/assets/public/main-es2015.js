(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Capacitor\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");






const { SplashScreen, StatusBar, Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [
            {
                title: 'Title',
                url: '/home',
                icon: 'information-circle-outline',
            },
        ];
        this.bottomNavItems = [
            {
                title: 'Title',
                url: '/',
                icon: 'information-circle-outline',
            },
        ];
        this.initializeApp();
    }
    // initialze app style and theme
    initializeApp() {
        // set theme listeners (dark / light mode)
        this.setTheme();
        // set text color of status bar (clock, battery percentage etc.)
        // StatusBarStyle.Dark = white text , StatusBarStyle.Light = dark text
        // https://capacitorjs.com/docs/apis/status-bar
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('StatusBar')) {
            StatusBar.setStyle({
                style: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["StatusBarStyle"].Dark,
            });
        }
        // hide splash screen automatically when app is ready to be used
        // https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('SplashScreen')) {
            SplashScreen.hide();
        }
    }
    // call once to enable auto changing of theme (dark / light)
    // user preference can be added, a.e. theme depending on a setting
    setTheme() {
        // get reference to users device dark mode setting
        if (!this.darkModeUserPreference) {
            this.darkModeUserPreference = window.matchMedia('(prefers-color-scheme: dark)');
        }
        // set inital theme to user device preference, will eventuelly be changed to user selection (may prevent visual artifacts)
        this.toggleDarkTheme(this.darkModeUserPreference.matches);
        // remove any theme listeners
        if (this.setThemeFunction) {
            this.darkModeUserPreference.removeEventListener('change', this.setThemeFunction);
            this.setThemeFunction = null;
        }
        // change value of customUserSetting to change theme to user selection
        // true = dark mode
        // false = light mode
        // null = auto (based on device settings)
        const customUserSetting = null;
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
            this.darkModeUserPreference.addEventListener('change', this.setThemeFunction);
        }
        else if (!customUserSetting) {
            // enable static light mode
            this.toggleDarkTheme(false);
        }
        else {
            // enable static dark mode
            this.toggleDarkTheme(true);
        }
    }
    // apply dark / light mode to app
    toggleDarkTheme(dark) {
        document.body.classList.toggle('dark', dark);
        this.toggleKeyboardStyle(dark);
    }
    // change keyboard color
    toggleKeyboardStyle(dark) {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('Keyboard')) {
            const style = dark ? _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["KeyboardStyle"].Dark : _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["KeyboardStyle"].Light;
            Keyboard.setStyle({ style });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <!-- main navigation -->\n        <ion-list id=\"mainNav\">\n          <!-- app details -->\n          <div class=\"app-details\">\n            <img class=\"logo\" src=\"../assets/images/logo.svg\" alt=\"Logo\" />\n            <div>\n              <ion-label class=\"app-details__title\">App Name</ion-label>\n              <ion-note>Subtitle</ion-note>\n            </div>\n          </div>\n\n          <!-- navigation -->\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of navItems\">\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[page.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.item--selected]=\"page.url === router.url\"\n            >\n              <ion-icon slot=\"start\" [name]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- bottom navigation -->\n        <ion-list>\n          <ion-note>Bottom Navigation</ion-note>\n\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let page of bottomNavItems\"\n          >\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[page.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.item--selected]=\"page.url === router.url\"\n            >\n              <ion-icon slot=\"start\" [name]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-menu .logo {\n  max-height: 60px;\n  max-width: 50px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-left: 10px;\n  margin-right: 10px;\n}\nion-menu .app-details {\n  margin-top: constant(safe-area-inset-top);\n  margin-top: env(safe-area-inset-top);\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (min-width: 768px) {\n  ion-menu .app-details {\n    margin-top: calc(constant(safe-area-inset-top) + 20px);\n    margin-top: calc(env(safe-area-inset-top) + 20px);\n  }\n}\nion-menu .app-details__title {\n  display: block;\n  padding-left: 10px;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 768px) {\n  ion-menu .app-details__title {\n    font-size: 20px;\n  }\n}\nion-menu ion-note {\n  padding-left: 10px;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-menu #mainNav {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  margin-bottom: 20px;\n}\nion-menu ion-item {\n  border-radius: var(--app-border-radius);\n  margin: 5px 0px;\n  --padding-start: 10px;\n}\nion-menu ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu .item--selected {\n  --color: var(--ion-color-primary);\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu .item--selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0U7RUFFRSx5Q0FBQTtFQUNBLG9DQUFBO0VBT0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQUdJO0VBTEY7SUFNSSxzREFBQTtJQUNBLGlEQUFBO0VBQUo7QUFDRjtBQU1JO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU1NO0VBUEY7SUFRSSxlQUFBO0VBSE47QUFDRjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFOSjtBQVNFO0VBQ0UsMkRBQUE7RUFDQSxtQkFBQTtBQVBKO0FBV0U7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVRKO0FBV0k7RUFDRSxjQUFBO0FBVE47QUFhRTtFQUNFLGlDQUFBO0VBQ0Esc0RBQUE7QUFYSjtBQWFJO0VBQ0UsK0JBQUE7QUFYTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cblxuICAubG9nbyB7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC8vIHdyYXBwZXIgd2l0aCBsb2dvLCBhcHAgdGl0bGUgYW5kIHN1YnRpdGxlXG4gIC5hcHAtZGV0YWlscyB7XG4gICAgLy8gbm90Y2hlc1xuICAgIG1hcmdpbi10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIG1hcmdpbi10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMHB4KTtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjBweCk7XG4gICAgfVxuXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGFwcCBzdWJ0aXRsZSBhbmQgYm90dG9tIG5hdiB0aXRsZVxuICBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIH1cblxuICAjbWFpbk5hdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC8vIG5hdiBpdGVtc1xuICBpb24taXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJvcmRlci1yYWRpdXMpO1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogIzYxNmU3ZTtcbiAgICB9XG4gIH1cblxuICAuaXRlbS0tc2VsZWN0ZWQge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map