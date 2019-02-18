(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionsadmin-questionsadmin-module"],{

/***/ "./src/app/questionsadmin/questionsadmin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/questionsadmin/questionsadmin.module.ts ***!
  \*********************************************************/
/*! exports provided: QuestionsadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsadminPageModule", function() { return QuestionsadminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questionsadmin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionsadmin.page */ "./src/app/questionsadmin/questionsadmin.page.ts");
/* harmony import */ var _grd_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grd-filter.pipe */ "./src/app/grd-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _questionsadmin_page__WEBPACK_IMPORTED_MODULE_5__["QuestionsadminPage"]
    }
];
var QuestionsadminPageModule = /** @class */ (function () {
    function QuestionsadminPageModule() {
    }
    QuestionsadminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_questionsadmin_page__WEBPACK_IMPORTED_MODULE_5__["QuestionsadminPage"], _grd_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["GrdFilterPipe"]]
        })
    ], QuestionsadminPageModule);
    return QuestionsadminPageModule;
}());



/***/ }),

/***/ "./src/app/questionsadmin/questionsadmin.page.html":
/*!*********************************************************!*\
  !*** ./src/app/questionsadmin/questionsadmin.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>questionsadmin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <div>\n      <ion-toolbar>\n        <ion-searchbar [(ngModel)]=\"searchText\"></ion-searchbar>\n      </ion-toolbar>\n    </div>\n    <ion-card *ngFor=\"let question of questions | grdFilter: { language:searchText };\">\n      <ion-card-header>\n        <ion-card-title>{{question.question}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{question.answer}}</p>\n        <ion-button size=\"small\" color=\"medium\">edit</ion-button>\n        <ion-button size=\"small\" color=\"danger\" (click)=\"onDelete(question)\">delete</ion-button>\n      </ion-card-content>   \n    </ion-card>\n  </div>\n  <ion-button color=\"dark\" (click)=\"onClick()\">click</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/questionsadmin/questionsadmin.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/questionsadmin/questionsadmin.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uc2FkbWluL3F1ZXN0aW9uc2FkbWluLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/questionsadmin/questionsadmin.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/questionsadmin/questionsadmin.page.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsadminPage", function() { return QuestionsadminPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsadminPage = /** @class */ (function () {
    function QuestionsadminPage(qs, router) {
        this.qs = qs;
        this.router = router;
        this.getAllQustions();
    }
    QuestionsadminPage.prototype.ngOnInit = function () {
        this.getAllQustions();
    };
    QuestionsadminPage.prototype.getAllQustions = function () {
        var _this = this;
        this.qs.getQuestions().subscribe(function (data) {
            _this.questions = data;
            console.log(_this.questions);
        });
    };
    QuestionsadminPage.prototype.onDelete = function (question) {
        var _this = this;
        this.id = question._id;
        this.qs.deleteQuestion(this.id).subscribe(function (data) {
            console.log(data);
            _this.getAllQustions();
        });
    };
    QuestionsadminPage.prototype.onClick = function () {
        this.getAllQustions();
    };
    QuestionsadminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionsadmin',
            template: __webpack_require__(/*! ./questionsadmin.page.html */ "./src/app/questionsadmin/questionsadmin.page.html"),
            styles: [__webpack_require__(/*! ./questionsadmin.page.scss */ "./src/app/questionsadmin/questionsadmin.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionsadminPage);
    return QuestionsadminPage;
}());



/***/ })

}]);
//# sourceMappingURL=questionsadmin-questionsadmin-module.js.map