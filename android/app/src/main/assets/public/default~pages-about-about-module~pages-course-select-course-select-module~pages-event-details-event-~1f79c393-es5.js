(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"], {
    /***/
    "/8ZT":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
      \***************************************************/

    /*! exports provided: DNS, URL, default */

    /***/
    function ZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DNS", function () {
        return DNS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL", function () {
        return URL;
      });
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");
      /* harmony import */


      var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./parse.js */
      "DeoT");

      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str)); // UTF8 escape

        var bytes = [];

        for (var i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }

        return bytes;
      }

      var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
      var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
      /* harmony default export */

      __webpack_exports__["default"] = function (name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          if (typeof value === 'string') {
            value = stringToBytes(value);
          }

          if (typeof namespace === 'string') {
            namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
          }

          if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
          } // Compute hash of namespace and value, Per 4.3
          // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
          // hashfunc([...namespace, ... value])`


          var bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 0x0f | version;
          bytes[8] = bytes[8] & 0x3f | 0x80;

          if (buf) {
            offset = offset || 0;

            for (var i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }

            return buf;
          }

          return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
        } // Function#name is not settable on some platforms (#270)


        try {
          generateUUID.name = name; // eslint-disable-next-line no-empty
        } catch (err) {} // For CommonJS default export support


        generateUUID.DNS = DNS;
        generateUUID.URL = URL;
        return generateUUID;
      };
      /***/

    },

    /***/
    "0H5L":
    /*!*****************************************************!*\
      !*** ./src/app/components/task/task.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function H5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".task {\n  padding: 12px 20px;\n  overflow: hidden;\n}\n.task--last {\n  border-radius: 0 0 10px 10px;\n}\n.task__name {\n  font-weight: 600;\n  display: block;\n  white-space: normal;\n}\n.task__date {\n  font-weight: 600;\n  color: var(--ion-color-danger);\n  margin-bottom: 10px;\n}\n.task__course {\n  white-space: normal;\n}\n.task__content {\n  width: 100%;\n}\n.task__meta {\n  font-size: 14px;\n  margin-top: 5px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  color: var(--ion-color-medium);\n}\n.task__notes {\n  color: var(--ion-color-medium);\n}\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.option--last-right {\n  border-radius: 0 0 10px 0;\n}\n.option--last-left {\n  border-radius: 0 0 0 10px;\n}\n.item--last {\n  --border-radius: 0 0 10px 10px;\n}\n.item--last:active {\n  --border-radius: 0 !important;\n}\n.item--accent {\n  --background: var(--app-color-lecture-accent);\n}\n.item-options-ios.item-options-end {\n  border-bottom-width: 0;\n}\n.skeleton__content {\n  padding: 12px 20px;\n}\n.skeleton__name {\n  width: 20%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__name {\n    width: 45%;\n  }\n}\n.skeleton__date {\n  width: 15%;\n  margin: 10px 0;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__date {\n    width: 35%;\n  }\n}\n.skeleton__course {\n  width: 10%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__course {\n    width: 25%;\n  }\n}\n.skeleton__notes {\n  width: 5%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__notes {\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLDRCQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUpKO0FBT0U7RUFDRSw4QkFBQTtBQUxKO0FBU0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBTkY7QUFVRTtFQUNFLHlCQUFBO0FBUEo7QUFVRTtFQUNFLHlCQUFBO0FBUko7QUFhRTtFQUNFLDhCQUFBO0FBVko7QUFhRTtFQUNFLDZCQUFBO0FBWEo7QUFjRTtFQUNFLDZDQUFBO0FBWko7QUFnQkE7RUFDRSxzQkFBQTtBQWJGO0FBa0JFO0VBQ0Usa0JBQUE7QUFmSjtBQWtCRTtFQUNFLFVBQUE7QUFoQko7QUFrQkk7RUFIRjtJQUlJLFVBQUE7RUFmSjtBQUNGO0FBa0JFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFoQko7QUFrQkk7RUFKRjtJQUtJLFVBQUE7RUFmSjtBQUNGO0FBa0JFO0VBQ0UsVUFBQTtBQWhCSjtBQWtCSTtFQUhGO0lBSUksVUFBQTtFQWZKO0FBQ0Y7QUFrQkU7RUFDRSxTQUFBO0FBaEJKO0FBa0JJO0VBSEY7SUFJSSxVQUFBO0VBZko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2sge1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmLS1sYXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAmX19kYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY291cnNlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fbWV0YSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG5cclxuICAmX19ub3RlcyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gICYtLWxhc3QtcmlnaHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMDtcclxuICB9XHJcblxyXG4gICYtLWxhc3QtbGVmdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICYtLWxhc3Qge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tbGFzdDphY3RpdmUge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLS1hY2NlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtY29sb3ItbGVjdHVyZS1hY2NlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tb3B0aW9ucy1pb3MuaXRlbS1vcHRpb25zLWVuZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLy8gU2tlbGV0b25cclxuLnNrZWxldG9uIHtcclxuICAmX19jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19kYXRlIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb3Vyc2Uge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ub3RlcyB7XHJcbiAgICB3aWR0aDogNSU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "1M+P":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function MP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = '00000000-0000-0000-0000-000000000000';
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "yxfS");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "oHuE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(modalController) {
          _classCallCheck(this, HeaderComponent);

          this.modalController = modalController;
          this.title = '';
          this.back = false;
          this.isModal = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.modalController.getTop().then(function (modal) {
              _this.isModal = modal !== undefined;
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return this.modalController.dismiss();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      HeaderComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        back: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "2Pgj":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Pgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return rng;
      }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
      // require the crypto API and do not support built-in fallback to lower quality random number
      // generators (like Math.random()).
      // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
      // find the complete implementation of crypto (msCrypto) on IE11.


      var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
      var rnds8 = new Uint8Array(16);

      function rng() {
        if (!getRandomValues) {
          throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }

        return getRandomValues(rnds8);
      }
      /***/

    },

    /***/
    "2szI":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function szI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  *ngIf=\"event\"\n  class=\"event\"\n  [class.task--last]=\"isLast\"\n  [routerLink]=\"['/event-details', event.id]\"\n>\n  <div class=\"event__content\">\n    <ion-label *ngIf=\"event.name\" class=\"event__name\">{{\n      event.name\n    }}</ion-label>\n\n    <!-- Meta -->\n    <div class=\"event__meta\">\n      <!-- start -->\n      <ion-text *ngIf=\"event.start\"\n        >Beginn: {{ event.start | date: 'H:mm' }} Uhr</ion-text\n      >\n\n      <!-- end -->\n      <ion-text *ngIf=\"event.end\"\n        >Ende: {{ event.end | date: 'H:mm' }} Uhr</ion-text\n      >\n\n      <!-- location -->\n      <ion-text class=\"event__location\" *ngIf=\"event.location !== ''\"\n        >Ort: {{ event.location }}</ion-text\n      >\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "49AK":
    /*!***********************************************************!*\
      !*** ./src/app/components/lecture/lecture.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function AK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".lecture {\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n}\n.lecture__name {\n  font-weight: 600;\n  display: block;\n}\n.lecture--last {\n  border-radius: 0 0 0 4px;\n}\n.lecture__icon {\n  font-size: 30px;\n  margin-right: 20px;\n}\n.lecture__content {\n  width: 100%;\n}\n.lecture__meta {\n  font-size: 14px;\n  margin-top: 10px;\n  font-weight: 500;\n}\n.lecture__progress {\n  margin-top: 10px;\n}\n.lecture--status-new {\n  border-left: 3px solid var(--ion-color-success);\n}\n.lecture--status-removed {\n  border-left: 3px solid var(--ion-color-danger);\n}\n.skeleton__content {\n  padding: 12px 20px;\n}\n.skeleton__name {\n  width: 20%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__name {\n    width: 40%;\n  }\n}\n.skeleton__time {\n  width: 10%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__time {\n    width: 25%;\n  }\n}\n.skeleton__lecturer {\n  width: 10%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__lecturer {\n    width: 25%;\n  }\n}\n.skeleton__room {\n  width: 5%;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__room {\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWN0dXJlL2xlY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0Usd0JBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7QUFKSjtBQVFJO0VBQ0UsK0NBQUE7QUFOTjtBQVNJO0VBQ0UsOENBQUE7QUFQTjtBQWNFO0VBQ0Usa0JBQUE7QUFYSjtBQWNFO0VBQ0UsVUFBQTtBQVpKO0FBY0k7RUFIRjtJQUlJLFVBQUE7RUFYSjtBQUNGO0FBY0U7RUFDRSxVQUFBO0FBWko7QUFjSTtFQUhGO0lBSUksVUFBQTtFQVhKO0FBQ0Y7QUFjRTtFQUNFLFVBQUE7QUFaSjtBQWNJO0VBSEY7SUFJSSxVQUFBO0VBWEo7QUFDRjtBQWNFO0VBQ0UsU0FBQTtBQVpKO0FBY0k7RUFIRjtJQUlJLFVBQUE7RUFYSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWN0dXJlL2xlY3R1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVjdHVyZSB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLS1sYXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX21ldGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmX19wcm9ncmVzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tc3RhdHVzIHtcclxuICAgICYtbmV3IHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1yZW1vdmVkIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNrZWxldG9uXHJcbi5za2VsZXRvbiB7XHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGltZSB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2xlY3R1cmVyIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcm9vbSB7XHJcbiAgICB3aWR0aDogNSU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "4USb":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
      \*****************************************************/

    /*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */

    /***/
    function USb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v1.js */
      "xQqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v1", function () {
        return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./v3.js */
      "VKuO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v3", function () {
        return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./v4.js */
      "7Cbv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v4", function () {
        return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./v5.js */
      "Jr8q");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v5", function () {
        return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nil.js */
      "1M+P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NIL", function () {
        return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./version.js */
      "dugQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "validate", function () {
        return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stringify", function () {
        return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"];
      });
      /* harmony import */


      var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./parse.js */
      "DeoT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /***/

    },

    /***/
    "7Cbv":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Cbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      "2Pgj");
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");

      function v4(options, buf, offset) {
        options = options || {};

        var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

        if (buf) {
          offset = offset || 0;

          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }

          return buf;
        }

        return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v4;
      /***/
    },

    /***/
    "B7gQ":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/lecture-status-fab/lecture-status-fab.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LectureStatusFabComponent */

    /***/
    function B7gQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LectureStatusFabComponent", function () {
        return LectureStatusFabComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lecture_status_fab_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lecture-status-fab.component.html */
      "pZdP");
      /* harmony import */


      var _lecture_status_fab_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lecture-status-fab.component.scss */
      "hxe7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "LcQX");

      var LectureStatusFabComponent = /*#__PURE__*/function () {
        function LectureStatusFabComponent(storage, utility) {
          _classCallCheck(this, LectureStatusFabComponent);

          this.storage = storage;
          this.utility = utility;
          this.skeleton = false;
          this.hasChanges = false;
        }

        _createClass(LectureStatusFabComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (!this.skeleton) {
              this.storage.lectures.subscribe(function (lectures) {
                _this2.hasChanges = _this2.utility.hasChanges(lectures);
              });
            }
          }
        }, {
          key: "clearChanges",
          value: function clearChanges() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.skeleton) {
                        _context.next = 3;
                        break;
                      }

                      _context.next = 3;
                      return this.storage.resetStatus();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LectureStatusFabComponent;
      }();

      LectureStatusFabComponent.ctorParameters = function () {
        return [{
          type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
        }];
      };

      LectureStatusFabComponent.propDecorators = {
        skeleton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LectureStatusFabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lecture-status-fab',
        template: _raw_loader_lecture_status_fab_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lecture_status_fab_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LectureStatusFabComponent);
      /***/
    },

    /***/
    "BuRe":
    /*!********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function BuRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./regex.js */
      "QNZY");

      function validate(uuid) {
        return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
      }
      /* harmony default export */


      __webpack_exports__["default"] = validate;
      /***/
    },

    /***/
    "CvMt":
    /*!***************************************************!*\
      !*** ./src/app/components/task/task.component.ts ***!
      \***************************************************/

    /*! exports provided: TaskComponent */

    /***/
    function CvMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_task_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./task.component.html */
      "QUra");
      /* harmony import */


      var _task_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./task.component.scss */
      "0H5L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_pages_task_edit_task_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/pages/task-edit/task-edit.page */
      "gQxy");
      /* harmony import */


      var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/task/task.service */
      "sGSV");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "LcQX");

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent(taskService, modalController, alertController, utility) {
          _classCallCheck(this, TaskComponent);

          this.taskService = taskService;
          this.modalController = modalController;
          this.alertController = alertController;
          this.utility = utility;
          this.isLast = false;
          this.accent = false;
          this.skeleton = false;
          this.disabled = false;
        }

        _createClass(TaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "edit",
          value: function edit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_pages_task_edit_task_edit_page__WEBPACK_IMPORTED_MODULE_5__["TaskEditPage"],
                        cssClass: 'app-modal',
                        componentProps: {
                          task: this.task
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return this.sliding.close();

                    case 5:
                      _context2.next = 7;
                      return modal.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'app-alert',
                        header: 'Aufgabe löschen',
                        message: "Bist du sicher, dass du die Aufgabe \"".concat(this.task.name, "\" l\xF6schen m\xF6chtest? Du kannst sie nicht wiederherstellen."),
                        buttons: [{
                          text: 'Abbrechen',
                          role: 'cancel',
                          handler: function handler() {
                            _this3.sliding.close();
                          }
                        }, {
                          text: 'Löschen',
                          cssClass: 'delete',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.next = 2;
                                      return this.taskService["delete"](this.task);

                                    case 2:
                                      this.utility.showToast('Aufgabe gelöscht.');

                                    case 3:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return TaskComponent;
      }();

      TaskComponent.ctorParameters = function () {
        return [{
          type: src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]
        }];
      };

      TaskComponent.propDecorators = {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isLast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        accent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        skeleton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sliding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sliding']
        }]
      };
      TaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-task',
        template: _raw_loader_task_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TaskComponent);
      /***/
    },

    /***/
    "DeoT":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function DeoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");

      function parse(uuid) {
        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Invalid UUID');
        }

        var v;
        var arr = new Uint8Array(16); // Parse ########-....-....-....-............

        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 0xff;
        arr[2] = v >>> 8 & 0xff;
        arr[3] = v & 0xff; // Parse ........-####-....-....-............

        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 0xff; // Parse ........-....-####-....-............

        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 0xff; // Parse ........-....-....-####-............

        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 0xff; // Parse ........-....-....-....-############
        // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
        arr[11] = v / 0x100000000 & 0xff;
        arr[12] = v >>> 24 & 0xff;
        arr[13] = v >>> 16 & 0xff;
        arr[14] = v >>> 8 & 0xff;
        arr[15] = v & 0xff;
        return arr;
      }
      /* harmony default export */


      __webpack_exports__["default"] = parse;
      /***/
    },

    /***/
    "FpXt":
    /*!*************************************************!*\
      !*** ./src/app/modules/shared/shared.module.ts ***!
      \*************************************************/

    /*! exports provided: SharedModule */

    /***/
    function FpXt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/header/header.component */
      "2MiI");
      /* harmony import */


      var src_app_components_block_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/block/block.component */
      "u+2V");
      /* harmony import */


      var src_app_components_lecture_lecture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/lecture/lecture.component */
      "wPbT");
      /* harmony import */


      var src_app_components_lecture_status_fab_lecture_status_fab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/components/lecture-status-fab/lecture-status-fab.component */
      "B7gQ");
      /* harmony import */


      var src_app_components_event_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/components/event/event.component */
      "Wu7J");
      /* harmony import */


      var src_app_components_task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/components/task/task.component */
      "CvMt");

      var components = [src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], src_app_components_block_block_component__WEBPACK_IMPORTED_MODULE_7__["BlockComponent"], src_app_components_lecture_lecture_component__WEBPACK_IMPORTED_MODULE_8__["LectureComponent"], src_app_components_lecture_status_fab_lecture_status_fab_component__WEBPACK_IMPORTED_MODULE_9__["LectureStatusFabComponent"], src_app_components_event_event_component__WEBPACK_IMPORTED_MODULE_10__["EventComponent"], src_app_components_task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"]];

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [].concat(components),
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [].concat(components),
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], SharedModule);
      /***/
    },

    /***/
    "Hl6o":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-edit/task-edit.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hl6o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\n  title=\"Aufgabe {{ task ? 'bearbeiten' : 'erstellen' }}\"\n></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"field-wrapper\">\n    <div class=\"field\">\n      <ion-input\n        type=\"text\"\n        inputmode=\"text\"\n        placeholder=\"Name*\"\n        [clearInput]=\"true\"\n        [(ngModel)]=\"changedTask.name\"\n        autocapitalize=\"on\"\n      ></ion-input>\n    </div>\n\n    <div class=\"field\">\n      <ion-datetime\n        [min]=\"min\"\n        [max]=\"max\"\n        cancelText=\"Schließen\"\n        doneText=\"Fertig\"\n        displayFormat=\"DDD, DD. MMMM YYYY HH:mm\"\n        pickerFormat=\"DDD, DD. MMM YYYY HH:mm\"\n        [(ngModel)]=\"isoDate\"\n        monthNames=\"[Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember]\"\n        monthShortNames=\"[Jan, Feb, Mär, Apr, Mai, Jun, Jul, Aug, Sep, Okt, Nov, Dez]\"\n        dayShortNames=\"[So, Mo, Di, Mi, Do, Fr, Sa]\"\n        placeholder=\"Abgabetermin auswählen*\"\n      ></ion-datetime>\n    </div>\n  </div>\n\n  <div class=\"field field--single\">\n    <ion-select\n      placeholder=\"Vorlesung auswählen*\"\n      cancelText=\"Schließen\"\n      okText=\"Auswählen\"\n      [(ngModel)]=\"changedTask.course\"\n      interface=\"alert\"\n      [interfaceOptions]=\"{header: 'Vorlesung auswählen'}\"\n    >\n      <ion-select-option\n        *ngFor=\"let course of availableCourses\"\n        [value]=\"course\"\n        >{{ course }}</ion-select-option\n      >\n    </ion-select>\n  </div>\n\n  <div class=\"field field--single\">\n    <ion-textarea\n      placeholder=\"Beschreibung eingeben (optional)\"\n      [autoGrow]=\"true\"\n      inputmode=\"text\"\n      [(ngModel)]=\"changedTask.notes\"\n      autocapitalize=\"on\"\n    ></ion-textarea>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" (click)=\"save()\">Speichern</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "Iab2":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Iab2(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(b, c, d) {
          var e = new XMLHttpRequest();
          e.open("GET", b), e.responseType = "blob", e.onload = function () {
            a(e.response, c, d);
          }, e.onerror = function () {
            console.error("could not download file");
          }, e.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (a, b, d, e) {
          if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
          var g = "application/octet-stream" === a.type,
              h = /constructor/i.test(f.HTMLElement) || f.safari,
              i = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((i || g && h) && "object" == typeof FileReader) {
            var j = new FileReader();
            j.onloadend = function () {
              var a = j.result;
              a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null;
            }, j.readAsDataURL(a);
          } else {
            var k = f.URL || f.webkitURL,
                l = k.createObjectURL(a);
            e ? e.location = l : location.href = l, e = null, setTimeout(function () {
              k.revokeObjectURL(l);
            }, 4E4);
          }
        });
        f.saveAs = a.saveAs = a, true && (module.exports = a);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

    /***/
    "Jr8q":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Jr8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v35.js */
      "/8ZT");
      /* harmony import */


      var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sha1.js */
      "t133");

      var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = v5;
      /***/
    },

    /***/
    "LUGP":
    /*!*****************************************************!*\
      !*** ./src/app/pages/task-edit/task-edit.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function LUGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".field-wrapper {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n@media only screen and (max-width: 768px) {\n  .field-wrapper {\n    grid-template-columns: 1fr;\n    grid-gap: 20px;\n  }\n}\n.field {\n  border-radius: 4px;\n  background: var(--app-form-field);\n}\n.field ion-select,\n.field ion-input,\n.field ion-datetime,\n.field ion-textarea {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n.field--single {\n  margin-top: 20px;\n}\nion-footer ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay1lZGl0L3Rhc2stZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJEQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksMEJBQUE7SUFDQSxjQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQUVGO0FBQUU7Ozs7RUFJRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVKO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBSUU7RUFDRSxTQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLWVkaXQvdGFzay1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWZvcm0tZmllbGQpO1xyXG5cclxuICBpb24tc2VsZWN0LFxyXG4gIGlvbi1pbnB1dCxcclxuICBpb24tZGF0ZXRpbWUsXHJcbiAgaW9uLXRleHRhcmVhIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gICYtLXNpbmdsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "OLVN":
    /*!*******************************************************!*\
      !*** ./src/app/components/event/event.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function OLVN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".event {\n  padding: 12px 20px;\n  overflow: hidden;\n  cursor: pointer;\n  outline: 0;\n}\n.event--last {\n  border-radius: 0 0 10px 10px;\n}\n.event__name {\n  font-weight: 600;\n  display: block;\n  white-space: normal;\n}\n.event__content {\n  width: 100%;\n}\n.event__meta {\n  font-size: 14px;\n  margin-top: 5px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  color: var(--ion-color-medium);\n}\n.event__location {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSw0QkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudCB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IDA7XHJcblxyXG4gICYtLWxhc3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19tZXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcblxyXG4gICZfX2xvY2F0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "QNZY":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function QNZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      /***/
    },

    /***/
    "QUra":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/task/task.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function QUra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item-sliding #sliding *ngIf=\"task && !skeleton\" [disabled]=\"disabled\">\n  <ion-item-options side=\"start\">\n    <ion-item-option\n      [class.option--last-left]=\"isLast\"\n      color=\"danger\"\n      (click)=\"delete()\"\n      >Löschen</ion-item-option\n    >\n  </ion-item-options>\n\n  <ion-item\n    [class.item--last]=\"isLast\"\n    [class.item--accent]=\"accent\"\n    lines=\"none\"\n  >\n    <div *ngIf=\"task\" class=\"task\" [class.task--last]=\"isLast\">\n      <div class=\"task__content\">\n        <ion-label *ngIf=\"task.name\" class=\"task__name\"\n          >Aufgabe: {{ task.name }}</ion-label\n        >\n\n        <!-- Meta -->\n        <div class=\"task__meta\">\n          <ion-text *ngIf=\"task.end\" class=\"task__date\">\n            Abgabe bis: {{ task.end | date: 'H:mm' }} Uhr\n          </ion-text>\n          <ion-text class=\"task__course\" *ngIf=\"task.course\"\n            >Kurs: {{ task.course }}</ion-text\n          >\n\n          <div *ngIf=\"task.notes\" class=\"task__notes\">\n            <ion-text>Beschreibung: {{ task.notes }}</ion-text>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-item>\n\n  <ion-item-options side=\"end\">\n    <ion-item-option [class.option--last-right]=\"isLast\" (click)=\"edit()\"\n      >Bearbeiten</ion-item-option\n    >\n  </ion-item-options>\n</ion-item-sliding>\n\n<!-- Skeleton -->\n<div *ngIf=\"skeleton\">\n  <div class=\"skeleton__content\">\n    <div>\n      <ion-skeleton-text animated class=\"skeleton__name\"></ion-skeleton-text>\n\n      <div>\n        <ion-skeleton-text animated class=\"skeleton__date\"></ion-skeleton-text>\n        <ion-skeleton-text\n          animated\n          class=\"skeleton__course\"\n        ></ion-skeleton-text>\n\n        <div class=\"flex\">\n          <ion-skeleton-text\n            animated\n            class=\"skeleton__notes\"\n          ></ion-skeleton-text>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "R/Wa":
    /*!*******************************************************!*\
      !*** ./src/app/components/block/block.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function RWa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".block {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-bottom: 30px;\n  background: var(--app-color-block);\n}\n.block__heading {\n  display: block;\n  color: var(--ion-color-primary);\n  font-size: 18px;\n  padding: 20px;\n  border-bottom: 1px solid var(--app-color-border);\n}\n.block__item-wrapper:nth-child(even) {\n  background: var(--app-color-lecture-accent);\n}\n.block__item-wrapper:last-child {\n  border-radius: 0 0 10px 10px;\n}\n.skeleton__date {\n  width: 30%;\n  height: 20px;\n}\n@media only screen and (max-width: 768px) {\n  .skeleton__date {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9jay9ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFDSjtBQUVFO0VBQ0UsMkNBQUE7QUFBSjtBQUdFO0VBQ0UsNEJBQUE7QUFESjtBQU9FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBSkY7SUFLSSxVQUFBO0VBSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvY2svYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWNvbG9yLWJsb2NrKTtcclxuXHJcbiAgJl9faGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFwcC1jb2xvci1ib3JkZXIpO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbS13cmFwcGVyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtY29sb3ItbGVjdHVyZS1hY2NlbnQpO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbS13cmFwcGVyOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNrZWxldG9uXHJcbi5za2VsZXRvbiB7XHJcbiAgJl9fZGF0ZSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "VKuO":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function VKuO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v35.js */
      "/8ZT");
      /* harmony import */


      var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./md5.js */
      "tysn");

      var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = v3;
      /***/
    },

    /***/
    "WM9j":
    /*!*********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function WM9j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");
      /**
       * Convert array of 16 byte values to UUID string format of the form:
       * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
       */


      var byteToHex = [];

      for (var i = 0; i < 256; ++i) {
        byteToHex.push((i + 0x100).toString(16).substr(1));
      }

      function stringify(arr) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
        // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

        var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
        // of the following:
        // - One or more input array values don't map to a hex octet (leading to
        // "undefined" in the uuid)
        // - Invalid input values for the RFC `version` or `variant` fields

        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Stringified UUID is invalid');
        }

        return uuid;
      }
      /* harmony default export */


      __webpack_exports__["default"] = stringify;
      /***/
    },

    /***/
    "Wu7J":
    /*!*****************************************************!*\
      !*** ./src/app/components/event/event.component.ts ***!
      \*****************************************************/

    /*! exports provided: EventComponent */

    /***/
    function Wu7J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
        return EventComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event.component.html */
      "2szI");
      /* harmony import */


      var _event_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event.component.scss */
      "OLVN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EventComponent = /*#__PURE__*/function () {
        function EventComponent() {
          _classCallCheck(this, EventComponent);

          this.isLast = false;
        }

        _createClass(EventComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EventComponent;
      }();

      EventComponent.ctorParameters = function () {
        return [];
      };

      EventComponent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isLast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event',
        template: _raw_loader_event_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventComponent);
      /***/
    },

    /***/
    "dugQ":
    /*!*******************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function dugQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");

      function version(uuid) {
        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Invalid UUID');
        }

        return parseInt(uuid.substr(14, 1), 16);
      }
      /* harmony default export */


      __webpack_exports__["default"] = version;
      /***/
    },

    /***/
    "gQxy":
    /*!***************************************************!*\
      !*** ./src/app/pages/task-edit/task-edit.page.ts ***!
      \***************************************************/

    /*! exports provided: TaskEditPage */

    /***/
    function gQxy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskEditPage", function () {
        return TaskEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_task_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./task-edit.page.html */
      "Hl6o");
      /* harmony import */


      var _task_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./task-edit.page.scss */
      "LUGP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/task/task.service */
      "sGSV");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "LcQX");

      var TaskEditPage = /*#__PURE__*/function () {
        function TaskEditPage(taskService, modalController, utility) {
          _classCallCheck(this, TaskEditPage);

          this.taskService = taskService;
          this.modalController = modalController;
          this.utility = utility;
          this.min = new Date().toISOString();
          this.max = "".concat(new Date().getFullYear() + 1, "-12-31");
          this.availableCourses = [];
          this.isoDate = '';
        }

        _createClass(TaskEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // init changed task object
            this.changedTask = this.task ? Object.assign({}, this.task) : {
              id: '',
              course: '',
              start: null,
              end: null,
              name: '',
              notes: ''
            };
            this.isoDate = this.changedTask.end ? this.changedTask.end.toISOString() : '';
            this.taskService.getUniqueCourses().then(function (courses) {
              _this4.availableCourses = courses;
            });
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.changedTask.name = this.changedTask.name.trim();
                      this.changedTask.notes = this.changedTask.notes.trim();

                      if (!(!this.changedTask.name || !this.changedTask.course || !this.isoDate)) {
                        _context5.next = 5;
                        break;
                      }

                      // inputs not valid
                      this.utility.showToast('Bitte fülle alle erforderlichen Felder aus.');
                      return _context5.abrupt("return");

                    case 5:
                      this.changedTask.end = new Date(this.isoDate);
                      this.changedTask.start = this.changedTask.end;
                      this.changedTask.start = new Date(this.changedTask.start);
                      this.changedTask.end = new Date(this.changedTask.end);

                      if (!this.task) {
                        _context5.next = 15;
                        break;
                      }

                      _context5.next = 12;
                      return this.taskService.updateTask(this.changedTask);

                    case 12:
                      this.utility.showToast('Aufgabe aktualisiert.');
                      _context5.next = 18;
                      break;

                    case 15:
                      _context5.next = 17;
                      return this.taskService.addTask(this.changedTask);

                    case 17:
                      this.utility.showToast('Aufgabe hinzugefügt.');

                    case 18:
                      _context5.next = 20;
                      return this.modalController.getTop();

                    case 20:
                      if (!_context5.sent) {
                        _context5.next = 22;
                        break;
                      }

                      this.modalController.dismiss();

                    case 22:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return TaskEditPage;
      }();

      TaskEditPage.ctorParameters = function () {
        return [{
          type: src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }];
      };

      TaskEditPage.propDecorators = {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TaskEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-task-edit',
        template: _raw_loader_task_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TaskEditPage);
      /***/
    },

    /***/
    "hxe7":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/lecture-status-fab/lecture-status-fab.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function hxe7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab {\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWN0dXJlLXN0YXR1cy1mYWIvbGVjdHVyZS1zdGF0dXMtZmFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWN0dXJlLXN0YXR1cy1mYWIvbGVjdHVyZS1zdGF0dXMtZmFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYiB7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "jYeP":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lecture/lecture.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jYeP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  *ngIf=\"lecture && !skeleton\"\n  class=\"lecture\"\n  [class.lecture--status-new]=\"lecture.status === statusAdded\"\n  [class.lecture--status-removed]=\"lecture.status === statusRemoved\"\n  [class.lecture--last]=\"isLast\"\n>\n  <ion-icon\n    *ngIf=\"utility.isExam(lecture) && !lecture.status\"\n    class=\"lecture__icon\"\n    name=\"document-text-outline\"\n  ></ion-icon>\n  <ion-icon\n    *ngIf=\"lecture.status === statusAdded\"\n    name=\"add-circle-outline\"\n    color=\"success\"\n    class=\"lecture__icon\"\n    title=\"Vorlesung wurde neu hinzugefügt\"\n  ></ion-icon>\n  <ion-icon\n    *ngIf=\"lecture.status === statusRemoved\"\n    name=\"close-circle-outline\"\n    color=\"danger\"\n    class=\"lecture__icon\"\n    title=\"Vorlesung wurde gelöscht\"\n  ></ion-icon>\n\n  <div class=\"lecture__content\">\n    <ion-label *ngIf=\"lecture.name\" class=\"lecture__name\">{{\n      lecture.name\n    }}</ion-label>\n\n    <ion-progress-bar\n      *ngIf=\"progress && lecture.status !== 'removed'\"\n      class=\"lecture__progress\"\n      [value]=\"progressValue\"\n      buffer=\"0\"\n    ></ion-progress-bar>\n\n    <!-- Meta -->\n    <div class=\"lecture__meta\">\n      <div class=\"flex\">\n        <ion-text *ngIf=\"lecture.start && lecture.end\">\n          {{ lecture.start | date: 'H:mm' }} bis\n          {{ lecture.end | date: 'H:mm' }} Uhr\n        </ion-text>\n        <ion-text *ngIf=\"lecture.lecturer\">{{ lecture.lecturer }}</ion-text>\n      </div>\n\n      <ion-text *ngIf=\"lecture.room\">{{ lecture.room }}</ion-text>\n    </div>\n  </div>\n</div>\n\n<!-- Skeleton -->\n<div *ngIf=\"skeleton\">\n  <div class=\"skeleton__content\">\n    <div>\n      <ion-skeleton-text animated class=\"skeleton__name\"></ion-skeleton-text>\n\n      <div>\n        <div class=\"flex\">\n          <ion-skeleton-text\n            animated\n            class=\"skeleton__time\"\n          ></ion-skeleton-text>\n          <ion-skeleton-text\n            animated\n            class=\"skeleton__lecturer\"\n          ></ion-skeleton-text>\n        </div>\n\n        <div class=\"flex\">\n          <ion-skeleton-text\n            animated\n            class=\"skeleton__room\"\n          ></ion-skeleton-text>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "oHuE":
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function oHuE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: linear-gradient(\n    90deg,\n    var(--ion-color-primary) 0%,\n    var(--ion-color-secondary) 50%,\n    var(--ion-color-tertiary) 100%\n  );\n  --color: #ffffff;\n  box-shadow: var(--app-box-shadow);\n  border-radius: 0 0 40px 40px;\n  padding: calc(var(--ion-safe-area-top, 0) + 10px) 20px 10px 20px !important;\n}\nion-toolbar ion-menu-button,\nion-toolbar ion-back-button {\n  color: #ffffff;\n}\nion-toolbar #btn--closeModal {\n  font-size: 20px;\n  height: 48px;\n  width: 48px;\n  --color: #ffffff;\n}\n@media only screen and (max-width: 768px) {\n  ion-toolbar #btn--closeModal {\n    font-size: 24px;\n  }\n}\nion-toolbar ion-title {\n  padding: 0;\n}\n@media only screen and (min-width: 768px) {\n  ion-toolbar ion-title {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7O0dBQUE7RUFNQSxnQkFBQTtFQUNBLGlDQUFBO0VBR0EsNEJBQUE7RUFDQSwyRUFBQTtBQURGO0FBR0U7O0VBRUUsY0FBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFORjtJQU9JLGVBQUE7RUFESjtBQUNGO0FBSUU7RUFDRSxVQUFBO0FBRko7QUFJSTtFQUhGO0lBSUksZUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MGRlZyxcclxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSxcclxuICAgIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpIDUwJSxcclxuICAgIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMTAwJVxyXG4gICk7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtYm94LXNoYWRvdyk7XHJcblxyXG4gIC8vIG1vcmUgcm91bmRlZCBoZWFkZXIgbG9vazpcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNDBweCA0MHB4O1xyXG4gIHBhZGRpbmc6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApICsgMTBweCkgMjBweCAxMHB4IDIwcHggIWltcG9ydGFudDtcclxuXHJcbiAgaW9uLW1lbnUtYnV0dG9uLFxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gICNidG4tLWNsb3NlTW9kYWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "pZdP":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lecture-status-fab/lecture-status-fab.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pZdP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab\n  *ngIf=\"hasChanges || skeleton\"\n  vertical=\"bottom\"\n  horizontal=\"end\"\n  slot=\"fixed\"\n  (click)=\"clearChanges()\"\n  title=\"Änderungen als gelesen markieren\"\n>\n  <ion-fab-button>\n    <ion-icon name=\"checkmark-done\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";
      /***/
    },

    /***/
    "sGSV":
    /*!***********************************************!*\
      !*** ./src/app/services/task/task.service.ts ***!
      \***********************************************/

    /*! exports provided: TaskService */

    /***/
    function sGSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/interfaces/ISetting */
      "N4YS");
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../storage/storage.service */
      "E2f4");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/interfaces/ILecture */
      "dP1x");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          Clipboard = _capacitor_core__WEBP.Clipboard,
          Filesystem = _capacitor_core__WEBP.Filesystem,
          Share = _capacitor_core__WEBP.Share;

      var TaskService = /*#__PURE__*/function () {
        function TaskService(storage) {
          var _this5 = this;

          _classCallCheck(this, TaskService);

          this.storage = storage;
          this.tasksBs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.tasks = this.tasksBs.asObservable();
          this.getTasks().then(function (tasks) {
            _this5.tasksBs.next(tasks);
          });
        }

        _createClass(TaskService, [{
          key: "getTasks",
          value: function getTasks() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var tasks;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.storage.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_3__["StorageKey"].TASKS);

                    case 2:
                      tasks = _context6.sent;

                      if (!Array.isArray(tasks)) {
                        _context6.next = 8;
                        break;
                      }

                      tasks.forEach(function (event) {
                        event.start = new Date(event.start);
                        event.end = new Date(event.end);
                      });
                      return _context6.abrupt("return", this.sortTasks(tasks));

                    case 8:
                      return _context6.abrupt("return", []);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(task) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var deleted;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      deleted = this.tasksBs.getValue().filter(function (stored) {
                        return stored.id !== task.id;
                      });
                      deleted = this.sortTasks(deleted);
                      this.tasksBs.next(deleted);
                      _context7.next = 5;
                      return this.storage.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_3__["StorageKey"].TASKS, deleted);

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "addTask",
          value: function addTask(task) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var stored;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      task.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                      stored = this.tasksBs.getValue();

                      if (!stored.find(function (i) {
                        return i.id === task.id;
                      })) {
                        _context8.next = 4;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 4:
                      stored.push(task);
                      stored = this.sortTasks(stored);
                      this.tasksBs.next(stored);
                      _context8.next = 9;
                      return this.storage.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_3__["StorageKey"].TASKS, stored);

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "updateTask",
          value: function updateTask(task) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var stored, updated;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      stored = this.tasksBs.getValue();
                      updated = [];
                      stored.forEach(function (storedTask) {
                        if (storedTask.id === task.id) {
                          updated.push(task);
                        } else {
                          updated.push(storedTask);
                        }
                      });
                      updated = this.sortTasks(updated);
                      this.tasksBs.next(updated);
                      _context9.next = 7;
                      return this.storage.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_3__["StorageKey"].TASKS, updated);

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getUniqueCourses",
          value: function getUniqueCourses() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var unique, lectures;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      unique = [];
                      _context10.prev = 1;
                      _context10.next = 4;
                      return this.storage.lectures.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).toPromise();

                    case 4:
                      lectures = _context10.sent;
                      lectures.forEach(function (lecture) {
                        if (!unique.includes(lecture.name) && lecture.status !== src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_7__["LectureStatus"].REMOVED) {
                          unique.push(lecture.name);
                        }
                      });

                    case 6:
                      _context10.prev = 6;
                      return _context10.abrupt("return", unique.sort());

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[1,, 6, 9]]);
            }));
          }
        }, {
          key: "sortTasks",
          value: function sortTasks(tasks) {
            return tasks.sort(function (a, b) {
              return a.start.getTime() - b.start.getTime();
            });
          }
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var tasks, string;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      tasks = this.tasksBs.getValue();
                      string = '';
                      tasks.forEach(function (task) {
                        if (string) {
                          string += '\n\n';
                        }

                        string += "Aufgabe: ".concat(task.name, "\nAbgabe bis: ").concat(task.end.toLocaleDateString(), ", ").concat(task.end.getHours(), ":").concat(task.end.getMinutes(), " Uhr\nKurs: ").concat(task.course);
                      });
                      _context11.next = 5;
                      return Clipboard.write({
                        string: string.trim()
                      });

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "exportFile",
          value: function exportFile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var tasks, result, blob;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      tasks = this.tasksBs.getValue(); // remove "start" attribute

                      tasks.forEach(function (task) {
                        delete task.start;
                      });
                      _context12.prev = 2;
                      _context12.prev = 3;
                      _context12.next = 6;
                      return Filesystem.readdir({
                        path: 'exports',
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemDirectory"].Cache
                      });

                    case 6:
                      _context12.next = 12;
                      break;

                    case 8:
                      _context12.prev = 8;
                      _context12.t0 = _context12["catch"](3);
                      _context12.next = 12;
                      return Filesystem.mkdir({
                        path: 'exports',
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemDirectory"].Cache
                      });

                    case 12:
                      _context12.next = 14;
                      return Filesystem.writeFile({
                        path: 'exports/tasks.json',
                        data: JSON.stringify(this.tasksBs.getValue()),
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemDirectory"].Cache,
                        encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemEncoding"].UTF8
                      });

                    case 14:
                      result = _context12.sent;

                      if (!result) {
                        _context12.next = 18;
                        break;
                      }

                      _context12.next = 18;
                      return Share.share({
                        url: "".concat(result.uri)
                      });

                    case 18:
                      _context12.next = 24;
                      break;

                    case 20:
                      _context12.prev = 20;
                      _context12.t1 = _context12["catch"](2);
                      // Web Share API may not be available
                      blob = new Blob([JSON.stringify(tasks)], {
                        type: 'application/json;charset=utf-8'
                      });
                      Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(blob, 'export_tasks.json');

                    case 24:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[2, 20], [3, 8]]);
            }));
          }
        }, {
          key: "import",
          value: function _import(file) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", new Promise(function (resolve) {
                        if (file.type !== 'application/json' || !file) {
                          console.error("Wrong file type: ".concat(file.type, " or file undefined"));
                          return resolve(false);
                        }

                        var readFile = new FileReader();
                        var validImport = true;

                        readFile.onload = function (e) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                            var buffer, json, validTasks, _iterator, _step, task;

                            return regeneratorRuntime.wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    buffer = e.target.result;
                                    json = JSON.parse(buffer.toString());
                                    validTasks = [];
                                    _iterator = _createForOfIteratorHelper(json);

                                    try {
                                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                        task = _step.value;

                                        if ('id' in task && 'end' in task && 'name' in task && 'notes' in task && 'course' in task) {
                                          task.end = new Date(task.end);
                                          task.start = task.end;
                                          validTasks.push(task);
                                        }
                                      }
                                    } catch (err) {
                                      _iterator.e(err);
                                    } finally {
                                      _iterator.f();
                                    }

                                    if (!(validTasks.length > 0)) {
                                      _context13.next = 13;
                                      break;
                                    }

                                    validTasks = this.sortTasks(validTasks);
                                    this.tasksBs.next(validTasks);
                                    _context13.next = 10;
                                    return this.storage.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_3__["StorageKey"].TASKS, validTasks);

                                  case 10:
                                    validImport = true;
                                    _context13.next = 14;
                                    break;

                                  case 13:
                                    validImport = false;

                                  case 14:
                                    return _context13.abrupt("return", resolve(validImport));

                                  case 15:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13, this);
                          }));
                        };

                        readFile.readAsText(file);
                      }));

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));
          }
        }]);

        return TaskService;
      }();

      TaskService.ctorParameters = function () {
        return [{
          type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TaskService);
      /***/
    },

    /***/
    "t133":
    /*!****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function t133(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
      // http://www.movable-type.co.uk/scripts/sha1.html


      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;

          case 1:
            return x ^ y ^ z;

          case 2:
            return x & y ^ x & z ^ y & z;

          case 3:
            return x ^ y ^ z;
        }
      }

      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }

      function sha1(bytes) {
        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
        var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

        if (typeof bytes === 'string') {
          var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

          bytes = [];

          for (var i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          // Convert Array-like to Array
          bytes = Array.prototype.slice.call(bytes);
        }

        bytes.push(0x80);
        var l = bytes.length / 4 + 2;
        var N = Math.ceil(l / 16);
        var M = new Array(N);

        for (var _i = 0; _i < N; ++_i) {
          var arr = new Uint32Array(16);

          for (var j = 0; j < 16; ++j) {
            arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
          }

          M[_i] = arr;
        }

        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

        for (var _i2 = 0; _i2 < N; ++_i2) {
          var W = new Uint32Array(80);

          for (var t = 0; t < 16; ++t) {
            W[t] = M[_i2][t];
          }

          for (var _t = 16; _t < 80; ++_t) {
            W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
          }

          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          var e = H[4];

          for (var _t2 = 0; _t2 < 80; ++_t2) {
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }

          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }

        return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
      }
      /* harmony default export */


      __webpack_exports__["default"] = sha1;
      /***/
    },

    /***/
    "tysn":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function tysn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
       * Browser-compatible JavaScript MD5
       *
       * Modification of JavaScript MD5
       * https://github.com/blueimp/JavaScript-MD5
       *
       * Copyright 2011, Sebastian Tschan
       * https://blueimp.net
       *
       * Licensed under the MIT license:
       * https://opensource.org/licenses/MIT
       *
       * Based on
       * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
       * Digest Algorithm, as defined in RFC 1321.
       * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
       * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
       * Distributed under the BSD License
       * See http://pajhome.org.uk/crypt/md5 for more info.
       */


      function md5(bytes) {
        if (typeof bytes === 'string') {
          var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

          bytes = new Uint8Array(msg.length);

          for (var i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }

        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      /*
       * Convert an array of little-endian words to an array of bytes
       */


      function md5ToHexEncodedArray(input) {
        var output = [];
        var length32 = input.length * 32;
        var hexTab = '0123456789abcdef';

        for (var i = 0; i < length32; i += 8) {
          var x = input[i >> 5] >>> i % 32 & 0xff;
          var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
          output.push(hex);
        }

        return output;
      }
      /**
       * Calculate output length with padding and bit length
       */


      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      /*
       * Calculate the MD5 of an array of little-endian words, and a bit length.
       */


      function wordsToMd5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[getOutputLength(len) - 1] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }

        return [a, b, c, d];
      }
      /*
       * Convert an array bytes to an array of little-endian words
       * Characters >255 have their high-byte silently ignored.
       */


      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }

        var length8 = input.length * 8;
        var output = new Uint32Array(getOutputLength(length8));

        for (var i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
        }

        return output;
      }
      /*
       * Add integers, wrapping at 2^32. This uses 16-bit operations internally
       * to work around bugs in some JS interpreters.
       */


      function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xffff;
      }
      /*
       * Bitwise rotate a 32-bit number to the left.
       */


      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      /*
       * These functions implement the four basic operations the algorithm uses.
       */


      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }

      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }

      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }

      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      /* harmony default export */


      __webpack_exports__["default"] = md5;
      /***/
    },

    /***/
    "u+2V":
    /*!*****************************************************!*\
      !*** ./src/app/components/block/block.component.ts ***!
      \*****************************************************/

    /*! exports provided: BlockComponent */

    /***/
    function u2V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockComponent", function () {
        return BlockComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_block_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./block.component.html */
      "xicB");
      /* harmony import */


      var _block_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./block.component.scss */
      "R/Wa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "LcQX");

      var BlockComponent = /*#__PURE__*/function () {
        function BlockComponent(utility) {
          _classCallCheck(this, BlockComponent);

          this.utility = utility;
          this.disabled = false;
          this.now = new Date(Date.now());
          this.lectureBlock = false;
          this.eventBlock = false;
          this.taskBlock = false;
          this.dateString = null;
        }

        _createClass(BlockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.block && this.block.items) {
              this.lectureBlock = this.isLectureBlock(this.block);
              this.eventBlock = this.isEventBlock(this.block);
              this.taskBlock = this.isTaskBlock(this.block);
              this.dateString = this.blockDateToString();
            }
          } // returns whether or not arg is Interface ILectureBlock

        }, {
          key: "isLectureBlock",
          value: function isLectureBlock(arg) {
            var block = {
              date: null,
              items: [{
                uid: null,
                lecturer: null,
                name: null,
                room: null,
                lastModified: null,
                start: null,
                end: null,
                status: null
              }]
            };
            var neededKeys = Object.keys(block.items[0]);
            var hasKeys = Object.keys(this.block.items[0]);

            if (!hasKeys.includes('status')) {
              hasKeys.push('status');
            }

            return JSON.stringify(neededKeys.sort()) === JSON.stringify(hasKeys.sort());
          } // returns whether or not arg is Interface IEventBlock

        }, {
          key: "isEventBlock",
          value: function isEventBlock(arg) {
            var block = {
              date: null,
              items: [{
                id: null,
                name: null,
                description: null,
                start: null,
                end: null,
                status: null,
                location: null
              }]
            };
            var neededKeys = Object.keys(block.items[0]);
            var hasKeys = Object.keys(this.block.items[0]);
            return JSON.stringify(neededKeys.sort()) === JSON.stringify(hasKeys.sort());
          } // returns whether or not arg is Interface IEventBlock

        }, {
          key: "isTaskBlock",
          value: function isTaskBlock(arg) {
            var block = {
              date: null,
              items: [{
                id: null,
                name: null,
                start: new Date(),
                end: new Date(),
                course: null,
                notes: null
              }]
            };
            var neededKeys = Object.keys(block.items[0]);
            var hasKeys = Object.keys(this.block.items[0]);

            if (!hasKeys.includes('notes')) {
              hasKeys.push('notes');
            }

            return JSON.stringify(neededKeys.sort()) === JSON.stringify(hasKeys.sort());
          }
        }, {
          key: "blockDateToString",
          value: function blockDateToString() {
            var now = new Date(Date.now());

            if (this.utility.isSameDay(this.block.date, now)) {
              return 'Heute';
            } else if (this.utility.isSameDay(this.utility.stripTimeFromDate(now, 1), this.block.date)) {
              return 'Morgen';
            } else if (this.utility.isSameDay(this.utility.stripTimeFromDate(now, -1), this.block.date)) {
              return 'Gestern';
            } else {
              return null;
            }
          }
        }]);

        return BlockComponent;
      }();

      BlockComponent.ctorParameters = function () {
        return [{
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }];
      };

      BlockComponent.propDecorators = {
        block: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        skeleton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      BlockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-block',
        template: _raw_loader_block_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_block_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlockComponent);
      /***/
    },

    /***/
    "wPbT":
    /*!*********************************************************!*\
      !*** ./src/app/components/lecture/lecture.component.ts ***!
      \*********************************************************/

    /*! exports provided: LectureComponent */

    /***/
    function wPbT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LectureComponent", function () {
        return LectureComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lecture_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lecture.component.html */
      "jYeP");
      /* harmony import */


      var _lecture_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lecture.component.scss */
      "49AK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/interfaces/ILecture */
      "dP1x");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "LcQX");

      var LectureComponent = /*#__PURE__*/function () {
        function LectureComponent(utility) {
          _classCallCheck(this, LectureComponent);

          this.utility = utility;
          this.skeleton = false;
          this.isLast = false;
          this.progress = false;
          this.progressValue = 0;
          this.intervall = null;
          this.statusAdded = src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].ADDED;
          this.statusRemoved = src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].REMOVED;
        }

        _createClass(LectureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            if (!this.skeleton) {
              this.setProgress(); // update progress bar every 10 seconds and remove past lectures

              this.intervall = setInterval(function () {
                _this7.setProgress();
              }, 10 * 1000);
            }
          } // delete intervalls when routing to other page

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.intervall) {
              clearInterval(this.intervall);
            }
          }
        }, {
          key: "setProgress",
          value: function setProgress() {
            var now = new Date(Date.now());

            if (now.getTime() > this.lecture.start.getTime() && now.getTime() < this.lecture.end.getTime()) {
              this.progress = true;
              this.progressValue = (now.getTime() - this.lecture.start.getTime()) / (this.lecture.end.getTime() - this.lecture.start.getTime());
            }
          }
        }]);

        return LectureComponent;
      }();

      LectureComponent.ctorParameters = function () {
        return [{
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
        }];
      };

      LectureComponent.propDecorators = {
        lecture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        skeleton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isLast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LectureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lecture',
        template: _raw_loader_lecture_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lecture_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LectureComponent);
      /***/
    },

    /***/
    "xQqG":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function xQqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      "2Pgj");
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j"); // **`v1()` - Generate time-based UUID**
      //
      // Inspired by https://github.com/LiosK/UUID.js
      // and http://docs.python.org/library/uuid.html


      var _nodeId;

      var _clockseq; // Previous uuid creation time


      var _lastMSecs = 0;
      var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

      function v1(options, buf, offset) {
        var i = buf && offset || 0;
        var b = buf || new Array(16);
        options = options || {};
        var node = options.node || _nodeId;
        var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
        // specified.  We do this lazily to minimize issues related to insufficient
        // system entropy.  See #189

        if (node == null || clockseq == null) {
          var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

          if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }

          if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
          }
        } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
        // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
        // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
        // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


        var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
        // cycle to simulate higher resolution clock

        var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

        var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 0x3fff;
        } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
        // time interval


        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        } // Per 4.2.1.2 Throw error if too many uuids are requested


        if (nsecs >= 10000) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }

        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

        msecs += 12219292800000; // `time_low`

        var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
        b[i++] = tl >>> 24 & 0xff;
        b[i++] = tl >>> 16 & 0xff;
        b[i++] = tl >>> 8 & 0xff;
        b[i++] = tl & 0xff; // `time_mid`

        var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
        b[i++] = tmh >>> 8 & 0xff;
        b[i++] = tmh & 0xff; // `time_high_and_version`

        b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

        b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

        b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

        b[i++] = clockseq & 0xff; // `node`

        for (var n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }

        return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v1;
      /***/
    },

    /***/
    "xicB":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/block/block.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xicB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"block\" *ngIf=\"block && !skeleton\">\n  <!-- headings (e.g \"morgen\", \"heute\", etc.) -->\n  <ion-label class=\"block__heading\" *ngIf=\"dateString\">\n    {{ dateString }}\n  </ion-label>\n\n  <ion-label class=\"block__heading\" *ngIf=\"!dateString\">\n    {{ block.date | date: 'fullDate' }}\n  </ion-label>\n\n  <!-- items -->\n  <div\n    class=\"block__item-wrapper\"\n    *ngFor=\"let item of block.items; let i = index\"\n  >\n    <app-lecture\n      *ngIf=\"lectureBlock\"\n      [lecture]=\"item\"\n      [isLast]=\"i === block.items.length - 1\"\n    ></app-lecture>\n\n    <app-event\n      *ngIf=\"eventBlock\"\n      [event]=\"item\"\n      [isLast]=\"i === block.items.length - 1\"\n    ></app-event>\n\n    <app-task\n      *ngIf=\"taskBlock\"\n      [task]=\"item\"\n      [isLast]=\"i === block.items.length - 1\"\n      [accent]=\"i % 2 === 0\"\n      [disabled]=\"disabled\"\n    ></app-task>\n  </div>\n</div>\n\n<!-- skeleton -->\n<div *ngIf=\"skeleton\" class=\"block\">\n  <div class=\"block__heading\">\n    <ion-skeleton-text animated class=\"skeleton__date\"></ion-skeleton-text>\n  </div>\n\n  <app-lecture *ngIf=\"skeleton === 'lecture'\" [skeleton]=\"true\"></app-lecture>\n  <app-task *ngIf=\"skeleton === 'task'\" [skeleton]=\"true\"></app-task>\n</div>\n";
      /***/
    },

    /***/
    "yxfS":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function yxfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"!back && !isModal\"></ion-menu-button>\n      <ion-back-button *ngIf=\"back && !isModal\" defaultHref=\"/\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      <ion-button *ngIf=\"isModal\" shape=\"round\" id=\"btn--closeModal\" (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393-es5.js.map