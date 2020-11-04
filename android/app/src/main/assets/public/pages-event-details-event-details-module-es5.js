(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-details-event-details-module"], {
    /***/
    "742s":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event-details/event-details.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper {\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  border: 1px solid var(--app-color-border);\n  background: var(--app-event-details);\n}\n.wrapper .title {\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.wrapper .detail {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n.wrapper .detail ion-icon {\n  font-size: 20px;\n}\n.wrapper .detail .placeholder {\n  color: var(--ion-color-medium);\n}\n.wrapper .description__title {\n  margin-top: 40px;\n}\n.wrapper .event__description {\n  font-size: 15px;\n  line-height: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBR0k7RUFDRSw4QkFBQTtBQUROO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1jb2xvci1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1ldmVudC1kZXRhaWxzKTtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb25fX3RpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuZXZlbnRfX2Rlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "9kwD":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/event-details/event-details-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EventDetailsPageRoutingModule */

    /***/
    function kwD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailsPageRoutingModule", function () {
        return EventDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _event_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./event-details.page */
      "v9rs");

      var routes = [{
        path: '',
        component: _event_details_page__WEBPACK_IMPORTED_MODULE_3__["EventDetailsPage"]
      }];

      var EventDetailsPageRoutingModule = function EventDetailsPageRoutingModule() {
        _classCallCheck(this, EventDetailsPageRoutingModule);
      };

      EventDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventDetailsPageRoutingModule);
      /***/
    },

    /***/
    "L9s4":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/event-details.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9s4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header title=\"Veranstaltungsdetails\" [back]=\"true\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"wrapper\" *ngIf=\"event\">\n    <p class=\"title\">{{ event.name }}</p>\n\n    <!-- location -->\n    <div class=\"detail\">\n      <ion-icon name=\"location-outline\"></ion-icon>\n      <ion-text *ngIf=\"event.location\">{{ event.location }}</ion-text>\n      <ion-text class=\"placeholder\" *ngIf=\"!event.location\"\n        >Nicht angegeben</ion-text\n      >\n    </div>\n\n    <!-- time -->\n    <div class=\"detail\">\n      <ion-icon name=\"time-outline\"></ion-icon>\n      <ion-text\n        >Von:\n        <span *ngIf=\"event.start\">\n          {{ event.start | date:\"d. MMMM y, HH:mm\" }} Uhr\n        </span>\n        <span *ngIf=\"!event.start\" class=\"placeholder\">Nicht angegeben</span>\n      </ion-text>\n    </div>\n    <div class=\"detail\">\n      <ion-icon name=\"time-outline\"></ion-icon>\n      <ion-text\n        >Bis:\n        <span *ngIf=\"event.end\">\n          {{ event.end | date:\"d. MMMM y, HH:mm\" }} Uhr\n        </span>\n        <span *ngIf=\"!event.end\" class=\"placeholder\">Nicht angegeben</span>\n      </ion-text>\n    </div>\n\n    <!-- description -->\n    <p class=\"title description__title\">Beschreibung:</p>\n    <p class=\"event__description\">{{ event.description }}</p>\n  </div>\n\n  <!-- placeholder when event is not set -->\n  <div class=\"warning warning--danger\" *ngIf=\"!event\">\n    <p>Beim Abruf der Eventdetails ist ein Fehler aufgetreten.</p>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "T4q2":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event-details/event-details.module.ts ***!
      \*************************************************************/

    /*! exports provided: EventDetailsPageModule */

    /***/
    function T4q2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function () {
        return EventDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./event-details-routing.module */
      "9kwD");
      /* harmony import */


      var _event_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./event-details.page */
      "v9rs");
      /* harmony import */


      var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/shared/shared.module */
      "FpXt");

      var EventDetailsPageModule = function EventDetailsPageModule() {
        _classCallCheck(this, EventDetailsPageModule);
      };

      EventDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventDetailsPageRoutingModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPage"]]
      })], EventDetailsPageModule);
      /***/
    },

    /***/
    "v9rs":
    /*!***********************************************************!*\
      !*** ./src/app/pages/event-details/event-details.page.ts ***!
      \***********************************************************/

    /*! exports provided: EventDetailsPage */

    /***/
    function v9rs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailsPage", function () {
        return EventDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event-details.page.html */
      "L9s4");
      /* harmony import */


      var _event_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-details.page.scss */
      "742s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/event/event.service */
      "gcxx");

      var EventDetailsPage = /*#__PURE__*/function () {
        function EventDetailsPage(activatedRoute, eventService) {
          _classCallCheck(this, EventDetailsPage);

          this.activatedRoute = activatedRoute;
          this.eventService = eventService;
          this.id = null;
        }

        _createClass(EventDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // subscribe to router event
            this.eventService.events.subscribe(function () {
              _this.activatedRoute.params.subscribe(function (params) {
                _this.id = params.id ? params.id : null;
                _this.event = _this.eventService.getEventById(_this.id);
              });
            });
          }
        }]);

        return EventDetailsPage;
      }();

      EventDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]
        }];
      };

      EventDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-details',
        template: _raw_loader_event_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-event-details-event-details-module-es5.js.map