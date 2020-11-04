(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "HATU":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "nD9t");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "JLDx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Einstellungen\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"warning\" *ngIf=\"currentCourse === null\">\n    <ion-icon name=\"alert-circle\"></ion-icon>\n    <ion-label>Bitte wähle einen Kurs aus.</ion-label>\n  </div>\n\n  <div class=\"setting\">\n    <ion-label>Design:</ion-label>\n    <ion-select\n      placeholder=\"Design auswählen\"\n      [value]=\"darkMode\"\n      (ionChange)=\"setDarkMode($event)\"\n      okText=\"Auswählen\"\n      cancelText=\"Abbrechen\"\n      [interfaceOptions]=\"{header: 'Design auswählen'}\"\n    >\n      <ion-select-option [value]=\"null\">Automatisch</ion-select-option>\n      <ion-select-option [value]=\"false\">Hell</ion-select-option>\n      <ion-select-option [value]=\"true\">Dunkel</ion-select-option>\n    </ion-select>\n  </div>\n\n  <div class=\"setting setting--item\">\n    <ion-item lines=\"none\" [detail]=\"true\" (click)=\"openCourseModal()\">\n      <div class=\"flex\">\n        <ion-label>Kurs:</ion-label>\n        <span class=\"value\" *ngIf=\"currentCourse\"> {{ currentCourse }} </span>\n        <span class=\"value placeholder\" *ngIf=\"!currentCourse\">\n          Kurs auswählen\n        </span>\n      </div>\n    </ion-item>\n  </div>\n\n  <div class=\"setting setting--item setting--link\">\n    <ion-item lines=\"none\" [detail]=\"true\" routerLink=\"/report\">\n      <ion-icon name=\"megaphone-outline\"></ion-icon>\n      <ion-label>Fehler melden</ion-label></ion-item\n    >\n  </div>\n\n  <div class=\"setting setting--item setting--link\">\n    <ion-item lines=\"none\" [detail]=\"true\" routerLink=\"/about\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <ion-label>Über die App</ion-label></ion-item\n    >\n  </div>\n\n  <div class=\"setting setting--item setting--link\">\n    <ion-item lines=\"none\" [detail]=\"true\" routerLink=\"/intro\">\n      <ion-icon name=\"repeat-outline\"></ion-icon>\n      <ion-label>Einführung wiederholen</ion-label></ion-item\n    >\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "j/5A":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setting {\n  padding: 0 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  cursor: pointer;\n  background: var(--app-color-block);\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  margin-bottom: 20px;\n  border: 1px solid var(--app-color-border);\n}\n.setting--link {\n  background: var(--app-color-form);\n  border: none;\n  box-shadow: none;\n}\n.setting--item {\n  padding: 0;\n}\n.setting ion-select {\n  width: 100%;\n  height: 60px;\n  font-size: 16px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.setting ionic-selectable {\n  height: auto;\n  padding: 6px 0;\n}\n.setting__icon {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.setting--noSelect {\n  padding: 20px;\n}\n.setting:active {\n  background: var(--app-color-lecture-accent);\n}\n.selectable__item {\n  --background: transparent;\n  width: 100%;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n}\n.value {\n  margin-left: 10px;\n}\n.placeholder {\n  color: var(--ion-color-medium);\n}\nion-item {\n  width: 100%;\n  --background: transparent;\n  --background-hover: transparent;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --inner-padding-end: 0;\n}\nion-item ion-icon {\n  font-size: 24px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBUUE7RUFDRSwyQ0FBQTtBQUxGO0FBUUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBTEY7QUFRQTtFQUNFLGlCQUFBO0FBTEY7QUFRQTtFQUNFLDhCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtY29sb3ItYmxvY2spO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1jb2xvci1ib3JkZXIpO1xuXG4gICYtLWxpbmsge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvci1mb3JtKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICYtLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgaW9uaWMtc2VsZWN0YWJsZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICB9XG5cbiAgJl9faWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gICYtLW5vU2VsZWN0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG5cbi5zZXR0aW5nOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvci1sZWN0dXJlLWFjY2VudCk7XG59XG5cbi5zZWxlY3RhYmxlX19pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "nD9t":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "JLDx");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "j/5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/ISetting */ "N4YS");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var _course_select_course_select_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-select/course-select.page */ "HPLd");








let SettingsPage = class SettingsPage {
    constructor(storage, modalController) {
        this.storage = storage;
        this.modalController = modalController;
        this.darkMode = null;
        this.currentCourse = '';
    }
    ngOnInit() {
        this.storage.settings.subscribe((settings) => {
            // display stored dark mode value
            this.darkMode = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].DARKMODE);
            // display users current course
            const course = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);
            this.currentCourse = course ? course : null;
        });
    }
    // store selected value for dark mode to local storage if not already stored
    setDarkMode(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const existingValue = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].DARKMODE);
            const changedValue = ev.target.value;
            if (changedValue === existingValue) {
                return;
            }
            else {
                yield this.storage.addSetting({
                    key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].DARKMODE,
                    value: changedValue,
                });
            }
        });
    }
    openCourseModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _course_select_course_select_page__WEBPACK_IMPORTED_MODULE_7__["CourseSelectPage"],
                cssClass: 'app-modal',
                swipeToClose: true,
            });
            return yield modal.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "yPrK":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "HATU");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "nD9t");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]],
    })
], SettingsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map