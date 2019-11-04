(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title> Régistration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"col-md-9 align-content-center container\">\n        <div class=\"panel panel-default\">\n           <div class=\"panel-body\">\n           <form #imageForm=ngForm class=\"form\">\n              <div class=\"panel-heading\" style=\"text-align:center\"> <h3> Information Administrateur</h3></div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                    <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.username\" type=\"text\" name=\"username\"  class=\"form-control\" placeholder=\"Username\"> </ion-input>\n                    </ion-item>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                     <ion-item>\n                     <ion-input [(ngModel)]=\"registrUserData.password\" type=\"text\" name=\"password\" class=\"form-control\" placeholder=\"Password\"></ion-input>\n                    </ion-item>\n                    </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group \">\n                    <div class=\"col s8 offst-2\">\n                        <div class=\"card-panel teal lighten-2\">\n                            <h4 class=\"center white-text\">\n                              Cliquer sur l'image pour choisir le votre\n                            </h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group \">\n                    <div class=\"input-field col s12\">\n                      <ion-item>\n                        <img [src]=\"imageUrl\" style=\"width:250px ; height:200px\">\n                        <ion-input  name=\"imageFile\" type=\"file\" #ImageFile accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\"></ion-input>\n                      </ion-item>\n                      </div>\n                 </div>\n                 \n            </div>\n            \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item> \n                    <ion-input [(ngModel)]=\"registrUserData.prenom\" type=\"text\" name=\"prenom\" class=\"form-control\" placeholder=\"Prénom\"> </ion-input>\n                  </ion-item>\n                  </div>\n    \n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.nom\" type=\"text\" name=\"nom\" class=\"form-control\" placeholder=\"Nom\"> </ion-input>\n                  </ion-item>\n                  </div>\n            </div>        \n                \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.contact\" type=\"number\" name=\"contact\" class=\"form-control\" placeholder=\"Contact\"></ion-input>\n                  </ion-item>\n                  </div>\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.cni\" type=\"number\" name=\"cni\" class=\"form-control\" placeholder=\"Cni\"> </ion-input>\n                  </ion-item>\n                  </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.adresse\" type=\"text\" name=\"adresse\" class=\"form-control\" placeholder=\"Adresse\"></ion-input>\n                  </ion-item>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Mail\" required pattern=\"[^@]+@[^@]+.[a-zA-Z]{2,6}\"> </ion-input>\n                  </ion-item>\n                </div>\n            </div>     \n                  \n            <div class=\"panel-heading\" style=\"text-align:center\"> <h3> Informations Prestataire</h3></div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.nomEntreprise\" type=\"text\" name=\"nomEntreprise\" class=\"form-control\" placeholder=\"Nom Entreprise\"> </ion-input>\n                  </ion-item>\n                  </div>\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.prenom\" type=\"text\" name=\"prenom\" class=\"form-control\" placeholder=\"Prenom\"></ion-input>\n                  </ion-item>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.nom\" type=\"text\" name=\"nom\" class=\"form-control\" placeholder=\"Nom\"></ion-input>\n                  </ion-item>\n                  </div>\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.contact\" type=\"number\" name=\"contact\" class=\"form-control\" placeholder=\"Contact\"></ion-input>\n                  </ion-item>\n                </div>\n            </div>      \n            \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.cni\" type=\"number\" name=\"cni\" class=\"form-control\" placeholder=\"Cni\"></ion-input>\n                  </ion-item>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.adresse\" type=\"text\" name=\"adresse\" class=\"form-control\" placeholder=\"Adresse\"></ion-input>\n                  </ion-item>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"form-group col-lg-6\">\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"registrUserData.email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"email\" required pattern=\"[^@]+@[^@]+.[a-zA-Z]{2,6}\"></ion-input>\n                  </ion-item>\n                </div>\n    \n                <ion-button (click)=\"registerUser()\" type=\"submit\" class=\"btn btn-success\">register</ion-button>\n            </div>\n                      \n           </form>\n          </div> \n        </div>   \n        </div>\n</ion-content>\n"

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
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterPage = class RegisterPage {
    constructor(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.registrUserData = { imageFile: File = null };
        this.imageUrl = 'assets/image/100-percent-halal.png';
    }
    ngOnInit() {
    }
    handleFileInput(file) {
        this.registrUserData.imageFile = file.item(0);
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.registrUserData.imageFile);
    }
    registerUser() {
        this.registerService.registerUser(this.registrUserData)
            .subscribe(data => {
            window.confirm('Inséré!');
            console.log(data);
        }, err => {
            window.confirm('Pas inséré!');
            console.log(err);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterService = class RegisterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = 'http://127.0.0.1:8000/api/register';
        this.endpoint1 = 'http://127.0.0.1:8000/api/listpresta';
    }
    registerUser(formData) {
        const formData1 = new FormData();
        formData1.append('username', formData.username);
        formData1.append('password', formData.password);
        formData1.append('imageFile', formData.imageFile);
        formData1.append('nom', formData.nom);
        formData1.append('prenom', formData.prenom);
        formData1.append('adresse', formData.adresse);
        formData1.append('email', formData.imail);
        formData1.append('contact', formData.contact);
        formData1.append('cni', formData.cni);
        formData1.append('nom', formData.nom);
        formData1.append('prenom', formData.prenom);
        formData1.append('nomEntreprise', formData.nomEntreprise);
        formData1.append('adresse', formData.adresse);
        formData1.append('contact', formData.contact);
        formData1.append('cni', formData.cni);
        formData1.append('email', formData.email);
        console.log(formData);
        return this.httpClient.post(this.endpoint, formData1, { observe: 'response' });
    }
    getPrestalist() {
        return this.httpClient.get(this.endpoint1);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegisterService);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map