(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\vorlesungsplan-capacitor\src\main.ts */"zUnb");


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

/***/ "E2f4":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/ILecture */ "dP1x");
/* harmony import */ var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/ISetting */ "N4YS");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/utility.service */ "LcQX");
var StorageService_1;








const { Storage, LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let StorageService = StorageService_1 = class StorageService {
    constructor(http, utility) {
        this.http = http;
        this.utility = utility;
        // observables
        this.settingsBs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.settings = this.settingsBs.asObservable();
        this.lecturesBs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.lectures = this.lecturesBs.asObservable();
        // init settings
        this.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].SETTINGS).then((settings) => {
            StorageService_1.INIT_SETTINGS = true;
            this.settingsBs.next(Array.isArray(settings) ? settings : []);
        });
        // init lectures
        this.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES).then((lectures) => {
            this.lecturesBs.next(Array.isArray(lectures) ? this.validateLectures(lectures) : []);
        });
    }
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key });
            return JSON.parse(ret.value);
        });
    }
    store(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({
                key,
                value: JSON.stringify(value),
            });
        });
    }
    // fetch lectures for set course from api or local storage if api is not available
    fetchLectures() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const course = this.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);
            if (!course) {
                // no course set, so lectures can't be fetched
                console.error('Can not fetch lectures for undefined or invalid course.');
                return false;
            }
            try {
                // send get request to api
                let lectures = yield this.http
                    .get(`${StorageService_1.API_HOST}?course=${course.toLowerCase()}`)
                    .toPromise();
                lectures = this.validateLectures(lectures);
                // add status to lectures
                lectures = this.setStatus(this.lecturesBs.getValue(), lectures);
                this.lecturesBs.next(lectures);
                // store fetched lectures in local storage and update last updated date
                yield this.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES, lectures);
                yield this.addSetting({
                    key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTUPDATED,
                    value: new Date(Date.now()),
                });
                this.checkForChanges(lectures);
                return true;
            }
            catch (error) {
                console.error('Error while fetching lectures!');
                console.error(error);
                // try to load lectures from local storage
                const local = yield this.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES);
                this.lecturesBs.next(local ? this.validateLectures(local) : []);
                console.log('Fetched lectures from local storage.');
                return false;
            }
        });
    }
    // returns array of all available courses
    fetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`${StorageService_1.API_HOST}`).toPromise();
        });
    }
    // ensures that lectures from local storage are valid
    validateLectures(lectures) {
        lectures.forEach((lecture) => {
            lecture.end = new Date(lecture.end);
            lecture.start = new Date(lecture.start);
            lecture.lastModified = new Date(lecture.lastModified);
        });
        return lectures;
    }
    setStatus(oldLectures, newLectures) {
        if (!oldLectures || oldLectures.length === 0) {
            return newLectures;
        }
        // remove past lectures from old lectures
        oldLectures = oldLectures.filter((lecture) => {
            return lecture.end.getTime() >= Date.now();
        });
        const checked = [];
        // check if new lectures were added
        newLectures.forEach((newLecture) => {
            const lecture = oldLectures.find((oldLecture) => {
                return this.compareLectures(oldLecture, newLecture);
            });
            if (!lecture || lecture.status) {
                // newLecture was added
                newLecture.status = src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].ADDED;
            }
            else if (lecture.status) {
                newLecture.status = lecture.status;
            }
            checked.push(newLecture);
        });
        // checked now contains all new lectures and newly added lectures have status "added"
        // check if old lectures were removed
        oldLectures.forEach((oldLecture) => {
            const lecture = newLectures.find((newLecture) => {
                return this.compareLectures(newLecture, oldLecture);
            });
            if (!lecture) {
                // oldLecture was removed
                oldLecture.status = src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].REMOVED;
                checked.push(oldLecture);
            }
        });
        return checked.sort((a, b) => {
            return a.start.getTime() - b.start.getTime();
        });
    }
    // resets status of all lectures and removes lecture with status "removed"
    resetStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lectures = this.lecturesBs.getValue();
            const reset = [];
            lectures.forEach((lecture) => {
                if (lecture.status === src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].ADDED || !lecture.status) {
                    lecture.status = null;
                    reset.push(lecture);
                }
            });
            this.lecturesBs.next(reset);
            yield this.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES, reset);
        });
    }
    // returns true when both lectures are equal
    compareLectures(a, b) {
        for (const attr in a) {
            // ignore status, lastModified and uid
            if (attr === 'status' || attr === 'lastModified' || attr === 'uid') {
                continue;
            }
            if (a[attr] instanceof Date && b[attr] instanceof Date) {
                // compare date attribute
                if (a[attr].getTime() !== b[attr].getTime()) {
                    return false;
                }
            }
            else if (a[attr] !== b[attr]) {
                // attributes are different
                return false;
            }
        }
        // lectures are equal
        return true;
    }
    // update or add setting to local storage if its no duplicate
    addSetting(setting) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const settings = this.settingsBs.getValue();
            const storedSetting = settings.find((storedSetting) => {
                return storedSetting.key === setting.key;
            });
            if (storedSetting) {
                storedSetting.value = setting.value;
            }
            else {
                settings.push(setting);
            }
            this.settingsBs.next(settings);
            yield this.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].SETTINGS, settings);
        });
    }
    getSetting(identifier) {
        const settings = this.settingsBs.getValue();
        const match = settings.find((setting) => {
            return setting.key === identifier;
        });
        return match ? match.value : null;
    }
    checkForChanges(lectures) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (lectures.length === 0) {
                return;
            }
            // copy lectures (avoids reference problems when modifing those lectures)
            const temp = [];
            lectures.forEach((lec) => {
                temp.push(Object.assign({}, lec));
            });
            lectures = temp;
            let hasChanges = false;
            // check if new fetched lectures have changes
            for (const lecture of lectures) {
                if (lecture.status) {
                    hasChanges = true;
                    break;
                }
            }
            const currentCourse = this.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);
            const settingValue = {
                course: currentCourse,
                lectures: JSON.stringify(lectures),
            };
            // store currently checked lectures to local storage
            yield this.addSetting({
                key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTCHANGENOTIFICATION,
                value: settingValue,
            });
            // new lectures does not have changes
            if (!hasChanges) {
                return;
            }
            let lastChecked = this.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTCHANGENOTIFICATION);
            // last checked is unset
            if (!lastChecked) {
                return;
            }
            let lastLectures = this.validateLectures(JSON.parse(lastChecked.lectures));
            let checkedCourse = lastChecked.course;
            // last checked lectures are empty or last checked course is different from current course
            if (lastChecked.lectures.length === 0 || checkedCourse !== currentCourse) {
                return;
            }
            // remove old lectures and status
            lastLectures = lastLectures.filter((lecture) => {
                lecture.status = null;
                return lecture.end.getTime() > Date.now();
            });
            lectures = lectures.filter((lecture) => {
                lecture.status = null;
                return lecture.end.getTime() > Date.now();
            });
            const h1 = this.createHash(JSON.stringify(lectures));
            const h2 = this.createHash(JSON.stringify(lastLectures));
            // lectures have changed sinced last check
            // send push notification
            if (h1 !== h2) {
                yield this.utility.sendPushNotification('Der Vorlesungsplan hat sich geändert', '');
                const settingValue = {
                    course: currentCourse,
                    lectures: JSON.stringify(lectures),
                };
                // store currently checked lectures to local storage
                yield this.addSetting({
                    key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTCHANGENOTIFICATION,
                    value: settingValue,
                });
            }
        });
    }
    createHash(str) {
        let hash = 0;
        let i;
        let chr;
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
};
StorageService.API_HOST = 'https://api.rickstack.de/';
StorageService.INIT_SETTINGS = false;
StorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] }
];
StorageService = StorageService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], StorageService);



