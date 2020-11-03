(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "1/we":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/course-select/course-select.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function we(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header title=\"Kurs auswählen\"></app-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <ion-searchbar\n      animated\n      showCancelButton=\"focus\"\n      mode=\"ios\"\n      placeholder=\"Suchen...\"\n      cancelButtonText=\"Abbrechen\"\n      (ionChange)=\"searchCourse($event)\"\n    ></ion-searchbar>\n\n    <div *ngIf=\"courseGroups.length > 0 && displayedGroups.length === 0\">\n      <p>Deine Suche hat keine Treffer ergeben.</p>\n    </div>\n\n    <div *ngIf=\"courseGroups.length === 0\">\n      <ion-label>Kurse werden geladen...</ion-label>\n      <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </div>\n  </div>\n\n  <ion-list *ngFor=\"let group of displayedGroups\">\n    <ion-item-divider>\n      <ion-label> {{ group.name }} </ion-label>\n    </ion-item-divider>\n\n    <ion-item lines=\"none\" *ngFor=\"let course of group.courses\">\n      <ion-checkbox\n        (ionChange)=\"select($event, course)\"\n        [checked]=\"selectedCourse === course\"\n      ></ion-checkbox>\n      <ion-label>{{ course }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "GqVL":
    /*!*************************************************************!*\
      !*** ./src/app/pages/course-select/course-select.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function GqVL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-checkbox {\n  margin-right: 20px;\n}\n\nion-list {\n  padding: 0;\n}\n\nion-searchbar {\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-progress-bar {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cnNlLXNlbGVjdC9jb3Vyc2Utc2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3Vyc2Utc2VsZWN0L2NvdXJzZS1zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNoZWNrYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "HPLd":
    /*!***********************************************************!*\
      !*** ./src/app/pages/course-select/course-select.page.ts ***!
      \***********************************************************/

    /*! exports provided: CourseSelectPage */

    /***/
    function HPLd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseSelectPage", function () {
        return CourseSelectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_course_select_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./course-select.page.html */
      "1/we");
      /* harmony import */


      var _course_select_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-select.page.scss */
      "GqVL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/interfaces/ISetting */
      "N4YS");
      /* harmony import */


      var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/storage/storage.service */
      "E2f4");

      var CourseSelectPage = /*#__PURE__*/function () {
        function CourseSelectPage(storage, modalController, router) {
          _classCallCheck(this, CourseSelectPage);

          this.storage = storage;
          this.modalController = modalController;
          this.router = router;
          this.redirect = true;
          this.courseGroups = [];
          this.displayedGroups = [];
          this.selectedCourse = null;
        }

        _createClass(CourseSelectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.fetchCourses().then(function (courses) {
              _this.courseGroups = _this.groupCourses(courses);
              _this.displayedGroups = _this.courseGroups;
            })["catch"](function () {
              _this.courseGroups = [];
              _this.displayedGroups = [];
            });
            this.selectedCourse = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].COURSE);
          }
        }, {
          key: "select",
          value: function select(ev, course) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (ev.target.checked) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      this.selectedCourse = course;
                      _context.next = 5;
                      return this.storage.addSetting({
                        key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].COURSE,
                        value: course
                      });

                    case 5:
                      if (this.redirect) {
                        this.router.navigate(['/timetable']);
                      } // close modal


                      _context.next = 8;
                      return this.modalController.getTop();

                    case 8:
                      if (!_context.sent) {
                        _context.next = 11;
                        break;
                      }

                      _context.next = 11;
                      return this.modalController.dismiss();

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "searchCourse",
          value: function searchCourse(ev) {
            var searchedValue = ev.target.value.toLowerCase().trim();
            var matches = [];

            if (searchedValue === '') {
              // user cleared searchbar
              this.displayedGroups = this.courseGroups;
              return;
            }

            this.courseGroups.forEach(function (group) {
              group.courses.forEach(function (course) {
                if (course.toLowerCase().includes(searchedValue)) {
                  matches.push(course);
                }
              });
            });
            this.displayedGroups = this.groupCourses(matches);
          } // returns the groupname of a course, a.e. group for INF19B wis INF

        }, {
          key: "getGroup",
          value: function getGroup(course) {
            return course.split(/\d/)[0];
          }
        }, {
          key: "groupCourses",
          value: function groupCourses(courses) {
            var _this2 = this;

            var groups = []; // get unique groups

            courses.forEach(function (course) {
              var group = _this2.getGroup(course);

              if (!groups.includes(group)) {
                groups.push(group);
              }
            });
            var courseGroups = [];
            groups.forEach(function (group) {
              var relatedCourses = courses.filter(function (course) {
                return _this2.getGroup(course) === group;
              });
              courseGroups.push({
                name: group,
                courses: relatedCourses
              });
            });
            return courseGroups;
          }
        }]);

        return CourseSelectPage;
      }();

      CourseSelectPage.ctorParameters = function () {
        return [{
          type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CourseSelectPage.propDecorators = {
        redirect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CourseSelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course-select',
        template: _raw_loader_course_select_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_select_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CourseSelectPage);
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context2.abrupt("return", el);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "gcxx":
    /*!*************************************************!*\
      !*** ./src/app/services/event/event.service.ts ***!
      \*************************************************/

    /*! exports provided: EventService */

    /***/
    function gcxx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/interfaces/ISetting */
      "N4YS");
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../storage/storage.service */
      "E2f4");

      var EventService_1;

      var EventService = EventService_1 = /*#__PURE__*/function () {
        function EventService(http, storage) {
          var _this3 = this;

          _classCallCheck(this, EventService);

          this.http = http;
          this.storage = storage;
          this.eventsBs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.events = this.eventsBs.asObservable();
          this.getEvents().then(function (events) {
            _this3.eventsBs.next(events);
          });
        }

        _createClass(EventService, [{
          key: "fetchEvents",
          value: function fetchEvents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var events, local;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.http.get(EventService_1.API_HOST).toPromise();

                    case 3:
                      events = _context3.sent;
                      events.forEach(function (event) {
                        event.start = new Date(event.start);
                        event.end = new Date(event.end);
                      });
                      this.eventsBs.next(events); // store fetched events in local storage

                      _context3.next = 8;
                      return this.storage.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_4__["StorageKey"].EVENTS, events);

                    case 8:
                      return _context3.abrupt("return", true);

                    case 11:
                      _context3.prev = 11;
                      _context3.t0 = _context3["catch"](0);
                      console.error('Error while fetching events!'); // load lectures from local storage

                      _context3.next = 16;
                      return this.getEvents();

                    case 16:
                      local = _context3.sent;
                      this.eventsBs.next(local ? local : []);
                      console.log('Fetched events from local storage.');
                      return _context3.abrupt("return", false);

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var events;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_4__["StorageKey"].EVENTS);

                    case 2:
                      events = _context4.sent;

                      if (!Array.isArray(events)) {
                        _context4.next = 8;
                        break;
                      }

                      events.forEach(function (event) {
                        event.start = new Date(event.start);
                        event.end = new Date(event.end);
                      });
                      return _context4.abrupt("return", events);

                    case 8:
                      return _context4.abrupt("return", []);

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getEventById",
          value: function getEventById(id) {
            var event = this.eventsBs.getValue().find(function (event) {
              return event.id === id;
            });
            return event ? event : null;
          }
        }]);

        return EventService;
      }();

      EventService.API_HOST = 'https://api.rickstack.de/events/';

      EventService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      EventService = EventService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], EventService);
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context5.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context5.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context5.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context5.abrupt("return", false);

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map