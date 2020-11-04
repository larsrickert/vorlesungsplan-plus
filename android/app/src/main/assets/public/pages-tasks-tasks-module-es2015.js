(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tasks-tasks-module"],{

/***/ "1t1B":
/*!*****************************************************!*\
  !*** ./src/app/pages/tasks/tasks-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TasksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageRoutingModule", function() { return TasksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.page */ "9WKz");




const routes = [
    {
        path: '',
        component: _tasks_page__WEBPACK_IMPORTED_MODULE_3__["TasksPage"]
    }
];
let TasksPageRoutingModule = class TasksPageRoutingModule {
};
TasksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TasksPageRoutingModule);



/***/ }),

/***/ "9WKz":
/*!*******************************************!*\
  !*** ./src/app/pages/tasks/tasks.page.ts ***!
  \*******************************************/
/*! exports provided: TasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPage", function() { return TasksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tasks_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tasks.page.html */ "YQfj");
/* harmony import */ var _tasks_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.page.scss */ "AT9X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task/task.service */ "sGSV");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "LcQX");
/* harmony import */ var _task_edit_task_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../task-edit/task-edit.page */ "gQxy");








let TasksPage = class TasksPage {
    constructor(taskService, utility, modalController, actionSheetController) {
        this.taskService = taskService;
        this.utility = utility;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.blocks = [];
        this.count = 0;
    }
    ngOnInit() {
        this.taskService.tasks.subscribe((tasks) => {
            this.blocks = this.utility.createBlocks(tasks);
            this.count = tasks.length;
        });
    }
    addTask() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _task_edit_task_edit_page__WEBPACK_IMPORTED_MODULE_7__["TaskEditPage"],
                cssClass: 'app-modal',
            });
            return yield modal.present();
        });
    }
    showShareSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Aufgaben teilen',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'In die Zwischenablage',
                        icon: 'copy-outline',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (this.count > 0) {
                                yield this.taskService.copyToClipboard();
                                this.utility.showToast('Aufgabe(n) in die Zwischenablage kopiert.');
                            }
                            else {
                                this.utility.showToast('Du hast noch keine Aufgaben hinzugefügt.');
                            }
                        }),
                    },
                    {
                        text: 'Als Datei exportieren',
                        icon: 'document-outline',
                        handler: () => {
                            if (this.count > 0) {
                                this.taskService.exportFile();
                            }
                            else {
                                this.utility.showToast('Du hast noch keine Aufgaben hinzugefügt.');
                            }
                        },
                    },
                    {
                        text: 'Importieren',
                        icon: 'download-outline',
                        handler: () => {
                            document.getElementById('importFile').click();
                        },
                    },
                    {
                        text: 'Abbrechen',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => { },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    import(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const imported = yield this.taskService.import(ev.target.files[0]);
            if (imported) {
                this.utility.showToast('Aufgaben erfolgreich importiert.');
            }
            else {
                this.utility.showToast('Beim Import deiner Aufgaben ist ein Fehler aufgetreten.');
            }
        });
    }
};
TasksPage.ctorParameters = () => [
    { type: src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] },
    { type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
TasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tasks',
        template: _raw_loader_tasks_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tasks_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TasksPage);



/***/ }),

/***/ "AT9X":
/*!*********************************************!*\
  !*** ./src/app/pages/tasks/tasks.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".placeholder {\n  margin: 0 10px 20px 10px;\n}\n\n.action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin: 20px 0 20px 0;\n}\n\n.share-btn {\n  --background: rgba(var(--ion-color-primary-rgb), 0.07);\n  --background-hover: rgba(var(--ion-color-primary-rgb), 0.1);\n  --background-hover-opacity: 1;\n  --background-activated: rgba(var(--ion-color-primary-rgb), 0.1);\n  --background-activated-opacity: 1;\n  --color: var(--ion-color-primary);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 7px;\n  --padding-bottom: 7px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.share-btn ion-icon {\n  margin: 0cm;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFza3MvdGFza3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0RBQUE7RUFDQSwyREFBQTtFQUNBLDZCQUFBO0VBQ0EsK0RBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrcy90YXNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhY2Vob2xkZXIge1xyXG4gIG1hcmdpbjogMCAxMHB4IDIwcHggMTBweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLnNoYXJlLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDcpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDdweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwY207XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "YQfj":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Aufgaben ({{ count }})\"></app-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"action-buttons\">\n    <ion-chip color=\"primary\" (click)=\"addTask()\">\n      Neue Aufgabe\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-chip>\n\n    <ion-button shape=\"round\" class=\"share-btn\" (click)=\"showShareSheet()\">\n      <ion-icon name=\"share-outline\"></ion-icon>\n    </ion-button>\n\n    <input\n      type=\"file\"\n      style=\"display: none\"\n      (change)=\"import($event)\"\n      id=\"importFile\"\n    />\n  </div>\n\n  <div *ngIf=\"blocks.length === 0\">\n    <p class=\"placeholder\">\n      Füge Aufgaben hinzu, die du für deine Vorlesungen erledigen musst. So\n      behälst du immer den Überblick über deine Abgabefristen.\n    </p>\n\n    <app-block skeleton=\"task\"></app-block>\n  </div>\n\n  <app-block *ngFor=\"let block of blocks\" [block]=\"block\"></app-block>\n</ion-content>\n");

/***/ }),

/***/ "i854":
/*!*********************************************!*\
  !*** ./src/app/pages/tasks/tasks.module.ts ***!
  \*********************************************/
/*! exports provided: TasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageModule", function() { return TasksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks-routing.module */ "1t1B");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks.page */ "9WKz");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let TasksPageModule = class TasksPageModule {
};
TasksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["TasksPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_tasks_page__WEBPACK_IMPORTED_MODULE_6__["TasksPage"]],
    })
], TasksPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tasks-tasks-module-es2015.js.map