/***/ }),

/***/ "LcQX":
/*!*****************************************************!*\
  !*** ./src/app/services/utility/utility.service.ts ***!
  \*****************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




const { LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let UtilityService = class UtilityService {
    constructor(toastController, loadingController) {
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    // send a push notification to the user if permission ist granted
    sendPushNotification(title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield LocalNotifications.requestPermission();
            if (result.granted) {
                yield LocalNotifications.schedule({
                    notifications: [
                        {
                            title,
                            body: message,
                            id: 1,
                            sound: null,
                            attachments: null,
                            actionTypeId: '',
                            extra: null,
                        },
                    ],
                });
                return true;
            }
            return false;
        });
    }
    // show toast message at the bottom of the screen
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alreadyDisplaying = yield this.toastController.getTop();
            if (!alreadyDisplaying) {
                const toast = yield this.toastController.create({
                    message,
                    duration: 2000,
                });
                yield toast.present();
            }
        });
    }
    // show loading in the middle of the screen (blocks user input)
    showLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alreadyDisplaying = yield this.loadingController.getTop();
            if (!alreadyDisplaying) {
                const loading = yield this.loadingController.create({
                    cssClass: 'app-loading',
                    message,
                });
                yield loading.present();
                return loading;
            }
            else {
                return null;
            }
        });
    }
    createBlocks(items) {
        const blocks = [];
        let newBlock = { date: null, items: [] };
        let currentDate = this.stripTimeFromDate(new Date(Date.now()));
        // check each lectures if it is for current date and then assign it to the new block
        for (const item of items) {
            if (this.isSameDay(currentDate, item.start)) {
                // lecture is for current block
                if (!newBlock.date) {
                    // new block
                    newBlock.date = this.stripTimeFromDate(currentDate);
                }
                newBlock.items.push(item);
            }
            else {
                // new day / block
                if (newBlock.date && newBlock.items.length > 0) {
                    blocks.push(newBlock);
                }
                // reset
                currentDate = this.stripTimeFromDate(item.start);
                newBlock = { date: currentDate, items: [] };
                newBlock.items.push(item);
            }
        }
        // add last block
        if (newBlock.date && newBlock.items.length > 0) {
            blocks.push(newBlock);
        }
        return blocks;
    }
    // returns true if two days are equal, only checks year, month and day
    isSameDay(a, b) {
        return (this.stripTimeFromDate(a).getTime() ===
            this.stripTimeFromDate(b).getTime());
    }
    // unifies date to year, month, day only (for comparrison), optional days can be added to the date (a.e. 1 returns date for tomorrow)
    stripTimeFromDate(date, addDays) {
        const days = addDays ? date.getDate() + addDays : date.getDate();
        return new Date(date.getFullYear(), date.getMonth(), days, 0, 0, 0, 0);
    }
    // returns true if lecture is an exam
    isExam(lecture) {
        return lecture.name.toLowerCase().includes('klausur');
    }
    hasChanges(lectures) {
        for (const lecture of lectures) {
            if (lecture.status) {
                return true;
            }
        }
        return false;
    }
};
UtilityService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UtilityService);



/***/ }),

