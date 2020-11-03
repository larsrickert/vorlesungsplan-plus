(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-course-select-course-select-module"], {
    /***/
    "/lGa":
    /*!*************************************************************!*\
      !*** ./src/app/pages/course-select/course-select.module.ts ***!
      \*************************************************************/

    /*! exports provided: CourseSelectPageModule */

    /***/
    function lGa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseSelectPageModule", function () {
        return CourseSelectPageModule;
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


      var _course_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./course-select-routing.module */
      "wEoz");
      /* harmony import */


      var _course_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./course-select.page */
      "HPLd");
      /* harmony import */


      var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/shared/shared.module */
      "FpXt");

      var CourseSelectPageModule = function CourseSelectPageModule() {
        _classCallCheck(this, CourseSelectPageModule);
      };

      CourseSelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _course_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseSelectPageRoutingModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_course_select_page__WEBPACK_IMPORTED_MODULE_6__["CourseSelectPage"]]
      })], CourseSelectPageModule);
      /***/
    },

    /***/
    "wEoz":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/course-select/course-select-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CourseSelectPageRoutingModule */

    /***/
    function wEoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseSelectPageRoutingModule", function () {
        return CourseSelectPageRoutingModule;
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


      var _course_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course-select.page */
      "HPLd");

      var routes = [{
        path: '',
        component: _course_select_page__WEBPACK_IMPORTED_MODULE_3__["CourseSelectPage"]
      }];

      var CourseSelectPageRoutingModule = function CourseSelectPageRoutingModule() {
        _classCallCheck(this, CourseSelectPageRoutingModule);
      };

      CourseSelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CourseSelectPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-course-select-course-select-module-es5.js.map