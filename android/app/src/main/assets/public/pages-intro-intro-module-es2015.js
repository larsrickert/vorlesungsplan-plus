(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"],{

/***/ "EIgh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Einführung\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\" scroll-y=\"false\">\n  <ion-slides pager=\"true\">\n    <!-- slide 1 -->\n    <ion-slide>\n      <div class=\"slide\">\n        <img class=\"logo\" src=\"../../../assets/images/logo.svg\" />\n        <h2>Herzlich Willkommen</h2>\n        <p>\n          Gut, dass du die <b>Vorlesungsplan+</b> App verwendest. Hier hast du\n          eine kurze Übersicht über alle Funktionen der App.\n        </p>\n\n        <p class=\"swipe-hint\">\n          (Wische mit der Maus nach links oder rechts, um durch die Slides zu\n          navigieren)\n        </p>\n      </div>\n    </ion-slide>\n\n    <!-- slide 2 -->\n    <ion-slide>\n      <h2>Vorlesungsplan</h2>\n\n      <app-block [block]=\"dummyLecture\"></app-block>\n      <p>\n        Hier hast du eine Übersicht über alle deine Vorlesungen. Du kannst Sie\n        <b>durchsuchen</b> oder z.B. <b>nach Klausuren filtern</b>. Wische nach\n        unten, um die Vorlesungen manuell zu aktualisieren.\n      </p>\n    </ion-slide>\n\n    <!-- sldie 3 -->\n    <ion-slide>\n      <h2>Immer Up 2 Date</h2>\n\n      <app-block [block]=\"dummyChanges\"></app-block>\n\n      <p>\n        Sobald es Änderungen an deinem Vorlesungsplan gibt, werden die\n        betroffenen Vorlesungen als <b>entfernt oder hinzugefügt markiert</b>.\n        Mit dem Button unten rechts kannst du die Markierungen wieder entfernen.\n      </p>\n\n      <app-lecture-status-fab [skeleton]=\"true\"></app-lecture-status-fab>\n    </ion-slide>\n\n    <!-- slide 4 -->\n    <ion-slide>\n      <h2>Aufgaben</h2>\n\n      <app-block [block]=\"dummyTask\" [disabled]=\"true\"></app-block>\n\n      <p>\n        Ein weiteres Feature ist die <b>Erstellung von Aufgaben</b>. So hast du\n        immer im Blick, wann Projektabgeben etc. sind. Durch wischen nach links\n        bzw. rechts, kannst du Aufgaben bearbeiten oder löschen. Du kannst die\n        Aufgaben auch ganz einfach als Text kopieren und an deine Kommilitonen\n        schicken!\n      </p>\n    </ion-slide>\n\n    <!-- slide 5 -->\n    <ion-slide>\n      <h2>Fast geschafft!</h2>\n\n      <p>\n        Bitte <b>wählen deinen Kurs aus</b>, damit wir dir die richtigen\n        Vorlesungen anzeigen können. Außerdem kannst du dich für den\n        <b>Dark Mode</b>\n        entscheiden (oder du lässt ihn auf automatisch, dann passt sich das\n        Design deinen Geräteeinstellung an.)\n      </p>\n\n      <div class=\"selection\">\n        <!-- select course -->\n        <ion-item lines=\"none\" [detail]=\"true\" (click)=\"openCourseModal()\">\n          <div class=\"flex\">\n            <span *ngIf=\"!course\"> Kurs auswählen </span>\n            <span *ngIf=\"course\"> Kurs: {{ course }} </span>\n          </div>\n        </ion-item>\n\n        <!-- select dark mode -->\n        <ion-select\n          [value]=\"darkMode\"\n          placeholder=\"Design auswählen\"\n          (ionChange)=\"setDarkMode($event)\"\n          okText=\"Auswählen\"\n          cancelText=\"Abbrechen\"\n          [interfaceOptions]=\"{header: 'Design auswählen'}\"\n        >\n          <ion-select-option [value]=\"null\">Automatisch</ion-select-option>\n          <ion-select-option [value]=\"false\">Hell</ion-select-option>\n          <ion-select-option [value]=\"true\">Dunkel</ion-select-option>\n        </ion-select>\n\n        <ion-button class=\"complete-btn\" (click)=\"complete()\"\n          >Los geht's <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon\n        ></ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "JaV3":
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intro.page.html */ "EIgh");
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.page.scss */ "JnBO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/ILecture */ "dP1x");
/* harmony import */ var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/ISetting */ "N4YS");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var _course_select_course_select_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-select/course-select.page */ "HPLd");










