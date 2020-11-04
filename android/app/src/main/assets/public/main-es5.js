(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\vorlesungsplan-capacitor\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E2f4":
    /*!*****************************************************!*\
      !*** ./src/app/services/storage/storage.service.ts ***!
      \*****************************************************/

    /*! exports provided: StorageService */

    /***/
    function E2f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/interfaces/ILecture */
      "dP1x");
      /* harmony import */


      var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/interfaces/ISetting */
      "N4YS");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utility/utility.service */
      "LcQX");

      var StorageService_1;
      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
          Storage = _capacitor_core__WEBP.Storage,
          LocalNotifications = _capacitor_core__WEBP.LocalNotifications;

      var StorageService = StorageService_1 = /*#__PURE__*/function () {
        function StorageService(http, utility) {
          var _this = this;

          _classCallCheck(this, StorageService);

          this.http = http;
          this.utility = utility; // observables

          this.settingsBs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.settings = this.settingsBs.asObservable();
          this.lecturesBs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.lectures = this.lecturesBs.asObservable(); // init settings

          this.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].SETTINGS).then(function (settings) {
            StorageService_1.INIT_SETTINGS = true;

            _this.settingsBs.next(Array.isArray(settings) ? settings : []);
          }); // init lectures

          this.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES).then(function (lectures) {
            _this.lecturesBs.next(Array.isArray(lectures) ? _this.validateLectures(lectures) : []);
          });
        }

        _createClass(StorageService, [{
          key: "get",
          value: function get(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var ret;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.get({
                        key: key
                      });

                    case 2:
                      ret = _context.sent;
                      return _context.abrupt("return", JSON.parse(ret.value));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "store",
          value: function store(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Storage.set({
                        key: key,
                        value: JSON.stringify(value)
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          } // fetch lectures for set course from api or local storage if api is not available

        }, {
          key: "fetchLectures",
          value: function fetchLectures() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var course, lectures, local;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      course = this.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);

                      if (course) {
                        _context3.next = 4;
                        break;
                      }

                      // no course set, so lectures can't be fetched
                      console.error('Can not fetch lectures for undefined or invalid course.');
                      return _context3.abrupt("return", false);

                    case 4:
                      _context3.prev = 4;
                      _context3.next = 7;
                      return this.http.get("".concat(StorageService_1.API_HOST, "?course=").concat(course.toLowerCase())).toPromise();

                    case 7:
                      lectures = _context3.sent;
                      lectures = this.validateLectures(lectures); // add status to lectures

                      lectures = this.setStatus(this.lecturesBs.getValue(), lectures);
                      this.lecturesBs.next(lectures); // store fetched lectures in local storage and update last updated date

                      _context3.next = 13;
                      return this.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES, lectures);

                    case 13:
                      _context3.next = 15;
                      return this.addSetting({
                        key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTUPDATED,
                        value: new Date(Date.now())
                      });

                    case 15:
                      return _context3.abrupt("return", true);

                    case 18:
                      _context3.prev = 18;
                      _context3.t0 = _context3["catch"](4);
                      console.error('Error while fetching lectures!');
                      console.error(_context3.t0); // try to load lectures from local storage

                      _context3.next = 24;
                      return this.get(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES);

                    case 24:
                      local = _context3.sent;
                      this.lecturesBs.next(local ? this.validateLectures(local) : []);
                      console.log('Fetched lectures from local storage.');
                      return _context3.abrupt("return", false);

                    case 28:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 18]]);
            }));
          } // returns array of all available courses

        }, {
          key: "fetchCourses",
          value: function fetchCourses() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this.http.get("".concat(StorageService_1.API_HOST)).toPromise());

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // ensures that lectures from local storage are valid

        }, {
          key: "validateLectures",
          value: function validateLectures(lectures) {
            lectures.forEach(function (lecture) {
              lecture.end = new Date(lecture.end);
              lecture.start = new Date(lecture.start);
              lecture.lastModified = new Date(lecture.lastModified);
            });
            return lectures;
          }
        }, {
          key: "setStatus",
          value: function setStatus(oldLectures, newLectures) {
            var _this2 = this;

            if (!oldLectures || oldLectures.length === 0) {
              return newLectures;
            } // remove past lectures from old lectures


            oldLectures = oldLectures.filter(function (lecture) {
              return lecture.end.getTime() >= Date.now();
            });
            var checked = []; // check if new lectures were added

            newLectures.forEach(function (newLecture) {
              var lecture = oldLectures.find(function (oldLecture) {
                return _this2.compareLectures(oldLecture, newLecture);
              });

              if (!lecture || lecture.status) {
                // newLecture was added
                newLecture.status = src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].ADDED;
              } else if (lecture.status) {
                newLecture.status = lecture.status;
              }

              checked.push(newLecture);
            }); // checked now contains all new lectures and newly added lectures have status "added"
            // check if old lectures were removed

            oldLectures.forEach(function (oldLecture) {
              var lecture = newLectures.find(function (newLecture) {
                return _this2.compareLectures(newLecture, oldLecture);
              });

              if (!lecture) {
                // oldLecture was removed
                oldLecture.status = src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].REMOVED;
                checked.push(oldLecture);
              }
            });
            return checked.sort(function (a, b) {
              return a.start.getTime() - b.start.getTime();
            });
          } // resets status of all lectures and removes lecture with status "removed"

        }, {
          key: "resetStatus",
          value: function resetStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var lectures, reset;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      lectures = this.lecturesBs.getValue();
                      reset = [];
                      lectures.forEach(function (lecture) {
                        if (lecture.status === src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].ADDED || !lecture.status) {
                          lecture.status = null;
                          reset.push(lecture);
                        }
                      });
                      this.lecturesBs.next(reset);
                      _context5.next = 6;
                      return this.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].LECTURES, reset);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // returns true when both lectures are equal

        }, {
          key: "compareLectures",
          value: function compareLectures(a, b) {
            for (var attr in a) {
              // ignore status, lastModified and uid
              if (attr === 'status' || attr === 'lastModified' || attr === 'uid') {
                continue;
              }

              if (a[attr] instanceof Date && b[attr] instanceof Date) {
                // compare date attribute
                if (a[attr].getTime() !== b[attr].getTime()) {
                  return false;
                }
              } else if (a[attr] !== b[attr]) {
                // attributes are different
                return false;
              }
            } // lectures are equal


            return true;
          } // update or add setting to local storage if its no duplicate

        }, {
          key: "addSetting",
          value: function addSetting(setting) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var settings, storedSetting;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      settings = this.settingsBs.getValue();
                      storedSetting = settings.find(function (storedSetting) {
                        return storedSetting.key === setting.key;
                      });

                      if (storedSetting) {
                        storedSetting.value = setting.value;
                      } else {
                        settings.push(setting);
                      }

                      this.settingsBs.next(settings);
                      _context6.next = 6;
                      return this.store(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["StorageKey"].SETTINGS, settings);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getSetting",
          value: function getSetting(identifier) {
            var settings = this.settingsBs.getValue();
            var match = settings.find(function (setting) {
              return setting.key === identifier;
            });
            return match ? match.value : null;
          } // return true when lectures have changed since last check

        }, {
          key: "checkForChanges",
          value: function checkForChanges(lectures) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var temp, hasChanges, _iterator, _step, lecture, currentCourse, settingValue, lastChecked, lastLectures, checkedCourse, h1, h2, _settingValue;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(lectures.length === 0)) {
                        _context7.next = 2;
                        break;
                      }

                      return _context7.abrupt("return", false);

                    case 2:
                      // copy lectures (avoids reference problems when modifing those lectures)
                      temp = [];
                      lectures.forEach(function (lec) {
                        temp.push(Object.assign({}, lec));
                      });
                      lectures = temp;
                      hasChanges = false; // check if new fetched lectures have changes

                      _iterator = _createForOfIteratorHelper(lectures);
                      _context7.prev = 7;

                      _iterator.s();

                    case 9:
                      if ((_step = _iterator.n()).done) {
                        _context7.next = 16;
                        break;
                      }

                      lecture = _step.value;

                      if (!lecture.status) {
                        _context7.next = 14;
                        break;
                      }

                      hasChanges = true;
                      return _context7.abrupt("break", 16);

                    case 14:
                      _context7.next = 9;
                      break;

                    case 16:
                      _context7.next = 21;
                      break;

                    case 18:
                      _context7.prev = 18;
                      _context7.t0 = _context7["catch"](7);

                      _iterator.e(_context7.t0);

                    case 21:
                      _context7.prev = 21;

                      _iterator.f();

                      return _context7.finish(21);

                    case 24:
                      currentCourse = this.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);
                      settingValue = {
                        course: currentCourse,
                        lectures: JSON.stringify(lectures)
                      }; // store currently checked lectures to local storage

                      _context7.next = 28;
                      return this.addSetting({
                        key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTCHANGENOTIFICATION,
                        value: settingValue
                      });

                    case 28:
                      if (hasChanges) {
                        _context7.next = 30;
                        break;
                      }

                      return _context7.abrupt("return", false);

                    case 30:
                      lastChecked = this.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTCHANGENOTIFICATION); // last checked is unset

                      if (lastChecked) {
                        _context7.next = 33;
                        break;
                      }

                      return _context7.abrupt("return", false);

                    case 33:
                      lastLectures = this.validateLectures(JSON.parse(lastChecked.lectures));
                      checkedCourse = lastChecked.course; // last checked lectures are empty or last checked course is different from current course

                      if (!(lastChecked.lectures.length === 0 || checkedCourse !== currentCourse)) {
                        _context7.next = 37;
                        break;
                      }

                      return _context7.abrupt("return", false);

                    case 37:
                      // remove old lectures and status
                      lastLectures = lastLectures.filter(function (lecture) {
                        lecture.status = null;
                        return lecture.end.getTime() > Date.now();
                      });
                      lectures = lectures.filter(function (lecture) {
                        lecture.status = null;
                        return lecture.end.getTime() > Date.now();
                      });
                      h1 = this.createHash(JSON.stringify(lectures));
                      h2 = this.createHash(JSON.stringify(lastLectures)); // lectures have changed sinced last check
                      // send push notification

                      if (!(h1 !== h2)) {
                        _context7.next = 46;
                        break;
                      }

                      _settingValue = {
                        course: currentCourse,
                        lectures: JSON.stringify(lectures)
                      }; // store currently checked lectures to local storage

                      _context7.next = 45;
                      return this.addSetting({
                        key: src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTCHANGENOTIFICATION,
                        value: _settingValue
                      });

                    case 45:
                      return _context7.abrupt("return", true);

                    case 46:
                      return _context7.abrupt("return", false);

                    case 47:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[7, 18, 21, 24]]);
            }));
          }
        }, {
          key: "createHash",
          value: function createHash(str) {
            var hash = 0;
            var i;
            var chr;

            for (i = 0; i < str.length; i++) {
              chr = str.charCodeAt(i);
              hash = (hash << 5) - hash + chr;
              hash |= 0; // Convert to 32bit integer
            }

            return hash;
          }
        }]);

        return StorageService;
      }();

      StorageService.API_HOST = 'https://api.rickstack.de/';
      StorageService.INIT_SETTINGS = false;

      StorageService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]
        }];
      };

      StorageService = StorageService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "LcQX":
    /*!*****************************************************!*\
      !*** ./src/app/services/utility/utility.service.ts ***!
      \*****************************************************/

    /*! exports provided: UtilityService */

    /***/
    function LcQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return UtilityService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications;

      var UtilityService = /*#__PURE__*/function () {
        function UtilityService(toastController, loadingController) {
          _classCallCheck(this, UtilityService);

          this.toastController = toastController;
          this.loadingController = loadingController;
        } // send a push notification to the user if permission ist granted


        _createClass(UtilityService, [{
          key: "sendPushNotification",
          value: function sendPushNotification(title, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return LocalNotifications.requestPermission();

                    case 2:
                      result = _context8.sent;

                      if (!result.granted) {
                        _context8.next = 7;
                        break;
                      }

                      _context8.next = 6;
                      return LocalNotifications.schedule({
                        notifications: [{
                          title: title,
                          body: message,
                          id: 1,
                          sound: null,
                          attachments: null,
                          actionTypeId: '',
                          extra: null
                        }]
                      });

                    case 6:
                      return _context8.abrupt("return", true);

                    case 7:
                      return _context8.abrupt("return", false);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          } // show toast message at the bottom of the screen

        }, {
          key: "showToast",
          value: function showToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alreadyDisplaying, toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastController.getTop();

                    case 2:
                      alreadyDisplaying = _context9.sent;

                      if (alreadyDisplaying) {
                        _context9.next = 9;
                        break;
                      }

                      _context9.next = 6;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 6:
                      toast = _context9.sent;
                      _context9.next = 9;
                      return toast.present();

                    case 9:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } // show loading in the middle of the screen (blocks user input)

        }, {
          key: "showLoading",
          value: function showLoading(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var alreadyDisplaying, loading;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.loadingController.getTop();

                    case 2:
                      alreadyDisplaying = _context10.sent;

                      if (alreadyDisplaying) {
                        _context10.next = 12;
                        break;
                      }

                      _context10.next = 6;
                      return this.loadingController.create({
                        cssClass: 'app-loading',
                        message: message
                      });

                    case 6:
                      loading = _context10.sent;
                      _context10.next = 9;
                      return loading.present();

                    case 9:
                      return _context10.abrupt("return", loading);

                    case 12:
                      return _context10.abrupt("return", null);

                    case 13:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "createBlocks",
          value: function createBlocks(items) {
            var blocks = [];
            var newBlock = {
              date: null,
              items: []
            };
            var currentDate = this.stripTimeFromDate(new Date(Date.now())); // check each lectures if it is for current date and then assign it to the new block

            var _iterator2 = _createForOfIteratorHelper(items),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;

                if (this.isSameDay(currentDate, item.start)) {
                  // lecture is for current block
                  if (!newBlock.date) {
                    // new block
                    newBlock.date = this.stripTimeFromDate(currentDate);
                  }

                  newBlock.items.push(item);
                } else {
                  // new day / block
                  if (newBlock.date && newBlock.items.length > 0) {
                    blocks.push(newBlock);
                  } // reset


                  currentDate = this.stripTimeFromDate(item.start);
                  newBlock = {
                    date: currentDate,
                    items: []
                  };
                  newBlock.items.push(item);
                }
              } // add last block

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (newBlock.date && newBlock.items.length > 0) {
              blocks.push(newBlock);
            }

            return blocks;
          } // returns true if two days are equal, only checks year, month and day

        }, {
          key: "isSameDay",
          value: function isSameDay(a, b) {
            return this.stripTimeFromDate(a).getTime() === this.stripTimeFromDate(b).getTime();
          } // unifies date to year, month, day only (for comparrison), optional days can be added to the date (a.e. 1 returns date for tomorrow)

        }, {
          key: "stripTimeFromDate",
          value: function stripTimeFromDate(date, addDays) {
            var days = addDays ? date.getDate() + addDays : date.getDate();
            return new Date(date.getFullYear(), date.getMonth(), days, 0, 0, 0, 0);
          } // returns true if lecture is an exam

        }, {
          key: "isExam",
          value: function isExam(lecture) {
            return lecture.name.toLowerCase().includes('klausur');
          }
        }, {
          key: "hasChanges",
          value: function hasChanges(lectures) {
            var _iterator3 = _createForOfIteratorHelper(lectures),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var lecture = _step3.value;

                if (lecture.status) {
                  return true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return false;
          }
        }]);

        return UtilityService;
      }();

      UtilityService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilityService);
      /***/
    },

    /***/
    "N4YS":
    /*!****************************************!*\
      !*** ./src/app/interfaces/ISetting.ts ***!
      \****************************************/

    /*! exports provided: SettingKey, StorageKey */

    /***/
    function N4YS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingKey", function () {
        return SettingKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageKey", function () {
        return StorageKey;
      }); // keys to identify setting


      var SettingKey;

      (function (SettingKey) {
        SettingKey["DARKMODE"] = "darkMode";
        SettingKey["LASTUPDATED"] = "lastUpdated";
        SettingKey["COURSE"] = "course";
        SettingKey["INTRO"] = "intro";
        SettingKey["LASTCHANGENOTIFICATION"] = "lastChangeNotification";
      })(SettingKey || (SettingKey = {})); // keys for local storage


      var StorageKey;

      (function (StorageKey) {
        StorageKey["SETTINGS"] = "settings";
        StorageKey["LECTURES"] = "lectures";
        StorageKey["TASKS"] = "tasks";
        StorageKey["EVENTS"] = "events";
      })(StorageKey || (StorageKey = {}));
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./interfaces/ISetting */
      "N4YS");
      /* harmony import */


      var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/storage/storage.service */
      "E2f4");

      var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"],
          SplashScreen = _capacitor_core__WEBP2.SplashScreen,
          StatusBar = _capacitor_core__WEBP2.StatusBar,
          Keyboard = _capacitor_core__WEBP2.Keyboard,
          Browser = _capacitor_core__WEBP2.Browser;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, storage) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.storage = storage;
          this.navItems = [{
            title: 'Vorlesungsplan',
            url: '/timetable',
            icon: 'school-outline'
          }, {
            title: 'Veranstaltungen',
            url: '/events',
            icon: 'calendar-outline'
          }, {
            title: 'Aufgaben',
            url: '/tasks',
            icon: 'file-tray-full-outline'
          }];
          this.bottomNavItems = [{
            title: 'Installation',
            url: '/installation',
            icon: 'download-outline'
          }, {
            title: 'Einstellungen',
            url: '/settings',
            icon: 'cog-outline'
          }];
          this.links = [{
            title: 'INF19 Wiki',
            href: 'https://wiki.siphalor.de/',
            image: '/assets/images/logo-siphalor-wiki.png'
          }, {
            title: 'INF19 OneDrive',
            desc: 'Du musst dich mit deinem DHBW Microsoft-Konto anmelden',
            href: 'https://lehremosbachdhbwde-my.sharepoint.com/:f:/g/personal/lar_rickert_19_lehre_mosbach_dhbw_de/Eii8oVgD33pDovLSbxYxsk0BAVJDy5DMMEGpZy-A5xVZ1Q?e=h6NzDz',
            image: '/assets/images/logo-onedrive.svg'
          }];
          this.showLinks = false;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            // set theme listeners (dark / light mode)
            this.setTheme(); // set text color of status bar (clock, battery percentage etc.)
            // StatusBarStyle.Dark = white text , StatusBarStyle.Light = dark text
            // https://capacitorjs.com/docs/apis/status-bar

            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('StatusBar')) {
              StatusBar.setStyle({
                style: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["StatusBarStyle"].Dark
              });
            } // hide splash screen automatically when app is ready to be used
            // https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen


            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('SplashScreen')) {
              SplashScreen.hide();
            } // remove "installation" nav item when running native


            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isNative) {
              this.bottomNavItems = this.bottomNavItems.filter(function (item) {
                return item.url !== '/installation';
              });
            } // redirect to intro when no course is set
            // watch whether to hide links or not


            this.storage.settings.subscribe(function () {
              if (_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"].INIT_SETTINGS) {
                var course = _this3.storage.getSetting(_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].COURSE);

                if (!_this3.storage.getSetting(_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].INTRO) && !course) {
                  _this3.router.navigate(['/intro']);
                }

                _this3.showLinks = course && course.includes('INF19');
              }
            }); // fetch lectures every 10 minutes

            if (!this.autoFetch) {
              this.autoFetch = setInterval(function () {
                _this3.storage.fetchLectures();
              }, 1000 * 60 * 10);
            }
          } // call once to enable auto changing of theme (dark / light)
          // user preference can be added, a.e. theme depending on a setting

        }, {
          key: "setTheme",
          value: function setTheme() {
            var _this4 = this;

            this.storage.settings.subscribe(function (settings) {
              // get reference to users device dark mode setting
              if (!_this4.darkModeUserPreference) {
                _this4.darkModeUserPreference = window.matchMedia('(prefers-color-scheme: dark)');
              } // set inital theme to user device preference, will eventuelly be changed to user selection (may prevent visual artifacts)


              _this4.toggleDarkTheme(_this4.darkModeUserPreference.matches); // remove any theme listeners


              if (_this4.setThemeFunction) {
                _this4.darkModeUserPreference.removeEventListener('change', _this4.setThemeFunction);

                _this4.setThemeFunction = null;
              } // change value of customUserSetting to change theme to user selection
              // true = dark mode
              // false = light mode
              // null = auto (based on device settings)


              var customUserSetting = _this4.storage.getSetting(_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_6__["SettingKey"].DARKMODE);

              if (customUserSetting === null) {
                // auto dark mode detection (based on device settings)
                if (!_this4.setThemeFunction) {
                  // create function that toggles theme
                  _this4.setThemeFunction = function toggleDarkTheme(e) {
                    document.body.classList.toggle('dark', e.matches);
                  };
                } // apply app theme (dark / light) to auto deteced value


                _this4.toggleDarkTheme(_this4.darkModeUserPreference.matches); // add listener for changes to user device theme setting


                _this4.darkModeUserPreference.addEventListener('change', _this4.setThemeFunction);
              } else if (!customUserSetting) {
                // enable static light mode
                _this4.toggleDarkTheme(false);
              } else {
                // enable static dark mode
                _this4.toggleDarkTheme(true);
              }
            });
          } // apply dark / light mode to app

        }, {
          key: "toggleDarkTheme",
          value: function toggleDarkTheme(dark) {
            document.body.classList.toggle('dark', dark);
            this.toggleKeyboardStyle(dark);
          } // change keyboard color

        }, {
          key: "toggleKeyboardStyle",
          value: function toggleKeyboardStyle(dark) {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('Keyboard')) {
              var style = dark ? _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["KeyboardStyle"].Dark : _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["KeyboardStyle"].Light;
              Keyboard.setStyle({
                style: style
              });
            }
          }
        }, {
          key: "navigate",
          value: function navigate(url) {
            Browser.open({
              url: url
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <!-- main navigation -->\n        <ion-list id=\"mainNav\">\n          <!-- app details -->\n          <div class=\"app-details\">\n            <img class=\"logo\" src=\"../assets/images/logo.svg\" alt=\"Logo\" />\n            <div>\n              <ion-label class=\"app-details__title\">Vorlesungsplan+</ion-label>\n              <ion-note>DHBW Mosbach</ion-note>\n            </div>\n          </div>\n\n          <!-- navigation -->\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of navItems\">\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[page.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.item--selected]=\"page.url === router.url\"\n            >\n              <ion-icon slot=\"start\" [name]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- bottom navigation -->\n        <ion-list>\n          <ion-note>App</ion-note>\n\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let page of bottomNavItems\"\n          >\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[page.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.item--selected]=\"page.url === router.url\"\n            >\n              <ion-icon slot=\"start\" [name]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- links -->\n        <details class=\"showLinks\" *ngIf=\"showLinks\">\n          <summary>Verknüpfungen anzeigen</summary>\n\n          <ng-container *ngFor=\"let link of links\">\n            <ion-item\n              class=\"link\"\n              lines=\"none\"\n              detail=\"false\"\n              (click)=\"navigate(link.href)\"\n            >\n              <img\n                class=\"link__image\"\n                [src]=\"link.image\"\n                [alt]=\"link.title\"\n                [title]=\"link.title\"\n              />\n              <ion-label>{{ link.title }}</ion-label>\n            </ion-item>\n            <div *ngIf=\"link.desc\" class=\"link__desc\">\n              <ion-icon\n                class=\"link__desc__icon\"\n                name=\"information-circle-outline\"\n              ></ion-icon>\n              <ion-text>{{ link.desc }}</ion-text>\n            </div>\n          </ng-container>\n        </details>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/locales/de */
      "VLs4");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10___default.a, 'de');

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'de'
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "dP1x":
    /*!****************************************!*\
      !*** ./src/app/interfaces/ILecture.ts ***!
      \****************************************/

    /*! exports provided: LectureStatus */

    /***/
    function dP1x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LectureStatus", function () {
        return LectureStatus;
      });

      var LectureStatus;

      (function (LectureStatus) {
        LectureStatus["ADDED"] = "added";
        LectureStatus["REMOVED"] = "removed";
      })(LectureStatus || (LectureStatus = {}));
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: '/timetable',
        pathMatch: 'full'
      }, {
        path: 'timetable',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-timetable-timetable-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-timetable-timetable-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/timetable/timetable.module */
          "QUEe")).then(function (m) {
            return m.TimetablePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-settings-settings-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "yPrK")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'course-select',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-course-select-course-select-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-course-select-course-select-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/course-select/course-select.module */
          "/lGa")).then(function (m) {
            return m.CourseSelectPageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-events-events-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/events/events.module */
          "Obr4")).then(function (m) {
            return m.EventsPageModule;
          });
        }
      }, {
        path: 'event-details/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-event-details-event-details-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-event-details-event-details-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/event-details/event-details.module */
          "T4q2")).then(function (m) {
            return m.EventDetailsPageModule;
          });
        }
      }, {
        path: 'tasks',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tasks-tasks-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-tasks-tasks-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tasks/tasks.module */
          "i854")).then(function (m) {
            return m.TasksPageModule;
          });
        }
      }, {
        path: 'task-edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-task-edit-task-edit-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-task-edit-task-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/task-edit/task-edit.module */
          "kFKP")).then(function (m) {
            return m.TaskEditPageModule;
          });
        }
      }, {
        path: 'installation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-installation-installation-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-installation-installation-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/installation/installation.module */
          "Nnce")).then(function (m) {
            return m.InstallationPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-about-about-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-about-about-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "UoYK")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'report',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-report-report-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("pages-report-report-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/report/report.module */
          "Q0Id")).then(function (m) {
            return m.ReportPageModule;
          });
        }
      }, {
        path: 'intro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-intro-intro-module */
          [__webpack_require__.e("default~pages-about-about-module~pages-course-select-course-select-module~pages-event-details-event-~1f79c393"), __webpack_require__.e("common"), __webpack_require__.e("pages-intro-intro-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/intro/intro.module */
          "a+tW")).then(function (m) {
            return m.IntroPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-menu .logo {\n  max-height: 60px;\n  max-width: 50px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-left: 10px;\n  margin-right: 10px;\n}\nion-menu .app-details {\n  margin-top: constant(safe-area-inset-top);\n  margin-top: env(safe-area-inset-top);\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n}\nion-menu .app-details__title {\n  display: block;\n  padding-left: 10px;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 768px) {\n  ion-menu .app-details__title {\n    font-size: 20px;\n  }\n}\nion-menu ion-note {\n  padding-left: 10px;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-menu #mainNav {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  margin-bottom: 20px;\n}\nion-menu ion-item {\n  border-radius: var(--app-border-radius);\n  margin: 5px 0px;\n  --padding-start: 10px;\n}\nion-menu ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu .item--selected {\n  --color: var(--ion-color-primary);\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu .item--selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu .showLinks {\n  margin-top: 20px;\n  margin-left: 10px;\n}\nion-menu .showLinks summary {\n  outline: 0;\n  cursor: pointer;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\nion-menu .showLinks .link {\n  cursor: pointer;\n}\nion-menu .showLinks .link__image {\n  max-height: 30px;\n  max-width: 30px;\n  margin-right: 10px;\n}\nion-menu .showLinks .link__desc {\n  margin-left: 12px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: var(--ion-color-dark);\n}\nion-menu .showLinks .link__desc__icon {\n  font-size: 18px;\n  min-width: 18px;\n  margin-right: 10px;\n}\nion-menu .showLinks .link:hover {\n  --background: rgba(var(--ion-color-medium-rgb), 0.07);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0U7RUFFRSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQU9NO0VBUEY7SUFRSSxlQUFBO0VBSk47QUFDRjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFQSjtBQVVFO0VBQ0UsMkRBQUE7RUFDQSxtQkFBQTtBQVJKO0FBWUU7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVZKO0FBWUk7RUFDRSxjQUFBO0FBVk47QUFjRTtFQUNFLGlDQUFBO0VBQ0Esc0RBQUE7QUFaSjtBQWNJO0VBQ0UsK0JBQUE7QUFaTjtBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFkSjtBQWdCSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxlQUFBO0FBZk47QUFpQk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFoQlI7QUFrQlE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBaEJWO0FBcUJJO0VBQ0UscURBQUE7QUFuQk4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAvLyB3cmFwcGVyIHdpdGggbG9nbywgYXBwIHRpdGxlIGFuZCBzdWJ0aXRsZVxuICAuYXBwLWRldGFpbHMge1xuICAgIC8vIG5vdGNoZXNcbiAgICBtYXJnaW4tdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICBtYXJnaW4tdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwIHN1YnRpdGxlIGFuZCBib3R0b20gbmF2IHRpdGxlXG4gIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgfVxuXG4gICNtYWluTmF2IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLy8gbmF2IGl0ZW1zXG4gIGlvbi1pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYm9yZGVyLXJhZGl1cyk7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjNjE2ZTdlO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLS1zZWxlY3RlZCB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLnNob3dMaW5rcyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgIHN1bW1hcnkge1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmX19pbWFnZSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmX19kZXNjIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgICAmX19pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5saW5rOmhvdmVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMDcpO1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map