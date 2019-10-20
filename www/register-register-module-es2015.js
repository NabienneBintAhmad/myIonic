(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title> Régistration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"col-md-9 align-content-center container\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"  tyle=\"text-align:center\"> <h1> Registration</h1></div>\n           <div class=\"panel-body\">\n           <form #imageForm=ngForm class=\"form\">\n              <div class=\"panel-heading\" style=\"text-align:center\"> <h3> Information Administrateur</h3></div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Username</label>\n                    <input [(ngModel)]=\"registrUserData.username\" type=\"text\" name=\"username\"  class=\"form-control\">\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                     <label class=\"control-label\">Password </label>\n                     <input [(ngModel)]=\"registrUserData.password\" type=\"text\" name=\"password\" class=\"form-control\">\n                   </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group \">\n                    <div class=\"col s8 offst-2\">\n                        <div class=\"card-panel teal lighten-2\">\n                            <h4 class=\"center white-text\">\n                              Cliquer sur l'image pour choisir le votre\n                            </h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group \">\n                    <div class=\"input-field col s12\">\n                        <img [src]=\"imageUrl\" style=\"width:250px ; height:200px\">\n                        <input  name=\"imageFile\" type=\"file\" #ImageFile accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n                    </div>\n                 </div>\n                 \n            </div>\n            \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Prenom Administrateur </label>\n                    <input [(ngModel)]=\"registrUserData.prenom\" type=\"text\" name=\"prenom\" class=\"form-control\">\n                </div>\n    \n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Nom Administrateur</label>\n                    <input [(ngModel)]=\"registrUserData.nom\" type=\"text\" name=\"nom\" class=\"form-control\">\n                </div>\n            </div>        \n                \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Conact </label>\n                    <input [(ngModel)]=\"registrUserData.contact\" type=\"number\" name=\"contact\" class=\"form-control\">\n                </div>\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Cni </label>\n                    <input [(ngModel)]=\"registrUserData.cni\" type=\"number\" name=\"cni\" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Adresse </label>\n                    <input [(ngModel)]=\"registrUserData.adresse\" type=\"text\" name=\"adresse\" class=\"form-control\">\n                </div>\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Email </label>\n                    <input [(ngModel)]=\"registrUserData.email\" type=\"email\" name=\"email\" class=\"form-control\">\n                </div>\n            </div>     \n                  \n            <div class=\"panel-heading\" style=\"text-align:center\"> <h3> Informations Prestataire</h3></div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Nom Entreprise </label>\n                    <input [(ngModel)]=\"registrUserData.nomEntreprise\" type=\"text\" name=\"nomEntreprise\" class=\"form-control\">\n                  </div>\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Prenom Partenaire </label>\n                    <input [(ngModel)]=\"registrUserData.prenom\" type=\"text\" name=\"prenom\" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Nom Partenaire</label>\n                    <input [(ngModel)]=\"registrUserData.nom\" type=\"text\" name=\"nom\" class=\"form-control\">\n                  </div>\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Conact </label>\n                    <input [(ngModel)]=\"registrUserData.contact\" type=\"number\" name=\"contact\" class=\"form-control\">\n                </div>\n            </div>      \n            \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Cni </label>\n                    <input [(ngModel)]=\"registrUserData.cni\" type=\"number\" name=\"cni\" class=\"form-control\">\n                </div>\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Adresse </label>\n                    <input [(ngModel)]=\"registrUserData.adresse\" type=\"text\" name=\"adresse\" class=\"form-control\">\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <label class=\"control-label\">Email </label>\n                    <input [(ngModel)]=\"registrUserData.email\" type=\"email\" name=\"email\" class=\"form-control\">\n                </div>\n    \n                <button (click)=\"registerUser()\" type=\"submit\" class=\"btn btn-success\">register</button>\n            </div>\n                      \n           </form>\n          </div> \n        </div>   \n        </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map