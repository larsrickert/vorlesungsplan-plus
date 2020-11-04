(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timetable-timetable-module"],{

/***/ "3dNw":
/*!*************************************************************!*\
  !*** ./src/app/pages/timetable/timetable-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TimetablePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetablePageRoutingModule", function() { return TimetablePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timetable.page */ "Ogwh");




const routes = [
    {
        path: '',
        component: _timetable_page__WEBPACK_IMPORTED_MODULE_3__["TimetablePage"]
    }
];
let TimetablePageRoutingModule = class TimetablePageRoutingModule {
};
TimetablePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TimetablePageRoutingModule);



/***/ }),

/***/ "Ogwh":
/*!***************************************************!*\
  !*** ./src/app/pages/timetable/timetable.page.ts ***!
  \***************************************************/
/*! exports provided: TimetablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetablePage", function() { return TimetablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./timetable.page.html */ "oA7F");
/* harmony import */ var _timetable_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timetable.page.scss */ "bR7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/ILecture */ "dP1x");
/* harmony import */ var src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/ISetting */ "N4YS");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "LcQX");








let TimetablePage = class TimetablePage {
    constructor(utility, storage) {
        this.utility = utility;
        this.storage = storage;
        this.blocks = [];
        this.displayedBlocks = [];
        this.lastUpdated = null;
        this.course = '';
        // 0: lectures
        // 1: exams
        // 2: changes
        // 3: presence
        this.counts = [0, 0, 0, 0];
        this.hasChanges = false;
    }
    ngOnInit() {
        const course = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].COURSE);
        this.course = course ? course : '';
        this.storage.lectures.subscribe((lectures) => {
            this.blocks = this.utility.createBlocks(lectures);
            this.displayedBlocks = this.blocks;
            this.lastUpdated = this.storage.getSetting(src_app_interfaces_ISetting__WEBPACK_IMPORTED_MODULE_5__["SettingKey"].LASTUPDATED);
            this.count();
        });
        this.storage.fetchLectures();
    }
    refresh(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fetched = yield this.storage.fetchLectures();
            ev.target.complete();
            if (fetched) {
                this.utility.showToast('Vorlesungen aktualisiert.');
            }
            else {
                this.utility.showToast('Die Vorlesungen konnten nicht aktualisiert werden. Bitte überprüfe deine Internetverbindung und Kurseinstellungen.');
            }
        });
    }
    // sets current displayed blocks to blocks that contain the searched value
    search(ev) {
        let searchedValue = ev.target.value.toLowerCase();
        if (searchedValue === '') {
            // display blocks of active segment when search is canceled or cleared
            return this.setDisplayedBlocksToSegment();
        }
        else if (searchedValue.trim() === '') {
            // do nothing when empty search input is entered
            return;
        }
        searchedValue = searchedValue.trim();
        this.segment.value = 'all';
        const results = [];
        // add all blocks to results where lectures contain searched value in name, lecturer or room
        this.blocks.forEach((block) => {
            const matchingLectures = block.items.filter((lecture) => {
                let match = false;
                if (lecture.name.toLowerCase().includes(searchedValue)) {
                    match = true;
                }
                if (lecture.lecturer &&
                    lecture.lecturer.toLowerCase().includes(searchedValue)) {
                    match = true;
                }
                if (lecture.room &&
                    lecture.room.toLowerCase().includes(searchedValue)) {
                    match = true;
                }
                return match;
            });
            if (matchingLectures.length > 0) {
                results.push({ date: block.date, items: matchingLectures });
            }
        });
        this.displayedBlocks = results;
    }
    // sets current displayed blocks depending on the segment value
    setDisplayedBlocksToSegment() {
        if (!this.segment || this.segment.value === 'all') {
            // display all blocks
            this.displayedBlocks = this.blocks;
            return;
        }
        let blocksToShow = [];
        switch (this.segment.value) {
            case 'exams':
                // only display blocks that contain exams
                blocksToShow = [];
                this.blocks.forEach((block) => {
                    const matches = block.items.filter((item) => {
                        return this.utility.isExam(item) && item.status !== 'removed';
                    });
                    if (matches.length > 0) {
                        blocksToShow.push({ date: block.date, items: matches });
                    }
                });
                break;
            case 'changes':
                // only display lectures that have changes (have a status)
                blocksToShow = [];
                this.blocks.forEach((block) => {
                    const matches = block.items.filter((item) => {
                        return item.status;
                    });
                    if (matches.length > 0) {
                        blocksToShow.push({ date: block.date, items: matches });
                    }
                });
                break;
            case 'presence':
                // only display lectures that have a room
                blocksToShow = [];
                this.blocks.forEach((block) => {
                    const matches = block.items.filter((item) => {
                        return item.room;
                    });
                    if (matches.length > 0) {
                        blocksToShow.push({ date: block.date, items: matches });
                    }
                });
                break;
            default:
                // display all blocks
                blocksToShow = this.blocks;
                break;
        }
        this.displayedBlocks = blocksToShow;
    }
    count() {
        const counts = [0, 0, 0, 0];
        // 0: lectures
        // 1: exams
        // 2: changes
        // 3: presence
        this.blocks.forEach((block) => {
            block.items.forEach((lecture) => {
                if (this.utility.isExam(lecture) &&
                    lecture.status !== src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].REMOVED) {
                    counts[1]++;
                }
                if (lecture.status !== src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].REMOVED) {
                    counts[0]++;
                }
                if (lecture.status) {
                    counts[2]++;
                }
                if (lecture.room && lecture.status !== src_app_interfaces_ILecture__WEBPACK_IMPORTED_MODULE_4__["LectureStatus"].REMOVED) {
                    counts[3]++;
                }
            });
        });
        this.counts = counts;
        this.hasChanges = counts[2] > 0;
        if (!this.hasChanges && this.segment && this.segment.value === 'changes') {
            this.segment.value = 'all';
        }
    }
};
TimetablePage.ctorParameters = () => [
    { type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
TimetablePage.propDecorators = {
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['segment',] }],
    searchBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchBar',] }]
};
TimetablePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-timetable',
        template: _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_timetable_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TimetablePage);



