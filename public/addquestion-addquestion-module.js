(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addquestion-addquestion-module"],{

/***/ "./src/app/addquestion/addquestion.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addquestion/addquestion.module.ts ***!
  \***************************************************/
/*! exports provided: AddquestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionPageModule", function() { return AddquestionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addquestion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addquestion.page */ "./src/app/addquestion/addquestion.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _addquestion_page__WEBPACK_IMPORTED_MODULE_5__["AddquestionPage"]
    }
];
var AddquestionPageModule = /** @class */ (function () {
    function AddquestionPageModule() {
    }
    AddquestionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_addquestion_page__WEBPACK_IMPORTED_MODULE_5__["AddquestionPage"]]
        })
    ], AddquestionPageModule);
    return AddquestionPageModule;
}());



/***/ }),

/***/ "./src/app/addquestion/addquestion.page.html":
/*!***************************************************!*\
  !*** ./src/app/addquestion/addquestion.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addquestion</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid style=\"width:700px; text-align:center;\">\n    <ion-row justify-content-center>\n      <ion-col align-self-center>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <div mb-5>\n                Add Question\n              </div>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form (ngSubmit)=\"submitQuestion()\" [formGroup]=\"submitForm\">\n              <div padding>\n                <ion-item>\n                  <ion-textarea formControlName=\"question\" placeholder=\"Question\"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Language/Type</ion-label>\n                    <ion-select formControlName=\"language\" value=\"sl\" ok-text=\"Okay\" cancel-text=\"Dismiss\">\n                      <ion-select-option value=\"sl\">Select Language</ion-select-option>\n                      <ion-select-option value=\"java\">Java</ion-select-option>\n                      <ion-select-option value=\"node\">Node</ion-select-option>\n                      <ion-select-option value=\"angular\">Angular</ion-select-option>\n                      <ion-select-option value=\"react\">ReactJs</ion-select-option>\n                      <ion-select-option value=\"mongodb\">MongoDB</ion-select-option>\n                      <ion-select-option value=\"mysql\">MySql</ion-select-option>\n                      <ion-select-option value=\"other\">Other</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                <ion-item>\n                  <ion-textarea formControlName=\"answer\" style=\"height:200px\" placeholder=\"Answer\"></ion-textarea>\n                </ion-item>\n                <ion-item *ngIf=\"current==0\">\n                    <ion-textarea formControlName=\"answer2\" style=\"height:200px\" placeholder=\"Similar answer\"></ion-textarea>\n                </ion-item>\n                <div *ngIf=\"current==1\" style=\"padding-top:10px; text-align:left;\">\n                  <ion-button  (click)=\"moreAns()\" size=\"small\" >Add more answers</ion-button>\n                </div>\n              </div>\n              <div >\n                <ion-button type=\"ngSubmit\" size=\"small\" expand=\"block\">Submit</ion-button>\n              </div>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/addquestion/addquestion.page.scss":
/*!***************************************************!*\
  !*** ./src/app/addquestion/addquestion.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHF1ZXN0aW9uL2FkZHF1ZXN0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addquestion/addquestion.page.ts":
/*!*************************************************!*\
  !*** ./src/app/addquestion/addquestion.page.ts ***!
  \*************************************************/
/*! exports provided: AddquestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionPage", function() { return AddquestionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddquestionPage = /** @class */ (function () {
    function AddquestionPage(fb, router, quesservice) {
        this.fb = fb;
        this.router = router;
        this.quesservice = quesservice;
        this.current = 1;
        this.submitForm = fb.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            answer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AddquestionPage.prototype.ngOnInit = function () {
    };
    AddquestionPage.prototype.submitQuestion = function () {
        var _this = this;
        console.log("done!!");
        this.quesservice.addQuestion(this.submitForm.value).subscribe(function (data) {
            if (data['status'] == 200) {
                console.log(data);
                _this.router.navigate(["/admin/questionsadmin"]);
            }
            else {
                console.log(data);
            }
        });
        this.submitForm.reset();
        this.current = 1;
    };
    AddquestionPage.prototype.moreAns = function () {
        this.current = 0;
    };
    AddquestionPage.prototype.getAllQustions = function () {
        var _this = this;
        this.quesservice.getQuestions().subscribe(function (data) {
            _this.questions = data;
            console.log(_this.questions);
        });
    };
    AddquestionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addquestion',
            template: __webpack_require__(/*! ./addquestion.page.html */ "./src/app/addquestion/addquestion.page.html"),
            styles: [__webpack_require__(/*! ./addquestion.page.scss */ "./src/app/addquestion/addquestion.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], AddquestionPage);
    return AddquestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=addquestion-addquestion-module.js.map