(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-align=\"center\" color=\"primary\">\n    <ion-title>H@lal Transaction</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n        <ion-card-header color=\"primary\">\n            <ion-card-subtitle>Bienvenue à halal transaction.</ion-card-subtitle>\n            <ion-card-title  text-align=\"center\">  Authentification\n              \n              </ion-card-title>\n          </ion-card-header>\n    <ion-card-content>\n    <form >\n    <ion-item > \n       <ion-input [(ngModel)]=\"loginUserData.username\" placeholder=\"Username\" type=\"text\" name=\"username\"  class=\"form-control\"></ion-input>\n    </ion-item> \n    <ion-item>         \n     <ion-input [(ngModel)]=\"loginUserData.password\" placeholder=\"Password\" type=\"password\" name=\"password\" class=\"form-control\"></ion-input>\n     </ion-item>   \n           <ion-button expand=\"block\" (click)=\"login(loginUserData)\" type=\"submit\" class=\"btn btn-success\"  fill=\"outline\" class=\"btnLogin\">Login</ion-button>\n        </form>\n      </ion-card-content>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web\");\n@charset \"UTF-8\";\n/* fonts  */\nbody {\n  /* \tbackground-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%); */\n  /*  background-image: url('../assets/img/halal.jpg'); */\n  background-attachment: fixed;\n  background-size: cover;\n  margin: 0; }\n#container {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(205, 156, 242, 0.4)), to(rgba(246, 255, 255, 0.71)));\n  background-image: linear-gradient(to top, rgba(205, 156, 242, 0.4) 0%, rgba(246, 255, 255, 0.71) 100%);\n  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);\n  text-align: center;\n  border-radius: 5px;\n  margin: 3em auto;\n  background: rgba(255, 255, 255, 0.95);\n  height: 300px;\n  width: 480px;\n  padding: 1em;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 5; }\n#container h2 {\n  background: url(https://static.pexels.com/photos/5782/nature-flowers-vintage-plant.jpg);\n  /*   الكود المسؤال عن اضافة شفافية للنص */\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  /* \tbackground-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%); */\n  font-family: 'Playfair Display', serif;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  letter-spacing: 2px;\n  font-size: 3.5em;\n  margin: 0; }\n#container p {\n  font-family: 'Farsan', cursive;\n  margin: 3px 0 1.5em 0;\n  font-size: 1.3em;\n  color: #7d7d7d; }\n#container input {\n  /* \tbackground: rgba(255, 13, 254, 0.90); */\n  width: 210px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 7px;\n  background: #eee;\n  padding: 1em 2em;\n  outline: none;\n  border: none;\n  color: #222;\n  -webkit-transition: 0.3s linear;\n  transition: 0.3s linear; }\n::-webkit-input-placeholder {\n  color: #999; }\n::-moz-placeholder {\n  color: #999; }\n::-ms-input-placeholder {\n  color: #999; }\n::placeholder {\n  color: #999; }\n#container input:focus {\n  background: rgba(0, 0, 255, 0.1); }\n#container button {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(146, 255, 173, 0.75)), to(rgba(8, 71, 19, 0.86)));\n  background-image: linear-gradient(to left, rgba(146, 255, 173, 0.75) 0%, rgba(8, 71, 19, 0.86) 100%);\n  box-shadow: 0 9px 25px -5px #0ab16b;\n  font-family: 'Abel', sans-serif;\n  padding: 0.5em 1.9em;\n  margin: 2.3em 0 0 0;\n  border-radius: 7px;\n  font-size: 1.4em;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-size: 1em;\n  outline: none;\n  border: none;\n  -webkit-transition: 0.3s linear;\n  transition: 0.3s linear; }\n#container button:hover {\n  -webkit-transform: translatey(2px);\n          transform: translatey(2px); }\n#container button:active {\n  -webkit-transform: translatey(5px);\n          transform: translatey(5px); }\n.lena {\n  margin-top: -30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hYmllbm5lYmludGFobWFkL0J1cmVhdS9teWFwaWNsb25lL215SW9uaWMvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsaVJBQVk7QUNGWixnQkFBZ0I7QURDaEIsV0FBQTtBQUdBO0VBQ0EsMEVBQUE7RUFDRyx1REFBQTtFQUNGLDRCQUE0QjtFQUM1QixzQkFBcUI7RUFDbEIsU0FBUyxFQUFBO0FBS2I7RUFDQyxnSUFBdUc7RUFBdkcsc0dBQXVHO0VBQ3ZHLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBRVosZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLE1BQU0sRUFBQTtBQUtQO0VBQ0MsdUZBQXVGO0VBQ3RGLHlDQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUNqQywwRUFBQTtFQUNDLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTtBQUtWO0VBQ0MsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2Y7RUFDQSwyQ0FBQTtFQUNDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUF1QjtFQUF2Qix1QkFBdUIsRUFBQTtBQUV4QjtFQUFjLFdBQVcsRUFBQTtBQUF6QjtFQUFjLFdBQVcsRUFBQTtBQUF6QjtFQUFjLFdBQVcsRUFBQTtBQUF6QjtFQUFjLFdBQVcsRUFBQTtBQUN6QjtFQUF3QixnQ0FBaUMsRUFBQTtBQUV6RDtFQUNDLDJIQUFvRztFQUFwRyxvR0FBb0c7RUFDcEcsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWiwrQkFBdUI7RUFBdkIsdUJBQXVCLEVBQUE7QUFHeEI7RUFBd0Isa0NBQTBCO1VBQTFCLDBCQUEwQixFQUFBO0FBQ2xEO0VBQXlCLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTtBQUNuRDtFQUNDLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBmb250cyAgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxBZ3VhZmluYStTY3JpcHR8QXJ0aWZpa2F8QXRoaXRpfENvbmRpbWVudHxEb3Npc3xEcm9pZCtTZXJpZnxGYXJzYW58R3VyYWphZGF8Sm9zZWZpbitTYW5zfExhdG98TG9yYXxNZXJyaXdlYXRoZXJ8Tm90bytTZXJpZnxPcGVuK1NhbnMrQ29uZGVuc2VkOjMwMHxQbGF5ZmFpcitEaXNwbGF5fFJhc2F8U2FoaXR5YXxTaGFyZStUZWNofFRleHQrTWUrT25lfFRpdGlsbGl1bStXZWInKTtcblxuYm9keSB7XG4vKiBcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjZDljZjIgMCUsICNmNmYzZmYgMTAwJSk7ICovXG4gICAvKiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2hhbGFsLmpwZycpOyAqL1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxufVxuXG5cbiNjb250YWluZXJ7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjA1LCAxNTYsIDI0MiwgMC40MCkgMCUsIHJnYmEoMjQ2LCAyNTUsIDI1NSwgMC43MSkgMTAwJSk7XG5cdGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDFweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzEpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0bWFyZ2luOiAzZW0gYXV0bztcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcblx0aGVpZ2h0OiAzMDBweDtcblx0d2lkdGg6IDQ4MHB4O1xuXHRwYWRkaW5nOiAxZW07XG5cdFxuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMDtcblx0cmlnaHQ6IDA7XG5cdGxlZnQ6IDA7XG5cdHRvcDogNTtcdFxuXG5cdFxufVxuXG4jY29udGFpbmVyIGgyIHtcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc3RhdGljLnBleGVscy5jb20vcGhvdG9zLzU3ODIvbmF0dXJlLWZsb3dlcnMtdmludGFnZS1wbGFudC5qcGcpO1xuXHRcdC8qICAg2KfZhNmD2YjYryDYp9mE2YXYs9ik2KfZhCDYudmGINin2LbYp9mB2Kkg2LTZgdin2YHZitipINmE2YTZhti1ICovXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuLyogXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjY2Q5Y2YyIDAlLCAjZjZmM2ZmIDEwMCUpOyAqL1xuXHRmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xuXHRsZXR0ZXItc3BhY2luZzogMnB4O1xuXHRmb250LXNpemU6IDMuNWVtO1xuXHRtYXJnaW46IDA7XG5cblx0XG5cdFxufVxuI2NvbnRhaW5lciBwIHtcblx0Zm9udC1mYW1pbHk6ICdGYXJzYW4nLCBjdXJzaXZlO1xuXHRtYXJnaW46IDNweCAwIDEuNWVtIDA7XG5cdGZvbnQtc2l6ZTogMS4zZW07XG5cdGNvbG9yOiAjN2Q3ZDdkO1xufVxuXG4jY29udGFpbmVyIGlucHV0IHtcbi8qIFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDEzLCAyNTQsIDAuOTApOyAqL1xuXHR3aWR0aDogMjEwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdGJhY2tncm91bmQ6ICNlZWU7XG5cdHBhZGRpbmc6IDFlbSAyZW07XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6ICMyMjI7XG5cdHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xufVxuOjpwbGFjZWhvbGRlcntjb2xvcjogIzk5OTt9XG4jY29udGFpbmVyIGlucHV0OmZvY3VzIHtiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDMzMywgMC4xMCk7fVxuXG4jY29udGFpbmVyIGJ1dHRvbiB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDE0NiwgMjU1LCAxNzMsIDAuNzUpIDAlLCByZ2JhKDgsIDcxLCAxOSwgMC44NikgMTAwJSk7XG5cdGJveC1zaGFkb3c6IDAgOXB4IDI1cHggLTVweCAjMGFiMTZiO1xuXHRmb250LWZhbWlseTogJ0FiZWwnLCBzYW5zLXNlcmlmO1xuXHRwYWRkaW5nOiAwLjVlbSAxLjllbTtcblx0bWFyZ2luOiAyLjNlbSAwIDAgMDtcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRmb250LXNpemU6IDEuNGVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDFlbTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHR0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcblxufVxuI2NvbnRhaW5lciBidXR0b246aG92ZXJ7dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDJweCk7fVxuI2NvbnRhaW5lciBidXR0b246YWN0aXZle3RyYW5zZm9ybTogdHJhbnNsYXRleSg1cHgpO31cbi5sZW5hIHtcblx0bWFyZ2luLXRvcDogLTMwJTtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBmb250cyAgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8QWd1YWZpbmErU2NyaXB0fEFydGlmaWthfEF0aGl0aXxDb25kaW1lbnR8RG9zaXN8RHJvaWQrU2VyaWZ8RmFyc2FufEd1cmFqYWRhfEpvc2VmaW4rU2Fuc3xMYXRvfExvcmF8TWVycml3ZWF0aGVyfE5vdG8rU2VyaWZ8T3BlbitTYW5zK0NvbmRlbnNlZDozMDB8UGxheWZhaXIrRGlzcGxheXxSYXNhfFNhaGl0eWF8U2hhcmUrVGVjaHxUZXh0K01lK09uZXxUaXRpbGxpdW0rV2ViXCIpO1xuYm9keSB7XG4gIC8qIFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NkOWNmMiAwJSwgI2Y2ZjNmZiAxMDAlKTsgKi9cbiAgLyogIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9oYWxhbC5qcGcnKTsgKi9cbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiAwOyB9XG5cbiNjb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDIwNSwgMTU2LCAyNDIsIDAuNCkgMCUsIHJnYmEoMjQ2LCAyNTUsIDI1NSwgMC43MSkgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDFweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzZW0gYXV0bztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQ4MHB4O1xuICBwYWRkaW5nOiAxZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiA1OyB9XG5cbiNjb250YWluZXIgaDIge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zdGF0aWMucGV4ZWxzLmNvbS9waG90b3MvNTc4Mi9uYXR1cmUtZmxvd2Vycy12aW50YWdlLXBsYW50LmpwZyk7XG4gIC8qICAg2KfZhNmD2YjYryDYp9mE2YXYs9ik2KfZhCDYudmGINin2LbYp9mB2Kkg2LTZgdin2YHZitipINmE2YTZhti1ICovXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC8qIFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NkOWNmMiAwJSwgI2Y2ZjNmZiAxMDAlKTsgKi9cbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIG1hcmdpbjogMDsgfVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LWZhbWlseTogJ0ZhcnNhbicsIGN1cnNpdmU7XG4gIG1hcmdpbjogM3B4IDAgMS41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICM3ZDdkN2Q7IH1cblxuI2NvbnRhaW5lciBpbnB1dCB7XG4gIC8qIFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDEzLCAyNTQsIDAuOTApOyAqL1xuICB3aWR0aDogMjEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyMjI7XG4gIHRyYW5zaXRpb246IDAuM3MgbGluZWFyOyB9XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTsgfVxuXG4jY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMSk7IH1cblxuI2NvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxNDYsIDI1NSwgMTczLCAwLjc1KSAwJSwgcmdiYSg4LCA3MSwgMTksIDAuODYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDlweCAyNXB4IC01cHggIzBhYjE2YjtcbiAgZm9udC1mYW1pbHk6ICdBYmVsJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMC41ZW0gMS45ZW07XG4gIG1hcmdpbjogMi4zZW0gMCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7IH1cblxuI2NvbnRhaW5lciBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTsgfVxuXG4jY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNXB4KTsgfVxuXG4ubGVuYSB7XG4gIG1hcmdpbi10b3A6IC0zMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(authentService, router) {
        this.authentService = authentService;
        this.router = router;
        this.loginUserData = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        // this.router.navigateByUrl('/menu/home')
    };
    LoginPage.prototype.isSuperadmin = function () {
        return this.authentService.isSuperadmin();
    };
    LoginPage.prototype.isAdmin = function () {
        return this.authentService.isAdmin();
    };
    LoginPage.prototype.isUser = function () {
        return this.authentService.isUser();
    };
    LoginPage.prototype.isCaissier = function () {
        return this.authentService.isCaissier();
    };
    LoginPage.prototype.isAuthenticated = function () {
        return this.authentService.isAuthenticated();
    };
    LoginPage.prototype.isConnected = function () {
        return this.authentService.isConnected();
    };
    LoginPage.prototype.logout = function () {
        return this.authentService.logout();
    };
    LoginPage.prototype.loggedIn = function () {
        return this.authentService.loggedIn();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authentService.login(this.loginUserData)
            .subscribe(function (resp) {
            //window.confirm('Connexion réussie');
            //this.router.navigateByUrl('/register');
            console.log(resp);
            var jwt = resp.body;
            _this.authentService.saveToken(jwt);
            if (_this.isUser()) {
                _this.router.navigateByUrl('/menu/home');
            }
            else if (_this.isAdmin()) {
                _this.router.navigateByUrl('/menuadmin/historiqueadmin');
            }
            else {
                _this.router.navigateByUrl('/login');
            }
        }, function (err) {
            console.log(err);
            window.confirm('Connexion échouée, rassayer');
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map