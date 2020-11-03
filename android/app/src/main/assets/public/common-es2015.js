(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1/we":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/course-select/course-select.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Kurs auswählen\"></app-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <ion-searchbar\n      animated\n      showCancelButton=\"focus\"\n      mode=\"ios\"\n      placeholder=\"Suchen...\"\n      cancelButtonText=\"Abbrechen\"\n      (ionChange)=\"searchCourse($event)\"\n    ></ion-searchbar>\n\n    <div *ngIf=\"courseGroups.length > 0 && displayedGroups.length === 0\">\n      <p>Deine Suche hat keine Treffer ergeben.</p>\n    </div>\n\n    <div *ngIf=\"courseGroups.length === 0\">\n      <ion-label>Kurse werden geladen...</ion-label>\n      <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </div>\n  </div>\n\n  <ion-list *ngFor=\"let group of displayedGroups\">\n    <ion-item-divider>\n      <ion-label> {{ group.name }} </ion-label>\n    </ion-item-divider>\n\n    <ion-item lines=\"none\" *ngFor=\"let course of group.courses\">\n      <ion-checkbox\n        (ionChange)=\"select($event, course)\"\n        [checked]=\"selectedCourse === course\"\n      ></ion-checkbox>\n      <ion-label>{{ course }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "GqVL":
/*!*************************************************************!*\
  !*** ./src/app/pages/course-select/course-select.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-checkbox {\n  margin-right: 20px;\n}\n\nion-list {\n  padding: 0;\n}\n\nion-searchbar {\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-progress-bar {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cnNlLXNlbGVjdC9jb3Vyc2Utc2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3Vyc2Utc2VsZWN0L2NvdXJzZS1zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNoZWNrYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "HPLd":
/*!***********************************************************!*\
  !*** ./src/app/pages/course-select/course-select.page.ts ***!
  \***********************************************************/
/*! exports provided: CourseSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSelectPage", function() { return CourseSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_select_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-select.page.html */ "1/we");
/* harmony import */ var _course_select_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-select.page.scss */ "GqVL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/ISetting */ "N4YS");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");








let CourseSelectPage = class CourseSelectPage {
    constructor(storage, modalController, router) {
        this.storage = storage;
        this.modalController = modalController;
        this.router = router;
        this.redirect = true;
        this.courseGroups = [];
        this.displayedGroups = [];
        this.selectedCourse = null;
    }
    ngOnInit() {
        this.storage
            .fetchCourses()
            .then((courses) => {
            this.courseGroups = this.groupCourses(courses);
            this.displayedGroups = this.courseGroups;
        })
            .catch(() => {
            this.courseGroups = [];
            this.displayedGroups = [];
        });
        this.selectedCourse = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].COURSE);
    }
    select(ev, course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!ev.target.checked) {
                // user unchecked course
                return;
            }
            this.selectedCourse = course;
            yield this.storage.addSetting({
                key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].COURSE,
                value: course,
            });
            if (this.redirect) {
                this.router.navigate(['/timetable']);
            }
            // close modal
            if (yield this.modalController.getTop()) {
                yield this.modalController.dismiss();
            }
        });
    }
    searchCourse(ev) {
        const searchedValue = ev.target.value.toLowerCase().trim();
        const matches = [];
        if (searchedValue === '') {
            // user cleared searchbar
            this.displayedGroups = this.courseGroups;
            return;
        }
        this.courseGroups.forEach((group) => {
            group.courses.forEach((course) => {
                if (course.toLowerCase().includes(searchedValue)) {
                    matches.push(course);
                }
            });
        });
        this.displayedGroups = this.groupCourses(matches);
    }
    // returns the groupname of a course, a.e. group for INF19B wis INF
    getGroup(course) {
        return course.split(/\d/)[0];
    }
    groupCourses(courses) {
        const groups = [];
        // get unique groups
        courses.forEach((course) => {
            const group = this.getGroup(course);
            if (!groups.includes(group)) {
                groups.push(group);
            }
        });
        const courseGroups = [];
        groups.forEach((group) => {
            const relatedCourses = courses.filter((course) => {
                return this.getGroup(course) === group;
            });
            courseGroups.push({ name: group, courses: relatedCourses });
        });
        return courseGroups;
    }
};
CourseSelectPage.ctorParameters = () => [
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CourseSelectPage.propDecorators = {
    redirect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CourseSelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course-select',
        template: _raw_loader_course_select_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_select_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseSelectPage);



/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "gcxx":
/*!*************************************************!*\
  !*** ./src/app/services/event/event.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/ISetting */ "N4YS");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
var EventService_1;






let EventService = EventService_1 = class EventService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.eventsBs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.events = this.eventsBs.asObservable();
        this.getEvents().then((events) => {
            this.eventsBs.next(events);
        });
    }
    fetchEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // send get request to api
                const events = yield this.http
                    .get(EventService_1.API_HOST)
                    .toPromise();
                events.forEach((event) => {
                    event.start = new Date(event.start);
                    event.end = new Date(event.end);
                });
                this.eventsBs.next(events);
                // store fetched events in local storage
                yield this.storage.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_4__["StorageKey"].EVENTS, events);
                return true;
            }
            catch (error) {
                console.error('Error while fetching events!');
                // load lectures from local storage
                const local = yield this.getEvents();
                this.eventsBs.next(local ? local : []);
                console.log('Fetched events from local storage.');
                return false;
            }
        });
    }
    getEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const events = yield this.storage.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_4__["StorageKey"].EVENTS);
            if (Array.isArray(events)) {
                events.forEach((event) => {
                    event.start = new Date(event.start);
                    event.end = new Date(event.end);
                });
                return events;
            }
            else {
                return [];
            }
        });
    }
    getEventById(id) {
        const event = this.eventsBs.getValue().find((event) => {
            return event.id === id;
        });
        return event ? event : null;
    }
};
EventService.API_HOST = 'https://api.rickstack.de/events/';
EventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
EventService = EventService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], EventService);



/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map