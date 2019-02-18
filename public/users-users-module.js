(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_5__["UsersPage"]
    }
];
var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_users_page__WEBPACK_IMPORTED_MODULE_5__["UsersPage"]]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());



/***/ }),

/***/ "./src/app/users/users.page.html":
/*!***************************************!*\
  !*** ./src/app/users/users.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor=\"let user of users\">\n      <ion-card-header>\n        <ion-card-title>{{user.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p> {{user.regno}}</p>\n        <p> {{user.mobile}}</p>\n        <p> {{user.astatus}}</p>\n        <ion-button size=\"small\" color=\"medium\" (click)=\"confirmUser(user)\">confirm</ion-button>\n        <ion-button size=\"small\" color=\"danger\" (click)=\"clickDelete(user)\">delete</ion-button>\n      </ion-card-content>   \n    </ion-card>\n    <div style=\"padding-top:50px\">\n      <ion-button color=\"dark\" (click)=\"logOut()\">\n        <ion-icon slot=\"start\" name=\"exit\"></ion-icon>\n        logout\n      </ion-button>\n    </div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/users/users.page.scss":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/users.page.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersPage = /** @class */ (function () {
    function UsersPage(userservice, router, authService) {
        this.userservice = userservice;
        this.router = router;
        this.authService = authService;
    }
    UsersPage.prototype.getAllusers = function () {
        var _this = this;
        this.userservice.getUsers().subscribe(function (data) {
            if (data['status'] == 200) {
                _this.users = data['data'];
                console.log(_this.users);
            }
            else {
                console.log(data);
            }
        });
    };
    UsersPage.prototype.ngOnInit = function () {
        this.getAllusers();
    };
    UsersPage.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    UsersPage.prototype.clickDelete = function (user) {
        var _this = this;
        this.regNo = user.regno;
        console.log(this.regNo);
        this.userservice.deleteUser(this.regNo).subscribe(function (data) {
            _this.getAllusers();
            console.log(data);
        });
    };
    UsersPage.prototype.confirmUser = function (user) {
        var _this = this;
        this.regNo = user.regno;
        this.status = "active";
        this.userservice.updateUser(this.regNo, this.status).subscribe(function (data) {
            _this.getAllusers();
        });
    };
    UsersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.page.html */ "./src/app/users/users.page.html"),
            styles: [__webpack_require__(/*! ./users.page.scss */ "./src/app/users/users.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UsersPage);
    return UsersPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map