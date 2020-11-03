(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-edit-task-edit-module"],{

/***/ "e19d":
/*!*************************************************************!*\
  !*** ./src/app/pages/task-edit/task-edit-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TaskEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditPageRoutingModule", function() { return TaskEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-edit.page */ "gQxy");




const routes = [
    {
        path: '',
        component: _task_edit_page__WEBPACK_IMPORTED_MODULE_3__["TaskEditPage"]
    }
];
let TaskEditPageRoutingModule = class TaskEditPageRoutingModule {
};
TaskEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskEditPageRoutingModule);



/***/ }),

/***/ "kFKP":
/*!*****************************************************!*\
  !*** ./src/app/pages/task-edit/task-edit.module.ts ***!
  \*****************************************************/
/*! exports provided: TaskEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditPageModule", function() { return TaskEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _task_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-edit-routing.module */ "e19d");
/* harmony import */ var _task_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-edit.page */ "gQxy");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let TaskEditPageModule = class TaskEditPageModule {
};
TaskEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskEditPageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_task_edit_page__WEBPACK_IMPORTED_MODULE_6__["TaskEditPage"]],
    })
], TaskEditPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-task-edit-task-edit-module-es2015.js.map