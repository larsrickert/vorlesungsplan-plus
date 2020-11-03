(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
    /***/
    "HATU":
    /*!***********************************************************!*\
      !*** ./src/app/pages/settings/settings-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function HATU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "nD9t");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "JLDx":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function JLDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header title=\"Einstellungen\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"warning\" *ngIf=\"currentCourse === null\">\n    <ion-icon name=\"alert-circle\"></ion-icon>\n    <ion-label>Bitte wähle einen Kurs aus.</ion-label>\n  </div>\n\n  <div class=\"setting\">\n    <ion-label>Design:</ion-label>\n    <ion-select\n      placeholder=\"Design auswählen\"\n      [value]=\"darkMode\"\n      (ionChange)=\"setDarkMode($event)\"\n      okText=\"Auswählen\"\n      cancelText=\"Abbrechen\"\n      [interfaceOptions]=\"{header: 'Design auswählen'}\"\n    >\n      <ion-select-option [value]=\"null\">Automatisch</ion-select-option>\n      <ion-select-option [value]=\"false\">Hell</ion-select-option>\n      <ion-select-option [value]=\"true\">Dunkel</ion-select-option>\n    </ion-select>\n  </div>\n\n  <div class=\"setting setting--item\">\n    <ion-item lines=\"none\" [detail]=\"true\" (click)=\"openCourseModal()\">\n      <div class=\"flex\">\n        <ion-label>Kurs:</ion-label>\n        <span class=\"value\" *ngIf=\"currentCourse\"> {{ currentCourse }} </span>\n        <span class=\"value placeholder\" *ngIf=\"!currentCourse\">\n          Kurs auswählen\n        </span>\n      </div>\n    </ion-item>\n  </div>\n\n  <div class=\"setting setting--item setting--link\">\n    <ion-item lines=\"none\" [detail]=\"true\" routerLink=\"/report\">\n      <ion-icon name=\"megaphone-outline\"></ion-icon>\n      <ion-label>Fehler melden</ion-label></ion-item\n    >\n  </div>\n\n  <div class=\"setting setting--item setting--link\">\n    <ion-item lines=\"none\" [detail]=\"true\" routerLink=\"/about\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <ion-label>Über die App</ion-label></ion-item\n    >\n  </div>\n\n  <div class=\"setting setting--item setting--link\">\n    <ion-item lines=\"none\" [detail]=\"true\" routerLink=\"/intro\">\n      <ion-icon name=\"repeat-outline\"></ion-icon>\n      <ion-label>Einführung wiederholen</ion-label></ion-item\n    >\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "j/5A":
    /*!***************************************************!*\
      !*** ./src/app/pages/settings/settings.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function j5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".setting {\n  padding: 0 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  cursor: pointer;\n  background: var(--app-color-block);\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  margin-bottom: 20px;\n  border: 1px solid var(--app-color-border);\n}\n.setting--link {\n  background: var(--app-color-form);\n  border: none;\n  box-shadow: none;\n}\n.setting--item {\n  padding: 0;\n}\n.setting ion-select {\n  width: 100%;\n  height: 60px;\n  font-size: 16px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.setting ionic-selectable {\n  height: auto;\n  padding: 6px 0;\n}\n.setting__icon {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.setting--noSelect {\n  padding: 20px;\n}\n.setting:active {\n  background: var(--app-color-lecture-accent);\n}\n.selectable__item {\n  --background: transparent;\n  width: 100%;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n}\n.value {\n  margin-left: 10px;\n}\n.placeholder {\n  color: var(--ion-color-medium);\n}\nion-item {\n  width: 100%;\n  --background: transparent;\n  --background-hover: transparent;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --inner-padding-end: 0;\n}\nion-item ion-icon {\n  font-size: 24px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBUUE7RUFDRSwyQ0FBQTtBQUxGO0FBUUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBTEY7QUFRQTtFQUNFLGlCQUFBO0FBTEY7QUFRQTtFQUNFLDhCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5nIHtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWNvbG9yLWJsb2NrKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWNvbG9yLWJvcmRlcik7XHJcblxyXG4gICYtLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWNvbG9yLWZvcm0pO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uaWMtc2VsZWN0YWJsZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tbm9TZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXR0aW5nOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWNvbG9yLWxlY3R1cmUtYWNjZW50KTtcclxufVxyXG5cclxuLnNlbGVjdGFibGVfX2l0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDhweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "nD9t":
    /*!*************************************************!*\
      !*** ./src/app/pages/settings/settings.page.ts ***!
      \*************************************************/

    /*! exports provided: SettingsPage */

    /***/
    function nD9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "JLDx");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "j/5A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/interfaces/ISetting */
      "N4YS");
      /* harmony import */


      var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var _course_select_course_select_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../course-select/course-select.page */
      "HPLd");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(storage, modalController) {
          _classCallCheck(this, SettingsPage);

          this.storage = storage;
          this.modalController = modalController;
          this.darkMode = null;
          this.currentCourse = '';
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.settings.subscribe(function (settings) {
              // display stored dark mode value
              _this.darkMode = _this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].DARKMODE); // display users current course

              var course = _this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);

              _this.currentCourse = course ? course : null;
            });
          } // store selected value for dark mode to local storage if not already stored

        }, {
          key: "setDarkMode",
          value: function setDarkMode(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var existingValue, changedValue;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      existingValue = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].DARKMODE);
                      changedValue = ev.target.value;

                      if (!(changedValue === existingValue)) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return");

                    case 6:
                      _context.next = 8;
                      return this.storage.addSetting({
                        key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].DARKMODE,
                        value: changedValue
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openCourseModal",
          value: function openCourseModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _course_select_course_select_page__WEBPACK_IMPORTED_MODULE_7__["CourseSelectPage"],
                        cssClass: 'app-modal',
                        swipeToClose: true
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsPage);
      /***/
    },

    /***/
    "yPrK":
    /*!***************************************************!*\
      !*** ./src/app/pages/settings/settings.module.ts ***!
      \***************************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function yPrK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "HATU");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "nD9t");
      /* harmony import */


      var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/shared/shared.module */
      "FpXt");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-settings-settings-module-es5.js.map