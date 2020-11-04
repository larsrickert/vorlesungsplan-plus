(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-installation-installation-module"],{

/***/ "Fq3f":
/*!***********************************************************!*\
  !*** ./src/app/pages/installation/installation.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  padding: 20px;\n}\n\n.screenshots {\n  display: flex;\n  align-items: flex-start;\n  -moz-column-gap: 60px;\n       column-gap: 60px;\n}\n\n@media only screen and (max-width: 768px) {\n  .screenshots {\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 425px) {\n  .screenshots {\n    flex-direction: column;\n  }\n}\n\n.screenshots__image {\n  max-height: 30em;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n\n.screenshots__step {\n  display: flex;\n  flex-direction: column;\n}\n\n@media only screen and (max-width: 768px) {\n  .screenshots__step {\n    margin-bottom: 60px;\n  }\n}\n\n.screenshots__label {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGFsbGF0aW9uL2luc3RhbGxhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFMRjtJQU1JLHVCQUFBO0VBRUY7QUFDRjs7QUFBRTtFQVRGO0lBVUksc0JBQUE7RUFHRjtBQUNGOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBR0o7O0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBSTtFQUpGO0lBS0ksbUJBQUE7RUFHSjtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGxhdGlvbi9pbnN0YWxsYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5zY3JlZW5zaG90cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBjb2x1bW4tZ2FwOiA2MHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAmX19pbWFnZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuXHJcbiAgJl9fc3RlcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FzN8":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/installation/installation.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Installation\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <ion-segment\n    class=\"segment\"\n    scrollable\n    mode=\"ios\"\n    #segment\n    [(ngModel)]=\"device\"\n  >\n    <ion-segment-button value=\"android\">\n      <ion-label>Android</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"iOS\">\n      <ion-label>iOS</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"browser\">\n      <ion-label>PC</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"device\" class=\"content\">\n    <div *ngSwitchCase=\"'android'\">\n      <div class=\"screenshots\">\n        <div class=\"screenshots__step\">\n          <ion-label class=\"screenshots__label\"\n            >Google Chrome: 1. Einstellungen öffnen</ion-label\n          >\n          <img\n            src=\"../../../assets/images/instruction-android-chrome-1.jpg\"\n            alt=\"Screenshot Chrome Einstellungen\"\n            title=\"Chrome Einstellungen\"\n            class=\"screenshots__image\"\n          />\n        </div>\n        <div class=\"screenshots__step\">\n          <ion-label class=\"screenshots__label\"\n            >Google Chrome: 2. App installieren</ion-label\n          >\n          <img\n            src=\"../../../assets/images/instruction-android-chrome-2.jpg\"\n            alt=\"Screenshot Chrome App installieren\"\n            title=\"Chrome App installieren\"\n            class=\"screenshots__image\"\n          />\n        </div>\n      </div>\n      <div class=\"screenshots\">\n        <div class=\"screenshots__step\">\n          <ion-label class=\"screenshots__label\"\n            >Samsung Internet: Direkt installieren</ion-label\n          >\n          <img\n            src=\"../../../assets/images/instruction-android-si-1.jpg\"\n            alt=\"Screenshot Samsung Internet App installieren\"\n            title=\"Samsung Internet App installieren\"\n            class=\"screenshots__image\"\n          />\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'iOS'\">\n      <div class=\"screenshots\">\n        <div class=\"screenshots__step\">\n          <ion-label class=\"screenshots__label\"\n            >1. Teilen Dialog in Safari öffnen</ion-label\n          >\n          <img\n            src=\"../../../assets/images/instruction-ios-1.jpg\"\n            alt=\"Screenshot Teilen Dialog öffnen\"\n            title=\"Teilen Dialog öffnen\"\n            class=\"screenshots__image\"\n          />\n        </div>\n\n        <div class=\"screenshots__step\">\n          <ion-label class=\"screenshots__label\"\n            >2. App zum Home-Bildschirm hinzufügen</ion-label\n          >\n          <img\n            src=\"../../../assets/images/instruction-ios-2.jpg\"\n            alt=\"Screenshot App zum Home-Bildschirm hinzufügen\"\n            title=\"App zum Home-Bildschirm hinzufügen\"\n            class=\"screenshots__image\"\n          />\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'browser'\">\n      <div class=\"screenshots\">\n        <div class=\"screenshots__step\">\n          <ion-label class=\"screenshots__label\"\n            >1. Über das Plus Icon neben der Suchleiste installieren</ion-label\n          >\n          <img\n            src=\"../../../assets/images/instruction-browser-1.jpg\"\n            alt=\"Screenshot Installation PC\"\n            title=\"App per Browser installieren\"\n            class=\"screenshots__image\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "HNAU":
/*!*******************************************************************!*\
  !*** ./src/app/pages/installation/installation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InstallationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationPageRoutingModule", function() { return InstallationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _installation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation.page */ "oL1L");




const routes = [
    {
        path: '',
        component: _installation_page__WEBPACK_IMPORTED_MODULE_3__["InstallationPage"]
    }
];
let InstallationPageRoutingModule = class InstallationPageRoutingModule {
};
InstallationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InstallationPageRoutingModule);



/***/ }),

/***/ "Nnce":
/*!***********************************************************!*\
  !*** ./src/app/pages/installation/installation.module.ts ***!
  \***********************************************************/
/*! exports provided: InstallationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationPageModule", function() { return InstallationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _installation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installation-routing.module */ "HNAU");
/* harmony import */ var _installation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installation.page */ "oL1L");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let InstallationPageModule = class InstallationPageModule {
};
InstallationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _installation_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstallationPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_installation_page__WEBPACK_IMPORTED_MODULE_6__["InstallationPage"]],
    })
], InstallationPageModule);



/***/ }),

/***/ "oL1L":
/*!*********************************************************!*\
  !*** ./src/app/pages/installation/installation.page.ts ***!
  \*********************************************************/
/*! exports provided: InstallationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationPage", function() { return InstallationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_installation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./installation.page.html */ "FzN8");
/* harmony import */ var _installation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation.page.scss */ "Fq3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InstallationPage = class InstallationPage {
    constructor() {
        this.device = 'android';
    }
    ngOnInit() { }
};
InstallationPage.ctorParameters = () => [];
InstallationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-installation',
        template: _raw_loader_installation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_installation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InstallationPage);



/***/ })

}]);
//# sourceMappingURL=pages-installation-installation-module-es2015.js.map