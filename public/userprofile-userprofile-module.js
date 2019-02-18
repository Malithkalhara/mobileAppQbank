(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userprofile-userprofile-module"],{

/***/ "./src/app/userprofile/userprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.module.ts ***!
  \***************************************************/
/*! exports provided: UserprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userprofile.page */ "./src/app/userprofile/userprofile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _userprofile_page__WEBPACK_IMPORTED_MODULE_5__["UserprofilePage"]
    }
];
var UserprofilePageModule = /** @class */ (function () {
    function UserprofilePageModule() {
    }
    UserprofilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_5__["UserprofilePage"]]
        })
    ], UserprofilePageModule);
    return UserprofilePageModule;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.page.html":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userprofile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p>{{user?.name}}</p>\n\n  <ion-button color=\"dark\" (click)=\"logOut()\">\n    <ion-icon slot=\"start\" name=\"exit\"></ion-icon>\n    logout\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.ts ***!
  \*************************************************/
/*! exports provided: UserprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePage", function() { return UserprofilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserprofilePage = /** @class */ (function () {
    function UserprofilePage(userservice, router, authService) {
        this.userservice = userservice;
        this.router = router;
        this.authService = authService;
    }
    UserprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.regno = this.currentUserSubject.value['data'].regno;
        console.log(this.regno);
        this.userservice.getUser(this.regno).subscribe(function (data) {
            if (data['status'] == 200) {
                _this.user = data['data'];
                _this.name = _this.user.name;
                console.log(_this.user.name);
            }
            else {
                console.log(data);
            }
        });
    };
    UserprofilePage.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    UserprofilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.page.html */ "./src/app/userprofile/userprofile.page.html"),
            styles: [__webpack_require__(/*! ./userprofile.page.scss */ "./src/app/userprofile/userprofile.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], UserprofilePage);
    return UserprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=userprofile-userprofile-module.js.map