/***/ }),

/***/ "QUEe":
/*!*****************************************************!*\
  !*** ./src/app/pages/timetable/timetable.module.ts ***!
  \*****************************************************/
/*! exports provided: TimetablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetablePageModule", function() { return TimetablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _timetable_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timetable-routing.module */ "3dNw");
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timetable.page */ "Ogwh");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");








let TimetablePageModule = class TimetablePageModule {
};
TimetablePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _timetable_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimetablePageRoutingModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_timetable_page__WEBPACK_IMPORTED_MODULE_6__["TimetablePage"]],
    })
], TimetablePageModule);



/***/ }),

/***/ "bR7M":
/*!*****************************************************!*\
  !*** ./src/app/pages/timetable/timetable.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-bottom: 16px;\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-segment {\n  margin-bottom: 40px;\n}\n\n.examInfo__wrapper {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary);\n  margin-bottom: 20px;\n  outline: 0;\n  cursor: pointer;\n}\n\n.examInfo__wrapper ion-icon {\n  font-size: 30px;\n  margin-right: 10px;\n  min-width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZXRhYmxlL3RpbWV0YWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGltZXRhYmxlL3RpbWV0YWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5leGFtSW5mb19fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "oA7F":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timetable/timetable.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Vorlesungsplan {{ course }}\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-outline\"\n      pullingText=\"zuletzt aktualisiert: {{ lastUpdated | date:'medium' }}\"\n      refreshingSpinner=\"crescent\"\n      refreshingText=\"Vorlesungen werden geladen...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- searchbar -->\n  <ion-searchbar\n    animated\n    showCancelButton=\"focus\"\n    mode=\"ios\"\n    placeholder=\"Suchen...\"\n    cancelButtonText=\"Abbrechen\"\n    (ionChange)=\"search($event)\"\n    #searchBar\n  ></ion-searchbar>\n\n  <div\n    class=\"examInfo__wrapper\"\n    *ngIf=\"segment && segment.value === 'exams'\"\n    routerLink=\"/report\"\n  >\n    <ion-icon name=\"information-circle-outline\"></ion-icon>\n    <span\n      >Falsche oder fehlende Klausur gefunden? Klicke hier, um die\n      Klausurerkennung zu verbessern.</span\n    >\n  </div>\n\n  <!-- Segment -->\n  <ion-segment\n    class=\"segment\"\n    scrollable\n    (ionChange)=\"setDisplayedBlocksToSegment()\"\n    mode=\"ios\"\n    #segment\n    value=\"all\"\n  >\n    <ion-segment-button value=\"changes\" *ngIf=\"hasChanges\">\n      <ion-label>Änderungen ({{ counts[2] }})</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"all\">\n      <ion-label>Alle ({{ counts[0] }})</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"presence\" *ngIf=\"counts[3] !== counts[0]\">\n      <ion-label>Präsenz ({{ counts[3] }})</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"exams\">\n      <ion-label>Klausuren ({{ counts[1] }})</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- No results for search message -->\n  <div\n    *ngIf=\"displayedBlocks.length === 0 && course && blocks.length > 0\"\n    class=\"wrapper\"\n  >\n    Deine Suche hat keine Treffer ergeben.\n  </div>\n\n  <!-- No lectures message -->\n  <div *ngIf=\"course && blocks.length === 0\" class=\"wrapper\">\n    Für den Kurs {{ course }} sind keine Vorlesungen eingetragen.\n  </div>\n\n  <div\n    class=\"warning warning--clickable\"\n    *ngIf=\"!course\"\n    routerLink=\"/settings\"\n  >\n    <ion-icon name=\"alert-circle\"></ion-icon>\n    <ion-label>Bitte wähle einen Kurs aus.</ion-label>\n  </div>\n\n  <!-- Skeleton -->\n  <div class=\"block\" *ngIf=\"!course\">\n    <app-block skeleton=\"lecture\"></app-block>\n  </div>\n\n  <app-block *ngFor=\"let block of displayedBlocks\" [block]=\"block\"></app-block>\n</ion-content>\n\n<app-lecture-status-fab></app-lecture-status-fab>\n");

/***/ })

}]);
//# sourceMappingURL=pages-timetable-timetable-module-es2015.js.map