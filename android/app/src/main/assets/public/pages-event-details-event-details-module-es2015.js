(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-details-event-details-module"],{

/***/ "742s":
/*!*************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  border: 1px solid var(--app-color-border);\n}\n.wrapper .title {\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.wrapper .detail {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n.wrapper .detail ion-icon {\n  font-size: 20px;\n}\n.wrapper .description__title {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7QUFBTjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtY29sb3ItYm9yZGVyKTtcblxuICAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuZGV0YWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "9kwD":
/*!*********************************************************************!*\
  !*** ./src/app/pages/event-details/event-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EventDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPageRoutingModule", function() { return EventDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-details.page */ "v9rs");




const routes = [
    {
        path: '',
        component: _event_details_page__WEBPACK_IMPORTED_MODULE_3__["EventDetailsPage"]
    }
];
let EventDetailsPageRoutingModule = class EventDetailsPageRoutingModule {
};
EventDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventDetailsPageRoutingModule);



/***/ }),

/***/ "L9s4":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/event-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Veranstaltungsdetails\" [back]=\"true\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"wrapper\" *ngIf=\"event\">\n    <p class=\"title\">{{ event.name }}</p>\n\n    <!-- location -->\n    <div class=\"detail\">\n      <ion-icon name=\"location-outline\"></ion-icon>\n      <ion-text>{{ event.location }}</ion-text>\n    </div>\n\n    <!-- time -->\n    <div class=\"detail\">\n      <ion-icon name=\"time-outline\"></ion-icon>\n      <ion-text>Von: {{ event.start | date:\"d. MMMM y, HH:mm\" }} Uhr</ion-text>\n    </div>\n    <div class=\"detail\">\n      <ion-icon name=\"time-outline\"></ion-icon>\n      <ion-text>Bis: {{ event.end | date:\"d. MMMM y, HH:mm\" }} Uhr</ion-text>\n    </div>\n\n    <!-- description -->\n    <p class=\"title description__title\">Beschreibung:</p>\n    <p>{{ event.description }}</p>\n  </div>\n\n  <!-- placeholder when event is not set -->\n  <div class=\"warning warning--danger\" *ngIf=\"!event\">\n    <p>Beim Abruf der Eventdetails ist ein Fehler aufgetreten.</p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "T4q2":
/*!*************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.module.ts ***!
  \*************************************************************/
/*! exports provided: EventDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function() { return EventDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details-routing.module */ "9kwD");
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-details.page */ "v9rs");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let EventDetailsPageModule = class EventDetailsPageModule {
};
EventDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventDetailsPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPage"]],
    })
], EventDetailsPageModule);



/***/ }),

/***/ "v9rs":
/*!***********************************************************!*\
  !*** ./src/app/pages/event-details/event-details.page.ts ***!
  \***********************************************************/
/*! exports provided: EventDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPage", function() { return EventDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event-details.page.html */ "L9s4");
/* harmony import */ var _event_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-details.page.scss */ "742s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event/event.service */ "gcxx");






let EventDetailsPage = class EventDetailsPage {
    constructor(activatedRoute, eventService) {
        this.activatedRoute = activatedRoute;
        this.eventService = eventService;
        this.id = null;
    }
    ngOnInit() {
        // subscribe to router event
        this.eventService.events.subscribe(() => {
            this.activatedRoute.params.subscribe((params) => {
                this.id = params.id ? params.id : null;
                this.event = this.eventService.getEventById(this.id);
            });
        });
    }
};
EventDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }
];
EventDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-details',
        template: _raw_loader_event_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-event-details-event-details-module-es2015.js.map