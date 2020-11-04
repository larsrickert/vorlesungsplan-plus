(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"], {
    /***/
    "BSRB":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function BSRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header title=\"Veranstaltungen ({{ count }})\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <ion-searchbar\n    animated\n    showCancelButton=\"focus\"\n    mode=\"ios\"\n    placeholder=\"Suchen...\"\n    cancelButtonText=\"Abbrechen\"\n    (ionChange)=\"search($event)\"\n    class=\"event__search\"\n    #searchbar\n  ></ion-searchbar>\n\n  <div class=\"noEvents\" *ngIf=\"blocks.length === 0\">\n    Aktuell gibt es keine anstehenden Veranstaltungen.\n  </div>\n\n  <div\n    class=\"noEvents\"\n    *ngIf=\"blocks.length > 0 && searchbar && searchbar.value !== '' && displayedBlocks.length === 0\"\n  >\n    Deine Suche hat keine Treffer ergeben\n  </div>\n\n  <div *ngIf=\"blocks.length > 0\">\n    <app-block\n      *ngFor=\"let block of displayedBlocks\"\n      [block]=\"block\"\n    ></app-block>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "Obr4":
    /*!***********************************************!*\
      !*** ./src/app/pages/events/events.module.ts ***!
      \***********************************************/

    /*! exports provided: EventsPageModule */

    /***/
    function Obr4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
        return EventsPageModule;
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


      var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./events-routing.module */
      "dHfY");
      /* harmony import */


      var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./events.page */
      "m4Vd");
      /* harmony import */


      var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/shared/shared.module */
      "FpXt");

      var EventsPageModule = function EventsPageModule() {
        _classCallCheck(this, EventsPageModule);
      };

      EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
      })], EventsPageModule);
      /***/
    },

    /***/
    "dHfY":
    /*!*******************************************************!*\
      !*** ./src/app/pages/events/events-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: EventsPageRoutingModule */

    /***/
    function dHfY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
        return EventsPageRoutingModule;
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


      var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./events.page */
      "m4Vd");

      var routes = [{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
      }];

      var EventsPageRoutingModule = function EventsPageRoutingModule() {
        _classCallCheck(this, EventsPageRoutingModule);
      };

      EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventsPageRoutingModule);
      /***/
    },

    /***/
    "m4Vd":
    /*!*********************************************!*\
      !*** ./src/app/pages/events/events.page.ts ***!
      \*********************************************/

    /*! exports provided: EventsPage */

    /***/
    function m4Vd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
        return EventsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./events.page.html */
      "BSRB");
      /* harmony import */


      var _events_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events.page.scss */
      "oG1l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/event/event.service */
      "gcxx");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "LcQX");

      var EventsPage = /*#__PURE__*/function () {
        function EventsPage(eventService, utility) {
          _classCallCheck(this, EventsPage);

          this.eventService = eventService;
          this.utility = utility;
          this.blocks = [];
          this.displayedBlocks = [];
          this.count = 0;
        }

        _createClass(EventsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.eventService.events.subscribe(function (events) {
              _this.blocks = _this.utility.createBlocks(events);
              _this.displayedBlocks = _this.blocks;
              _this.count = _this.countEvents();
            });
            this.eventService.fetchEvents();
          }
        }, {
          key: "search",
          value: function search(ev) {
            var searchedValue = ev.target.value.toLowerCase();

            if (searchedValue === '') {
              // display blocks of active segment when search is canceled or cleared
              this.displayedBlocks = this.blocks;
              return;
            } else if (searchedValue.trim() === '') {
              // do nothing when empty search input is entered
              return;
            }

            searchedValue = searchedValue.trim();
            var results = [];
            this.blocks.forEach(function (block) {
              var matchingEvents = block.items.filter(function (event) {
                var match = false;

                if (event.name.toLowerCase().includes(searchedValue)) {
                  match = true;
                }

                if (event.location && event.location.toLowerCase().includes(searchedValue)) {
                  match = true;
                }

                return match;
              });

              if (matchingEvents.length > 0) {
                results.push({
                  date: block.date,
                  items: matchingEvents
                });
              }
            });
            this.displayedBlocks = results;
          }
        }, {
          key: "countEvents",
          value: function countEvents() {
            var count = 0;
            this.blocks.forEach(function (block) {
              count += block.items.length;
            });
            return count;
          }
        }]);

        return EventsPage;
      }();

      EventsPage.ctorParameters = function () {
        return [{
          type: src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
        }];
      };

      EventsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['searchbar']
        }]
      };
      EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventsPage);
      /***/
    },

    /***/
    "oG1l":
    /*!***********************************************!*\
      !*** ./src/app/pages/events/events.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function oG1l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".noEvents {\n  margin: 10px;\n}\n\n.event__search {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9FdmVudHMge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV2ZW50X19zZWFyY2gge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-events-events-module-es5.js.map