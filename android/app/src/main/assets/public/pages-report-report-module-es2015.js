(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-report-report-module"],{

/***/ "+biH":
/*!*********************************************!*\
  !*** ./src/app/pages/report/report.page.ts ***!
  \*********************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report.page.html */ "fqAJ");
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.page.scss */ "9Xvk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mail_mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mail/mail.service */ "9yPh");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "LcQX");






let ReportPage = class ReportPage {
    constructor(mail, utility) {
        this.mail = mail;
        this.utility = utility;
        this.name = '';
        this.email = '';
        this.type = '';
        this.message = '';
        this.checkbox = false;
        this.valid = true;
        this.invalidFields = [];
    }
    ngOnInit() { }
    checkFields() {
        this.name = this.name.trim();
        this.email = this.email.trim();
        this.type = this.type.trim();
        this.message = this.message.trim();
        this.invalidFields = [];
        if (!this.name) {
            this.invalidFields.push('name');
        }
        if (!this.email) {
            this.invalidFields.push('email');
        }
        if (!this.type) {
            this.invalidFields.push('type');
        }
        if (!this.message) {
            this.invalidFields.push('message');
        }
        if (!this.checkbox) {
            this.invalidFields.push('checkbox');
        }
        return this.invalidFields.length === 0;
    }
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.checkFields()) {
                return;
            }
            const loading = yield this.utility.showLoading('Formular wird gesendet...');
            const mail = {
                to: 'lar.rickert.19@lehre.mosbach.dhbw.de',
                replyTo: this.email,
                subject: 'Bug Report',
                message: `Hey,\nich habe einen Fehler in der Vertretungsplan App gefunden.\n\nFehlerart: ${this.type}\nBeschreibung:\n${this.message}\n\n---\nLiebe Grüße\n${this.name}`,
            };
            const isSend = yield this.mail.sendMail(mail);
            if (isSend) {
                this.name = '';
                this.email = '';
                this.type = '';
                this.message = '';
                this.invalidFields = [];
                this.checkbox = false;
                this.utility.showToast('Vielen Dank für deine Nachricht!');
            }
            else {
                this.utility.showToast('Beim Senden deines Nachricht ist ein Fehler aufgetreten! Bitte versuche es später erneut.');
            }
            loading.dismiss();
        });
    }
};
ReportPage.ctorParameters = () => [
    { type: src_app_services_mail_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"] },
    { type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportPage);



/***/ }),

/***/ "9Xvk":
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: var(--app-color-form);\n  border: 1px solid var(--app-color-border);\n}\n.form fieldset {\n  border: none;\n  padding: 0;\n  margin-bottom: 20px;\n}\n.form legend {\n  font-size: 1.4em;\n  margin-bottom: 20px;\n}\n.form label {\n  display: block;\n  margin-bottom: 8px;\n}\n.form ion-select,\n.form ion-input,\n.form textarea {\n  outline: 0;\n  background: var(--app-form-field);\n  border: 1px solid var(--app-color-border);\n  border-radius: 4px;\n  font-size: 15px;\n  width: 100%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n.form textarea {\n  padding: 10px;\n}\n.form .number {\n  background: var(--ion-color-primary);\n  color: #ffffff;\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  font-size: 0.8em;\n  margin-right: 10px;\n  line-height: 30px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 15px 15px 15px 0px;\n}\n.form button {\n  padding: 12px 20px;\n  outline: 0;\n  border-radius: 4px;\n  color: #fff;\n  background: var(--ion-color-primary);\n  font-size: 18px;\n  width: 100%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.form button:hover {\n  background: var(--ion-color-primary-shade);\n}\n.invalidField {\n  border: 1px solid var(--ion-color-danger) !important;\n  background: rgba(var(--ion-color-danger-rgb), 0.1) !important;\n}\n#checkbox {\n  margin-top: -20px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  --background: transparent;\n  --background-active: transparent;\n  --background-hover: transparent;\n  font-size: 14px;\n}\n@media only screen and (max-width: 768px) {\n  #checkbox {\n    --padding-start: 6px;\n    --inner-padding-end: 0;\n  }\n}\n#checkbox ion-checkbox {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0L3JlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7OztFQUdFLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7QUFNRTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUNBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBTEo7QUFRRTtFQUNFLDBDQUFBO0FBTko7QUFVQTtFQUNFLG9EQUFBO0VBQ0EsNkRBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQVBGO0FBU0U7RUFURjtJQVVJLG9CQUFBO0lBQ0Esc0JBQUE7RUFORjtBQUNGO0FBUUU7RUFDRSxrQkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwb3J0L3JlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvci1mb3JtKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtY29sb3ItYm9yZGVyKTtcclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBsZWdlbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3QsXHJcbiAgaW9uLWlucHV0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZm9ybS1maWVsZCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtY29sb3ItYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm51bWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnZhbGlkRmllbGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NoZWNrYm94IHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmU6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "9yPh":
/*!***********************************************!*\
  !*** ./src/app/services/mail/mail.service.ts ***!
  \***********************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var MailService_1;



let MailService = MailService_1 = class MailService {
    constructor(http) {
        this.http = http;
    }
    sendMail(mail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // send get request to api
                const response = yield this.http
                    .post(MailService_1.MAIL_HOST, JSON.stringify(mail), {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                })
                    .toPromise();
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
};
MailService.MAIL_HOST = 'https://api.rickstack.de/mail/';
MailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MailService = MailService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], MailService);



/***/ }),