let IntroPage = class IntroPage {
    constructor(menuCtrl, storage, modalController, router) {
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.modalController = modalController;
        this.router = router;
        this.dummyLecture = {
            date: new Date(),
            items: [
                {
                    name: 'Vorlesung XY',
                    start: new Date(Date.now() - 1000 * 60 * 60),
                    end: new Date(Date.now() + 1000 * 60 * 30),
                    lastModified: new Date(),
                    lecturer: 'Dozent',
                    room: 'Raum XYZ',
                    uid: '1234',
                },
            ],
        };
        this.dummyChanges = {
            date: new Date(),
            items: [
                {
                    name: 'Vorlesung XY',
                    start: new Date(Date.now() - 1000 * 60 * 60),
                    end: new Date(Date.now() + 1000 * 60 * 30),
                    lastModified: new Date(),
                    lecturer: 'Dozent',
                    room: 'Raum XYZ',
                    uid: '1234',
                    status: src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_6__["LectureStatus"].ADDED,
                },
                {
                    name: 'Vorlesung XY',
                    start: new Date(Date.now() - 1000 * 60 * 60),
                    end: new Date(Date.now() + 1000 * 60 * 30),
                    lastModified: new Date(),
                    lecturer: 'Dozent',
                    room: 'Raum XYZ',
                    uid: '1234',
                    status: src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_6__["LectureStatus"].REMOVED,
                },
            ],
        };
        this.dummyTask = {
            date: new Date(Date.now() + 1000 * 60 * 60 * 24),
            items: [
                {
                    id: '1',
                    name: 'Etwas super wichtiges',
                    start: new Date(Date.now() + 1000 * 60 * 60 * 24),
                    end: new Date(Date.now() + 1000 * 60 * 60 * 24),
                    course: 'Vorlesung XY',
                    notes: 'Das ist eine total wichtige Aufgabe.',
                },
            ],
        };
        this.darkMode = null;
        this.course = null;
    }
    ngOnInit() {
        this.storage.settings.subscribe(() => {
            this.darkMode = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_7__["SettingKey"].DARKMODE);
            this.course = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_7__["SettingKey"].COURSE);
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    // store selected value for dark mode to local storage if not already stored
    setDarkMode(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.addSetting({
                key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_7__["SettingKey"].DARKMODE,
                value: ev.target.value,
            });
        });
    }
    openCourseModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _course_select_course_select_page__WEBPACK_IMPORTED_MODULE_9__["CourseSelectPage"],
                cssClass: 'app-modal',
                componentProps: {
                    redirect: false,
                },
            });
            return yield modal.present();
        });
    }
    complete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.addSetting({ key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_7__["SettingKey"].INTRO, value: true });
            this.router.navigate(['/timetable']);
            yield this.menuCtrl.enable(true);
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IntroPage);



/***/ }),

/***/ "JnBO":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n  padding: 60px 20px;\n}\n@media (min-width: 426px) and (max-width: 768px) {\n  .swiper-slide {\n    padding: 60px;\n  }\n}\n@media (min-width: 769px) {\n  .swiper-slide {\n    padding: 7% 20%;\n  }\n}\n.swiper-slide ​ h2 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.swiper-slide .logo {\n  max-height: 100px;\n  margin-bottom: 40px;\n}\nb {\n  font-weight: 600;\n}\np {\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\napp-block {\n  text-align: left;\n}\n.swipe-hint {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  .swipe-hint {\n    display: none;\n  }\n}\n.selection {\n  margin-top: 40px;\n  text-align: left;\n}\n.selection ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  cursor: pointer;\n}\n.selection ion-select {\n  font-size: 17px;\n}\n.selection .complete-btn {\n  --border-radius: 50px;\n  margin-top: 20px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRUY7QUFBRTtFQUpGO0lBS0ksYUFBQTtFQUdGO0FBQ0Y7QUFERTtFQVJGO0lBU0ksZUFBQTtFQUlGO0FBQ0Y7QUFGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUlKO0FBREU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBRUY7QUFDQTtFQUNFLHFDQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFBRTtFQUhGO0lBSUksYUFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQURFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFHSjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgcGFkZGluZzogNyUgMjAlO1xuICB9XG59XG4uc3dpcGVyLXNsaWRlIOKAiyBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc3dpcGVyLXNsaWRlIC5sb2dvIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cblxucCBiIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn1cblxuYXBwLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN3aXBlLWhpbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zd2lwZS1oaW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zZWxlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNlbGVjdGlvbiBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3Rpb24gaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5zZWxlY3Rpb24gLmNvbXBsZXRlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "a+tW":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "pPll");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "JaV3");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]],
    })
], IntroPageModule);



/***/ }),

/***/ "pPll":
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "JaV3");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-intro-intro-module-es2015.js.map