(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions.page */ "./src/app/questions/questions.page.ts");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipe.module */ "./src/app/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { GrdFilterPipe } from '../grd-filter.pipe';

var routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_5__["QuestionsPage"]
    }
];
var QuestionsPageModule = /** @class */ (function () {
    function QuestionsPageModule() {
    }
    QuestionsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_5__["QuestionsPage"]],
            exports: []
        })
    ], QuestionsPageModule);
    return QuestionsPageModule;
}());



/***/ }),

/***/ "./src/app/questions/questions.page.html":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     <ion-header>\n           <ion-toolbar>\n               <ion-buttons slot=\"start\">\n                   <ion-menu-button></ion-menu-button>\n                 </ion-buttons>\n             <ion-title>questions</ion-title>\n           </ion-toolbar>\n         </ion-header>\n         \n         <ion-content padding>\n             <div>\n                 <div>\n                   <ion-toolbar>\n                     <ion-searchbar [(ngModel)]=\"searchText\"></ion-searchbar>\n                   </ion-toolbar>\n                 </div>\n                 <ion-card *ngFor=\"let question of questions | grdFilter: { language:searchText };\">\n                   <ion-card-header>\n                     <ion-card-title>{{question.question}}</ion-card-title>\n                   </ion-card-header>\n                   <ion-card-content>\n                     <p>{{question.answer}}</p>\n                   </ion-card-content>\n                 </ion-card>\n               </div>\n         </ion-content>\n   \n"

/***/ }),

/***/ "./src/app/questions/questions.page.scss":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/questions/questions.page.ts":
/*!*********************************************!*\
  !*** ./src/app/questions/questions.page.ts ***!
  \*********************************************/
/*! exports provided: QuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPage", function() { return QuestionsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(qs) {
        this.qs = qs;
    }
    QuestionsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.qs.getQuestions().subscribe(function (data) {
            _this.questions = data;
            console.log(_this.questions);
        });
    };
    QuestionsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.page.html */ "./src/app/questions/questions.page.html"),
            styles: [__webpack_require__(/*! ./questions.page.scss */ "./src/app/questions/questions.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], QuestionsPage);
    return QuestionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=questions-questions-module.js.map