/***/ "Q0Id":
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.module.ts ***!
  \***********************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-routing.module */ "UYUb");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "+biH");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let ReportPageModule = class ReportPageModule {
};
ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]],
    })
], ReportPageModule);



/***/ }),

/***/ "UYUb":
/*!*******************************************************!*\
  !*** ./src/app/pages/report/report-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "+biH");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "fqAJ":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Fehler melden\" [back]=\"true\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"form\">\n    <div class=\"warning warning--danger\" *ngIf=\"!valid\">\n      <ion-icon name=\"alert-circle\"></ion-icon>\n      <ion-label>Bitte fülle alle Felder aus.</ion-label>\n    </div>\n\n    <form name=\"bug-report\" method=\"POST\">\n      <fieldset>\n        <legend><span class=\"number\">1</span>Deine Daten</legend>\n        <!-- name -->\n        <ion-input\n          type=\"text\"\n          name=\"name\"\n          placeholder=\"Name*\"\n          [(ngModel)]=\"name\"\n          [class.invalidField]=\"invalidFields.includes('name') && !name\"\n        >\n        </ion-input>\n\n        <!-- email -->\n        <ion-input\n          type=\"email\"\n          name=\"email\"\n          placeholder=\"E-Mail Adresse*\"\n          required\n          [(ngModel)]=\"email\"\n          [class.invalidField]=\"invalidFields.includes('email') && !email\"\n        >\n        </ion-input>\n      </fieldset>\n\n      <fieldset>\n        <legend><span class=\"number\">2</span>Fehler</legend>\n        <!-- Bug type -->\n        <label>Um welchen Fehler handelt es sich?</label>\n        <ion-select\n          name=\"type\"\n          required\n          [(ngModel)]=\"type\"\n          [class.invalidField]=\"invalidFields.includes('type') && !type\"\n          cancelText=\"Schließen\"\n          okText=\"Auswählen\"\n          [interfaceOptions]=\"{header: 'Fehlerart auswählen'}\"\n          placeholder=\"Fehlerart auswählen*\"\n        >\n          <ion-select-option value=\"Synchronisierungsfehler\">\n            Synchronisierungsfehler\n          </ion-select-option>\n          <ion-select-option value=\"Falsche / fehlende Klausur\">\n            Falsche / fehlende Klausur\n          </ion-select-option>\n          <ion-select-option value=\"Darstellungsfehler (visuell)\">\n            Darstellungsfehler (visuell)\n          </ion-select-option>\n          <ion-select-option value=\"Fehlende Daten\">\n            Fehlende Daten\n          </ion-select-option>\n          <ion-select-option value=\"Anderer Fehler\"\n            >Anderer Fehler</ion-select-option\n          >\n        </ion-select>\n\n        <!-- message -->\n        <textarea\n          name=\"description\"\n          placeholder=\"Beschreibe den Fehler / Schritte zum Reproduzieren*\"\n          required\n          rows=\"5\"\n          [(ngModel)]=\"message\"\n          [class.invalidField]=\"invalidFields.includes('message') && !message\"\n        ></textarea>\n      </fieldset>\n\n      <ion-item\n        lines=\"none\"\n        id=\"checkbox\"\n        [class.invalidField]=\"invalidFields.includes('checkbox') && !checkbox\"\n      >\n        <ion-checkbox [(ngModel)]=\"checkbox\" name=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"ion-text-wrap\"\n          >Ich erkläre mich damit einverstanden, dass meine persönlichen Daten\n          zum Zwecke der Bearbeitung dieser Anfrage verwendet und ggf.\n          gespeichert werden.</ion-label\n        >\n      </ion-item>\n\n      <button (click)=\"send()\">Fehler melden</button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-report-report-module-es2015.js.map