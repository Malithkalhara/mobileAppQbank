(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_5__["AdminPage"],
        children: [
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        loadChildren: '../users/users.module#UsersPageModule'
                    }
                ]
            },
            {
                path: 'addquestion',
                children: [
                    {
                        path: '',
                        loadChildren: '../addquestion/addquestion.module#AddquestionPageModule'
                    }
                ]
            },
            {
                path: 'questionsadmin',
                children: [
                    {
                        path: '',
                        loadChildren: '../questionsadmin/questionsadmin.module#QuestionsadminPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/admin/users',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/admin/users',
        pathMatch: 'full'
    }
];
var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_5__["AdminPage"]]
        })
    ], AdminPageModule);
    return AdminPageModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.page.html":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"users\">\n            <ion-icon name=\"people\"></ion-icon>\n            <ion-label>Users</ion-label>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"addquestion\" >\n            <ion-icon name=\"add\"></ion-icon>\n            <ion-label>Add Question</ion-label>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"questionsadmin\">\n            <ion-icon name=\"list\"></ion-icon>\n            <ion-label>Questions</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      \n      </ion-tabs>\n"

/***/ }),

/***/ "./src/app/admin/admin.page.scss":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tabs {\n  position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRjpcXE1hbGl0aFxcQ1NVUCBQcm9qZWN0c1xcUXVlc3RvbkJhbmtcXGZyb250ZW5kL3NyY1xcYXBwXFxhZG1pblxcYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFic3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.page.ts":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPage = /** @class */ (function () {
    function AdminPage(questionservice, router) {
        this.questionservice = questionservice;
        this.router = router;
    }
    AdminPage.prototype.ngOnInit = function () {
    };
    AdminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.page.html */ "./src/app/admin/admin.page.html"),
            styles: [__webpack_require__(/*! ./admin.page.scss */ "./src/app/admin/admin.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminPage);
    return AdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map