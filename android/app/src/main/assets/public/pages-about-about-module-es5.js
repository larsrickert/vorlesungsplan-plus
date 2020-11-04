(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
    /***/
    "6hSs":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function hSs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper {\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  background: var(--app-color-block);\n  border: 1px solid var(--app-color-border);\n}\n\np {\n  line-height: 1.4em;\n}\n\nol {\n  font-size: 15px;\n}\n\nol li {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvci1ibG9jayk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1jb2xvci1ib3JkZXIpO1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuXG5vbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcblxuICBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "P6uQ":
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function P6uQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
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


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "fr+C");

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "UoYK":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function UoYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
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


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-routing.module */
      "P6uQ");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about.page */
      "fr+C");
      /* harmony import */


      var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/shared/shared.module */
      "FpXt");

      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "fr+C":
    /*!*******************************************!*\
      !*** ./src/app/pages/about/about.page.ts ***!
      \*******************************************/

    /*! exports provided: AboutPage */

    /***/
    function frC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.page.html */
      "zRMW");
      /* harmony import */


      var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.page.scss */
      "6hSs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutPage = /*#__PURE__*/function () {
        function AboutPage() {
          _classCallCheck(this, AboutPage);
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutPage);
      /***/
    },

    /***/
    "zRMW":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function zRMW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header title=\"Über die App\" [back]=\"true\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"wrapper\">\n    <p>\n      Mehr Informationen zur Herkunft der Daten / API:\n      <a href=\"https://api.rickstack.de/help\" target=\"_blank\"\n        >https://api.rickstack.de/help</a\n      >\n    </p>\n\n    <br />\n\n    <ol>\n      <li>\n        Diese App ist keine offizielle App der DHBW, sondern sie soll ein Ersatz\n        für die teilweise unoptimierte (<em>*hust*</em> iOS <em>*hust*</em>)\n        offizielle App sein.\n      </li>\n      <li>\n        Zwar werden die Vorlesungen und Veranstaltungen von den offiziellen DHWB\n        Kalendern bezogen, doch ich gebe dennoch keine Garantie für die\n        Korrektheit der Daten.\n      </li>\n    </ol>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-about-about-module-es5.js.map