/***/ "N4YS":
/*!****************************************!*\
  !*** ./src/app/interfaces/ISetting.ts ***!
  \****************************************/
/*! exports provided: SettingKey, StorageKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingKey", function() { return SettingKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageKey", function() { return StorageKey; });
// keys to identify setting
var SettingKey;
(function (SettingKey) {
    SettingKey["DARKMODE"] = "darkMode";
    SettingKey["LASTUPDATED"] = "lastUpdated";
    SettingKey["COURSE"] = "course";
    SettingKey["INTRO"] = "intro";
    SettingKey["LASTCHANGENOTIFICATION"] = "lastChangeNotification";
})(SettingKey || (SettingKey = {}));
// keys for local storage
var StorageKey;
(function (StorageKey) {
    StorageKey["SETTINGS"] = "settings";
    StorageKey["LECTURES"] = "lectures";
    StorageKey["TASKS"] = "tasks";
    StorageKey["EVENTS"] = "events";
})(StorageKey || (StorageKey = {}));


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
/* harmony import */ var _interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interfaces/ISetting */ "N4YS");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/utility/utility.service */ "LcQX");









const { SplashScreen, StatusBar, Keyboard, Browser, LocalNotifications, } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let AppComponent = class AppComponent {
    constructor(router, storage, utility) {
        this.router = router;
        this.storage = storage;
        this.utility = utility;
        this.navItems = [
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
        this.bottomNavItems = [
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
        this.links = [
            {
                title: 'INF19 Wiki',
                href: 'https://wiki.siphalor.de/',
                image: '/assets/images/logo-siphalor-wiki.png',
            },
            {
                title: 'INF19 OneDrive',
                desc: 'Du musst dich mit deinem DHBW Microsoft-Konto anmelden',
                href: 'https://lehremosbachdhbwde-my.sharepoint.com/:f:/g/personal/lar_rickert_19_lehre_mosbach_dhbw_de/Eii8oVgD33pDovLSbxYxsk0BAVJDy5DMMEGpZy-A5xVZ1Q?e=h6NzDz',
                image: '/assets/images/logo-onedrive.svg',
            },
        ];
        this.showLinks = false;
        this.initializeApp();
    }
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
        // remove "installation" nav item when running native
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isNative) {
            this.bottomNavItems = this.bottomNavItems.filter((item) => {
                return item.url !== '/installation';
            });
        }
        // redirect to intro when no course is set
        // watch whether to hide links or not
        this.storage.settings.subscribe(() => {
            if (_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"].INIT_SETTINGS) {
                const course = this.storage.getSetting(_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].COURSE);
                if (!this.storage.getSetting(_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].INTRO) && !course) {
                    this.router.navigate(['/intro']);
                }
                this.showLinks = course && course.includes('INF19');
            }
        });
        // request permissions for sending notifications
        this.utility.sendPushNotification('Initial message', 'Message');
        // fetch lectures every 10 minutes
        if (!this.autoFetch) {
            this.autoFetch = setInterval(() => {
                this.utility.sendPushNotification('Testnachricht', '');
            }, 1000 * 60 * 1);
        }
    }
    // call once to enable auto changing of theme (dark / light)
    // user preference can be added, a.e. theme depending on a setting
    setTheme() {
        this.storage.settings.subscribe((settings) => {
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
            const customUserSetting = this.storage.getSetting(_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].DARKMODE);
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
        });
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
    navigate(url) {
        Browser.open({ url });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <!-- main navigation -->\n        <ion-list id=\"mainNav\">\n          <!-- app details -->\n          <div class=\"app-details\">\n            <img class=\"logo\" src=\"../assets/images/logo.svg\" alt=\"Logo\" />\n            <div>\n              <ion-label class=\"app-details__title\">Vorlesungsplan+</ion-label>\n              <ion-note>DHBW Mosbach</ion-note>\n            </div>\n          </div>\n\n          <!-- navigation -->\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of navItems\">\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[page.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.item--selected]=\"page.url === router.url\"\n            >\n              <ion-icon slot=\"start\" [name]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- bottom navigation -->\n        <ion-list>\n          <ion-note>App</ion-note>\n\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let page of bottomNavItems\"\n          >\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[page.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.item--selected]=\"page.url === router.url\"\n            >\n              <ion-icon slot=\"start\" [name]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- links -->\n        <details class=\"showLinks\" *ngIf=\"showLinks\">\n          <summary>Verknüpfungen anzeigen</summary>\n\n          <ng-container *ngFor=\"let link of links\">\n            <ion-item\n              class=\"link\"\n              lines=\"none\"\n              detail=\"false\"\n              (click)=\"navigate(link.href)\"\n            >\n              <img\n                class=\"link__image\"\n                [src]=\"link.image\"\n                [alt]=\"link.title\"\n                [title]=\"link.title\"\n              />\n              <ion-label>{{ link.title }}</ion-label>\n            </ion-item>\n            <div *ngIf=\"link.desc\" class=\"link__desc\">\n              <ion-icon\n                class=\"link__desc__icon\"\n                name=\"information-circle-outline\"\n              ></ion-icon>\n              <ion-text>{{ link.desc }}</ion-text>\n            </div>\n          </ng-container>\n        </details>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/de */ "VLs4");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10___default.a, 'de');
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'de' },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "dP1x":
/*!****************************************!*\
  !*** ./src/app/interfaces/ILecture.ts ***!
  \****************************************/
