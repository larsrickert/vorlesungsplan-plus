(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tasks-tasks-module"], {
    /***/
    "1t1B":
    /*!*****************************************************!*\
      !*** ./src/app/pages/tasks/tasks-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: TasksPageRoutingModule */

    /***/
    function t1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksPageRoutingModule", function () {
        return TasksPageRoutingModule;
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


      var _tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tasks.page */
      "9WKz");

      var routes = [{
        path: '',
        component: _tasks_page__WEBPACK_IMPORTED_MODULE_3__["TasksPage"]
      }];

      var TasksPageRoutingModule = function TasksPageRoutingModule() {
        _classCallCheck(this, TasksPageRoutingModule);
      };

      TasksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TasksPageRoutingModule);
      /***/
    },

    /***/
    "9WKz":
    /*!*******************************************!*\
      !*** ./src/app/pages/tasks/tasks.page.ts ***!
      \*******************************************/

    /*! exports provided: TasksPage */

    /***/
    function WKz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksPage", function () {
        return TasksPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tasks_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tasks.page.html */
      "YQfj");
      /* harmony import */


      var _tasks_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tasks.page.scss */
      "AT9X");
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
      /* harmony import */


      var _task_edit_task_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../task-edit/task-edit.page */
      "gQxy");

      var TasksPage = /*#__PURE__*/function () {
        function TasksPage(taskService, utility, modalController, actionSheetController) {
          _classCallCheck(this, TasksPage);

          this.taskService = taskService;
          this.utility = utility;
          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.blocks = [];
          this.count = 0;
        }

        _createClass(TasksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.taskService.tasks.subscribe(function (tasks) {
              _this.blocks = _this.utility.createBlocks(tasks);
              _this.count = tasks.length;
            });
          }
        }, {
          key: "addTask",
          value: function addTask() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _task_edit_task_edit_page__WEBPACK_IMPORTED_MODULE_7__["TaskEditPage"],
                        cssClass: 'app-modal'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showShareSheet",
          value: function showShareSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: 'Aufgaben teilen',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'In die Zwischenablage',
                          icon: 'copy-outline',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      if (!(this.count > 0)) {
                                        _context2.next = 6;
                                        break;
                                      }

                                      _context2.next = 3;
                                      return this.taskService.copyToClipboard();

                                    case 3:
                                      this.utility.showToast('Aufgabe(n) in die Zwischenablage kopiert.');
                                      _context2.next = 7;
                                      break;

                                    case 6:
                                      this.utility.showToast('Du hast noch keine Aufgaben hinzugefügt.');

                                    case 7:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2, this);
                            }));
                          }
                        }, {
                          text: 'Als Datei exportieren',
                          icon: 'document-outline',
                          handler: function handler() {
                            if (_this2.count > 0) {
                              _this2.taskService.exportFile();
                            } else {
                              _this2.utility.showToast('Du hast noch keine Aufgaben hinzugefügt.');
                            }
                          }
                        }, {
                          text: 'Importieren',
                          icon: 'download-outline',
                          handler: function handler() {
                            document.getElementById('importFile').click();
                          }
                        }, {
                          text: 'Abbrechen',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "import",
          value: function _import(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var imported;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.taskService["import"](ev.target.files[0]);

                    case 2:
                      imported = _context4.sent;

                      if (imported) {
                        this.utility.showToast('Aufgaben erfolgreich importiert.');
                      } else {
                        this.utility.showToast('Beim Import deiner Aufgaben ist ein Fehler aufgetreten.');
                      }

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return TasksPage;
      }();

      TasksPage.ctorParameters = function () {
        return [{
          type: src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }];
      };

      TasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tasks',
        template: _raw_loader_tasks_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tasks_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TasksPage);
      /***/
    },

    /***/
    "AT9X":
    /*!*********************************************!*\
      !*** ./src/app/pages/tasks/tasks.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function AT9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".placeholder {\n  margin: 0 10px 20px 10px;\n}\n\n.action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin: 20px 0 20px 0;\n}\n\n.share-btn ion-icon {\n  margin: 0cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFza3MvdGFza3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdFO0VBQ0UsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFza3MvdGFza3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luOiAwIDEwcHggMjBweCAxMHB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLnNoYXJlLWJ0biB7XG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW46IDBjbTtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "YQfj":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function YQfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header title=\"Aufgaben ({{ count }})\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"action-buttons\">\n    <ion-chip color=\"primary\" (click)=\"addTask()\">\n      Neue Aufgabe\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-chip>\n\n    <ion-chip class=\"share-btn\" color=\"primary\" (click)=\"showShareSheet()\">\n      <ion-icon name=\"share-outline\"></ion-icon>\n    </ion-chip>\n\n    <input\n      type=\"file\"\n      style=\"display: none\"\n      (change)=\"import($event)\"\n      id=\"importFile\"\n    />\n  </div>\n\n  <div *ngIf=\"blocks.length === 0\">\n    <p class=\"placeholder\">\n      Füge Aufgaben hinzu, die du für deine Vorlesungen erledigen musst. So\n      behälst du immer den Überblick über deine Abgabefristen.\n    </p>\n\n    <app-block skeleton=\"task\"></app-block>\n  </div>\n\n  <app-block *ngFor=\"let block of blocks\" [block]=\"block\"></app-block>\n</ion-content>\n";
      /***/
    },

    /***/
    "i854":
    /*!*********************************************!*\
      !*** ./src/app/pages/tasks/tasks.module.ts ***!
      \*********************************************/

    /*! exports provided: TasksPageModule */

    /***/
    function i854(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksPageModule", function () {
        return TasksPageModule;
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


      var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tasks-routing.module */
      "1t1B");
      /* harmony import */


      var _tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tasks.page */
      "9WKz");
      /* harmony import */


      var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/shared/shared.module */
      "FpXt");

      var TasksPageModule = function TasksPageModule() {
        _classCallCheck(this, TasksPageModule);
      };

      TasksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["TasksPageRoutingModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_tasks_page__WEBPACK_IMPORTED_MODULE_6__["TasksPage"]]
      })], TasksPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tasks-tasks-module-es5.js.map