/*! exports provided: LectureStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureStatus", function() { return LectureStatus; });
var LectureStatus;
(function (LectureStatus) {
    LectureStatus["ADDED"] = "added";
    LectureStatus["REMOVED"] = "removed";
})(LectureStatus || (LectureStatus = {}));


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
        redirectTo: '/timetable',
        pathMatch: 'full',
    },
    {
        path: 'timetable',
        loadChildren: () => Promise.all(/*! import() | pages-timetable-timetable-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-timetable-timetable-module")]).then(__webpack_require__.bind(null, /*! ./pages/timetable/timetable.module */ "QUEe")).then((m) => m.TimetablePageModule),
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | pages-settings-settings-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "yPrK")).then((m) => m.SettingsPageModule),
    },
    {
        path: 'course-select',
        loadChildren: () => Promise.all(/*! import() | pages-course-select-course-select-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-course-select-course-select-module")]).then(__webpack_require__.bind(null, /*! ./pages/course-select/course-select.module */ "/lGa")).then((m) => m.CourseSelectPageModule),
    },
    {
        path: 'events',
        loadChildren: () => Promise.all(/*! import() | pages-events-events-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null, /*! ./pages/events/events.module */ "Obr4")).then((m) => m.EventsPageModule),
    },
    {
        path: 'event-details/:id',
        loadChildren: () => Promise.all(/*! import() | pages-event-details-event-details-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-event-details-event-details-module")]).then(__webpack_require__.bind(null, /*! ./pages/event-details/event-details.module */ "T4q2")).then((m) => m.EventDetailsPageModule),
    },
    {
        path: 'tasks',
        loadChildren: () => Promise.all(/*! import() | pages-tasks-tasks-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-tasks-tasks-module")]).then(__webpack_require__.bind(null, /*! ./pages/tasks/tasks.module */ "i854")).then(m => m.TasksPageModule)
    },
    {
        path: 'task-edit',
        loadChildren: () => Promise.all(/*! import() | pages-task-edit-task-edit-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-task-edit-task-edit-module")]).then(__webpack_require__.bind(null, /*! ./pages/task-edit/task-edit.module */ "kFKP")).then(m => m.TaskEditPageModule)
    },
    {
        path: 'installation',
        loadChildren: () => Promise.all(/*! import() | pages-installation-installation-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-installation-installation-module")]).then(__webpack_require__.bind(null, /*! ./pages/installation/installation.module */ "Nnce")).then(m => m.InstallationPageModule)
    },
    {
        path: 'about',
        loadChildren: () => Promise.all(/*! import() | pages-about-about-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-about-about-module")]).then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(m => m.AboutPageModule)
    },
    {
        path: 'report',
        loadChildren: () => Promise.all(/*! import() | pages-report-report-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-report-report-module")]).then(__webpack_require__.bind(null, /*! ./pages/report/report.module */ "Q0Id")).then(m => m.ReportPageModule)
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() | pages-intro-intro-module */[__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-intro-intro-module")]).then(__webpack_require__.bind(null, /*! ./pages/intro/intro.module */ "a+tW")).then(m => m.IntroPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-menu .logo {\n  max-height: 60px;\n  max-width: 50px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-left: 10px;\n  margin-right: 10px;\n}\nion-menu .app-details {\n  margin-top: constant(safe-area-inset-top);\n  margin-top: env(safe-area-inset-top);\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n}\nion-menu .app-details__title {\n  display: block;\n  padding-left: 10px;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 768px) {\n  ion-menu .app-details__title {\n    font-size: 20px;\n  }\n}\nion-menu ion-note {\n  padding-left: 10px;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-menu #mainNav {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  margin-bottom: 20px;\n}\nion-menu ion-item {\n  border-radius: var(--app-border-radius);\n  margin: 5px 0px;\n  --padding-start: 10px;\n}\nion-menu ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu .item--selected {\n  --color: var(--ion-color-primary);\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu .item--selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu .showLinks {\n  margin-top: 20px;\n  margin-left: 10px;\n}\nion-menu .showLinks summary {\n  outline: 0;\n  cursor: pointer;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-menu .showLinks .link {\n  cursor: pointer;\n}\nion-menu .showLinks .link__image {\n  max-height: 30px;\n  max-width: 30px;\n  margin-right: 10px;\n}\nion-menu .showLinks .link__desc {\n  margin-left: 12px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: var(--ion-color-dark);\n}\nion-menu .showLinks .link__desc__icon {\n  font-size: 18px;\n  min-width: 18px;\n  margin-right: 10px;\n}\nion-menu .showLinks .link:hover {\n  --background: rgba(var(--ion-color-medium-rgb), 0.07);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0U7RUFFRSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQU9NO0VBUEY7SUFRSSxlQUFBO0VBSk47QUFDRjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFQSjtBQVVFO0VBQ0UsMkRBQUE7RUFDQSxtQkFBQTtBQVJKO0FBWUU7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVZKO0FBWUk7RUFDRSxjQUFBO0FBVk47QUFjRTtFQUNFLGlDQUFBO0VBQ0Esc0RBQUE7QUFaSjtBQWNJO0VBQ0UsK0JBQUE7QUFaTjtBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFkSjtBQWdCSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxlQUFBO0FBZk47QUFpQk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFoQlI7QUFrQlE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBaEJWO0FBcUJJO0VBQ0UscURBQUE7QUFuQk4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAvLyB3cmFwcGVyIHdpdGggbG9nbywgYXBwIHRpdGxlIGFuZCBzdWJ0aXRsZVxuICAuYXBwLWRldGFpbHMge1xuICAgIC8vIG5vdGNoZXNcbiAgICBtYXJnaW4tdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICBtYXJnaW4tdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwIHN1YnRpdGxlIGFuZCBib3R0b20gbmF2IHRpdGxlXG4gIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgfVxuXG4gICNtYWluTmF2IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLy8gbmF2IGl0ZW1zXG4gIGlvbi1pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYm9yZGVyLXJhZGl1cyk7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjNjE2ZTdlO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLS1zZWxlY3RlZCB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLnNob3dMaW5rcyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgIHN1bW1hcnkge1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmX19pbWFnZSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmX19kZXNjIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgICAmX19pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5saW5rOmhvdmVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMDcpO1xuICAgIH1cbiAgfVxufVxuIl19 */");

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