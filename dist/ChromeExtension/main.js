(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bot-details/bot-details.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bot-details/bot-details.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let item of fields\">\n  <div class=\"form-group\">\n    <label for=\"\">{{item.title}}</label>\n    <input class=\"form-control m-1\" type=\"{{item.restrictions.digitsOnly ? 'number' : 'text'}}\" *ngIf=\"item.type== 'input'\" [(ngModel)]=\"item.value\"\n      required=\"{{item.restrictions.required}}\"  >\n    <select class=\"form-control \"  *ngIf=\"item.type=='dropdown'\"  id=\"botSelector\" [(ngModel)]=\"item.value\" required=\"{{item.restrictions.required}}\">\n      <option [value]='null' selected disabled>Select a option</option>\n      <option *ngFor=\"let val of item.options\" [value]=\"val\"> {{val}}</option>\n    </select>\n  </div>\n</div>\n\n  <div class=\"form-group \">\n    <label for=\"\">Select a Bot Runner</label>\n    <select class=\"form-control \"  id=\"runnerSelector\" [(ngModel)]=\"runnerId\" required=\"true\">\n      <option [value]='null' selected disabled>Select Bot Runner</option>\n      <option *ngFor=\"let val of runners\" [value]=\"val.id\"> {{val.hostName}}</option>\n    </select>\n  </div>\n\n<div class=\"form-group \">\n  <div class=\"row justify-content-center m-1\">\n    <button type=\"submit\" class=\"btn btn-primary \" (click)=\"onDeploy()\"  >Deploy</button>\n  </div>\n</div>\n\n<div  class=\"row justify-content-center m-1 mt-2 alert \"  [ngClass]=\"error? 'alert-danger': 'alert-info' \" *ngIf=\"show\">{{deploymsg}}</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bot-pop-up/bot-pop-up.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bot-pop-up/bot-pop-up.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group mt-2 mb-3\">\n  <label for=\"\">Select a Bot to Get Started</label>\n  <select class=\"form-control\" id=\"botSelector\" [(ngModel)]=\"bot\" (change)=\"changeBot()\">\n    <option [value]='null' selected disabled >Select a Bot</option>\n    <option *ngFor=\"let item of file\" [value]=\"stringify(item)\"> {{item.name}}</option>\n  </select>\n</div>\n<div class=\"form-group\">\n  <div *ngIf=\"selectedBot?.fields\">\n<app-bot-details [Bot]=\"selectedBot\">\n\n</app-bot-details>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container \">\n  <div class=\"row fixed-bottom navbar-light bar text-center\">\n    <div class=\"col-sm-4  icons\" [routerLink]=\"['/bot-pop-up']\" (click)=\"activated(0)\"\n      [ngClass]=\"active[0]? 'select-icon':''\">\n      <fa-icon *ngIf=\"getRouteForbutton()=== 'bot-pop-up' || correctRoute === '/bot-pop-up'\" [icon]=\"farobot\"></fa-icon>\n      <fa-icon *ngIf=\"getRouteForbutton()=== 'login' || correctRoute === '/login'\" [icon]=\"fasignIn\"></fa-icon>\n    </div>\n\n    <div class=\"col-sm-4 icons \" [routerLink]=\"['/history']\" (click)=\"activated(1)\"\n      [ngClass]=\"active[1]? 'select-icon':''\">\n      <fa-icon [icon]=\"history\"></fa-icon>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container back-color\">\n  <div class=\"row text-center justify-content-center mx-2 mb-2\">\n    <img src=\"/assets/images/icon.png\" alt=\"Bot Tasker\" class=\"m-1\"><h3 class=\"m-1\">Bot Tasker</h3>\n    <span class=\"form-label\">(0.0.1)</span>\n  </div>\n  <div class=\"row text-center logout\">\n      <h5>Easily send work for your bots</h5>\n      <div class=\" icons text-right\" [routerLink]=\"['/logout']\" title=\"Logout\"><fa-icon [icon]=\"fasignOut\"></fa-icon></div>\n </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\" *ngIf=\"loadedUser.username  && (loadedHistory.length !=0)\">\n  <table class=\"table table-hover table-borderless table-sm text-center\">\n    <thead class=\"thead-light\">\n      <tr >\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Bot</th>\n        <th scope=\"col\">Submission status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr  *ngFor=\"let item of loadedHistory\">\n        <td>{{item.date }}</td>\n        <td>{{item.botName}}</td>\n        <td>{{item.status}}</td>\n      </tr>\n      </tbody>\n  </table>\n</div>\n<h5 class=\"text-center m-3\" *ngIf=\"loadedUser.username && loadedHistory.length === 0\">Looks like you have not ran a bot yet!</h5>\n<h5 class=\"text-center m-3\" *ngIf=\"!loadedUser.username\">Login to view History</h5>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  id=\"login_section\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"authenticate()\">\n    <div class=\"form-group row\">\n      <label>Control Room URL</label>\n      <select   [ngClass]=\"(f.url.errors?.required && f.url.dirty ) || (f.url.untouched && submitted)? 'border-danger': null\" class=\"dropdown form-control \" formControlName=\"url\" id=\"crURL\">\n        <option  [value]=\"null\" selected disabled>Select Control Room Url</option>\n        <option  *ngFor=\"let item of crUrls\" [value]=\"item\"> {{item}}</option>\n      </select>\n        <span *ngIf=\" (f.url.errors?.required && f.url.dirty ) || (f.url.untouched && submitted)\" [ngClass]=\"(f.url.errors?.required && f.url.dirty ) || (f.url.untouched && submitted) ? 'text-danger': null\"> * Required</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Control Room Username</label>\n      <input type=\"text\" [ngClass]=\"(f.username.errors?.required && f.username.dirty) || (f.username.untouched && submitted)  ? 'border-danger': null\" class=\"form-control\" id=\"crUsername\" formControlName=\"username\" placeholder=\"Username\">\n      <span *ngIf=\" (f.username.errors?.required && f.username.dirty) || (f.username.untouched && submitted)\" [ngClass]=\"(f.username.errors?.required && f.username.dirty) || (f.username.untouched && submitted) ? 'text-danger': null\"> * Required</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Control Room Password</label>\n      <input type=\"password\"  [ngClass]=\"(f.password.errors?.required && f.password.dirty) || (f.password.untouched && submitted)   ? 'border-danger': null\" class=\"form-control\" id=\"crPassword\" formControlName=\"password\" placeholder=\"Password\">\n      <span *ngIf=\"(f.password.errors?.required && f.password.dirty) || (f.password.untouched && submitted)\" [ngClass]=\"(f.password.errors?.required && f.password.dirty) || (f.password.untouched && submitted) ? 'text-danger': null\"> * Required</span>\n    </div>\n    <div class=\"submitButton\">\n      <button type=\"submit\" class=\"btn btn-primary login-btn\" >Submit</button>\n    </div>\n  </form>\n</div>\n<div class=\"row justify-content-center text-danger text-bold\" *ngIf=\"errormsg!=''\">\n{{errormsg}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\" m-3 text-center\">You are logged Out</h4>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bot_pop_up_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bot-pop-up/bot-pop-up.component */ "./src/app/bot-pop-up/bot-pop-up.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/resolver.service */ "./src/app/services/resolver.service.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");








const routes = [
    { path: '', redirectTo: '/bot-pop-up', pathMatch: 'full' },
    {
        path: 'bot-pop-up',
        component: _bot_pop_up_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["BotPopUpComponent"],
        resolve: {
            user: _services_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ResolverService"]
        }
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
    },
    {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "ChromeExtension";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _bot_pop_up_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bot-pop-up/bot-pop-up.component */ "./src/app/bot-pop-up/bot-pop-up.component.ts");
/* harmony import */ var _services_loaders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/loaders.service */ "./src/app/services/loaders.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _bot_details_bot_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bot-details/bot-details.component */ "./src/app/bot-details/bot-details.component.ts");
/* harmony import */ var _services_control_room_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/control-room.service */ "./src/app/services/control-room.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_resolver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/resolver.service */ "./src/app/services/resolver.service.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _services_user_history_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user-history.service */ "./src/app/services/user-history.service.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _bot_pop_up_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["BotPopUpComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _bot_details_bot_details_component__WEBPACK_IMPORTED_MODULE_13__["BotDetailsComponent"],
            _history_history_component__WEBPACK_IMPORTED_MODULE_17__["HistoryComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["LogoutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            _services_loaders_service__WEBPACK_IMPORTED_MODULE_9__["LoadersService"],
            _services_control_room_service__WEBPACK_IMPORTED_MODULE_14__["ControlRoomService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _services_resolver_service__WEBPACK_IMPORTED_MODULE_16__["ResolverService"],
            _services_user_history_service__WEBPACK_IMPORTED_MODULE_19__["UserHistoryService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bot-details/bot-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bot-details/bot-details.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1kZXRhaWxzL2JvdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/bot-details/bot-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bot-details/bot-details.component.ts ***!
  \******************************************************/
/*! exports provided: BotDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotDetailsComponent", function() { return BotDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_control_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/control-room.service */ "./src/app/services/control-room.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_user_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-history.service */ "./src/app/services/user-history.service.ts");






let BotDetailsComponent = class BotDetailsComponent {
    constructor(controlRService, userService, userHistory) {
        this.controlRService = controlRService;
        this.userService = userService;
        this.userHistory = userHistory;
    }
    ngOnInit() {
        this.fields = this.Bot.fields;
    }
    ngOnChanges(changes) {
        const change = changes.Bot;
        this.Bot = change.currentValue;
        this.fields = this.Bot.fields;
        this.runnerId = null;
        this.userService.getUser().subscribe(res3 => {
            this.user = res3;
            this.controlRService.verifyToken(this.user).subscribe(res => {
                if (res.valid) {
                }
                else {
                    this.controlRService
                        .authentication(this.user.crUrl, this.user.username, this.user.password)
                        .subscribe(res1 => {
                        this.user.token = res1.token;
                    });
                }
                this.controlRService.getDeviceList(this.user).subscribe(res2 => {
                    this.runners = res2.list;
                });
            });
        });
    }
    onDeploy() {
        const botVariables = {};
        // tslint:disable-next-line: forin
        for (const i in this.fields) {
            if (this.fields[i].variableType === 'string' ||
                this.fields[i].variableType === 'number') {
                const insideValue = {};
                insideValue[this.fields[i].variableType] = this.fields[i].value;
                botVariables[this.fields[i].variable] = insideValue;
            }
        }
        botVariables['vBotTaskerUser'] = {
            list: [
                this.user.email,
                this.user.firstName,
                this.user.lastName,
                this.user.username
            ]
        };
        this.controlRService.verifyToken(this.user).subscribe(res => {
            if (!res.valid) {
                this.controlRService
                    .authentication(this.user.crUrl, this.user.username, this.user.password)
                    .subscribe(res => {
                    // tslint:disable-next-line: quotemark
                    this.user.token = res.token;
                });
            }
            this.controlRService
                .getFileID(this.user, this.Bot.path)
                .subscribe(res => {
                if (res.list.length !== 0) {
                    this.fileID = res.list[0].id;
                }
                else {
                    this.setTime();
                    this.error = true;
                    this.deploymsg =
                        'File does not exist Or Permission denied to the file';
                    let botRunHistory = {};
                    botRunHistory.botName = this.Bot.name;
                    botRunHistory.date = (new Date()).toDateString();
                    botRunHistory.status = 'Failure';
                    this.userHistory.setUserHistory(botRunHistory, this.user.username);
                    return;
                }
                this.controlRService
                    .deploymentWithVariables(botVariables, this.fileID, this.runnerId, this.Bot.fields, this.user)
                    .subscribe(res => {
                    this.setTime();
                    this.deploymsg = 'Bot Successfully deployed';
                    this.error = false;
                    const botRunHistory = {};
                    botRunHistory.botName = this.Bot.name;
                    botRunHistory.date = (new Date()).toDateString();
                    botRunHistory.status = 'success';
                    this.userHistory.setUserHistory(botRunHistory, this.user.username);
                }, err => {
                    this.setTime();
                    this.deploymsg = 'Bot deployment Unsuccesful';
                    this.error = true;
                    const botRunHistory = {};
                    botRunHistory.botName = this.Bot.name;
                    botRunHistory.date = (new Date()).toDateString();
                    botRunHistory.status = 'Failure';
                    this.userHistory.setUserHistory(botRunHistory, this.user.username);
                });
            });
        }, err => {
            this.setTime();
            this.deploymsg = 'File does not exist Or Permission denied to the file';
            const botRunHistory = {};
            botRunHistory.botName = this.Bot.name;
            botRunHistory.date = (new Date()).toDateString();
            botRunHistory.status = 'Failure';
            this.userHistory.setUserHistory(botRunHistory, this.user.username);
        });
    }
    setTime() {
        this.show = true;
        let time;
        time = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(5000);
        time.subscribe(() => {
            this.show = false;
        });
    }
};
BotDetailsComponent.ctorParameters = () => [
    { type: _services_control_room_service__WEBPACK_IMPORTED_MODULE_2__["ControlRoomService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_user_history_service__WEBPACK_IMPORTED_MODULE_5__["UserHistoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BotDetailsComponent.prototype, "Bot", void 0);
BotDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bot-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bot-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bot-details/bot-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bot-details.component.css */ "./src/app/bot-details/bot-details.component.css")).default]
    })
], BotDetailsComponent);



/***/ }),

/***/ "./src/app/bot-pop-up/bot-pop-up.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bot-pop-up/bot-pop-up.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1wb3AtdXAvYm90LXBvcC11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/bot-pop-up/bot-pop-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bot-pop-up/bot-pop-up.component.ts ***!
  \****************************************************/
/*! exports provided: BotPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotPopUpComponent", function() { return BotPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loaders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loaders.service */ "./src/app/services/loaders.service.ts");



let BotPopUpComponent = class BotPopUpComponent {
    constructor(fileLoader) {
        this.fileLoader = fileLoader;
    }
    ngOnInit() {
        this.bot = null;
        this.fileLoader.getConfigFile().subscribe(val => {
            this.file = val.bots;
        });
    }
    stringify(text) {
        return JSON.stringify(text);
    }
    changeBot() {
        this.selectedBot = JSON.parse(this.bot);
    }
};
BotPopUpComponent.ctorParameters = () => [
    { type: _services_loaders_service__WEBPACK_IMPORTED_MODULE_2__["LoadersService"] }
];
BotPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bot-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bot-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bot-pop-up/bot-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bot-pop-up.component.css */ "./src/app/bot-pop-up/bot-pop-up.component.css")).default]
    })
], BotPopUpComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bar {\r\n  position: relative;\r\n  background-color: #f28a28;\r\n  flex-wrap: nowrap!important;\r\n  font-size: x-large;\r\n}\r\n.icons  :hover {\r\n color: rgba(57, 60, 63, 0.534);\r\n}\r\n.select-icon {\r\n  background-color: whitesmoke;\r\n  color: #f0722b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjhhMjg7XHJcbiAgZmxleC13cmFwOiBub3dyYXAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uaWNvbnMgIDpob3ZlciB7XHJcbiBjb2xvcjogcmdiYSg1NywgNjAsIDYzLCAwLjUzNCk7XHJcbn1cclxuXHJcbi5zZWxlY3QtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogI2YwNzIyYjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FooterComponent = class FooterComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.fasignIn = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"];
        this.farobot = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRobot"];
        this.history = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHistory"];
        this.active = [];
    }
    ngOnInit() {
        this.active.fill(false, 0, 3);
        this.active[0] = true;
        this.getPrevRoute();
    }
    activated(i) {
        this.active.fill(false, 0, 3);
        this.active[i] = true;
    }
    getPrevRoute() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])()).subscribe((e) => {
            if (e[1].urlAfterRedirects != '/logout' && e[1].urlAfterRedirects != '/history') {
                this.correctRoute = e[1].urlAfterRedirects;
            }
            if (e[1].urlAfterRedirects == '/logout') {
                this.correctRoute = '/login';
            }
        });
    }
    getRouteForbutton() {
        return this.route.firstChild.routeConfig.path;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-color {\r\n  background-color: #f28a28;\r\n}\r\n.icons  :hover {\r\n  color: rgba(57, 60, 63, 0.534);\r\n }\r\n.icons {\r\n   color: ivory;\r\n }\r\n.logout {\r\n  justify-content: space-around\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw4QkFBOEI7Q0FDL0I7QUFFQTtHQUNFLFlBQVk7Q0FDZDtBQUVBO0VBQ0M7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI4YTI4O1xyXG59XHJcbi5pY29ucyAgOmhvdmVyIHtcclxuICBjb2xvcjogcmdiYSg1NywgNjAsIDYzLCAwLjUzNCk7XHJcbiB9XHJcblxyXG4gLmljb25zIHtcclxuICAgY29sb3I6IGl2b3J5O1xyXG4gfVxyXG5cclxuIC5sb2dvdXQge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(route) {
        this.route = route;
        this.fasignOut = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignOutAlt"];
    }
    ngOnInit() {
    }
    getRouteForbutton() {
        return this.route.firstChild.routeConfig.path;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-history.service */ "./src/app/services/user-history.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let HistoryComponent = class HistoryComponent {
    constructor(userHistory, userService, changeDetection) {
        this.userHistory = userHistory;
        this.userService = userService;
        this.changeDetection = changeDetection;
        this.loadedUser = {};
        this.loadedHistory = [];
    }
    ngOnInit() {
        this.userService.userSubscribe().subscribe(res => {
            this.loadedUser = res;
        });
        this.userHistory.subscribeUserHistory().subscribe(res => {
            this.loadedHistory = res;
        });
        this.userHistory.getUserHistory(this.loadedUser.username).subscribe(res => {
            this.loadedHistory = res;
            this.changeDetection.detectChanges();
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _services_user_history_service__WEBPACK_IMPORTED_MODULE_2__["UserHistoryService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")).default]
    })
], HistoryComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_control_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/control-room.service */ "./src/app/services/control-room.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_loaders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loaders.service */ "./src/app/services/loaders.service.ts");







let LoginComponent = class LoginComponent {
    constructor(route, CRService, formBuilder, userService, loaderService, zone) {
        this.route = route;
        this.CRService = CRService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loaderService = loaderService;
        this.zone = zone;
        this.user = {};
    }
    ngOnInit() {
        //this.nextPage = false;
        this.submitted = false;
        this.errormsg = "";
        this.loginForm = this.formBuilder.group({
            url: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loaderService.getConfigFile().subscribe(res => {
            this.crUrls = res["CRUrls"];
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    authenticate() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.CRService.authentication(this.f.url.value, this.f.username.value, this.f.password.value).subscribe(res => {
            this.user.password = this.f.password.value;
            this.user.username = this.f.username.value;
            this.user.token = res["token"];
            this.user.firstName = res["user"]["firstName"];
            this.user.lastName = res["user"]["lastName"];
            this.user.email = res["user"]["email"];
            this.user.userId = res["user.id"];
            this.user.crUrl = this.f.url.value;
            this.userService.setUser(this.user);
            this.nextPage = true;
            this.errormsg = "";
            this.zone.run(() => {
                this.route.navigate(['/bot-pop-up']);
            });
        }, err => {
            this.errormsg = " Cannot Login! Check Credentials again";
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_control_room_service__WEBPACK_IMPORTED_MODULE_3__["ControlRoomService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_loaders_service__WEBPACK_IMPORTED_MODULE_6__["LoadersService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



let LogoutComponent = class LogoutComponent {
    constructor(userService) {
        this.userService = userService;
        this.user = {};
    }
    ngOnInit() {
        this.userService.setUser(this.user);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/services/control-room.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/control-room.service.ts ***!
  \**************************************************/
/*! exports provided: ControlRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlRoomService", function() { return ControlRoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ControlRoomService = class ControlRoomService {
    constructor(http) {
        this.http = http;
    }
    authentication(CRUrl, user, password) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        let options = { headers: headers };
        return this.http.post(CRUrl + "/v1/authentication", {
            username: user,
            password: password
        }, options);
    }
    verifyToken(user) {
        return this.http.get(user.crUrl + '/v1/authentication/token?token=' + user.token);
    }
    getDeviceList(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Authorization": user.token
        });
        return this.http.post(user.crUrl + "/v2/devices/list", {
            "filter": {
                "value": user.userId,
                "field": "userId"
            }
        }, { headers: headers });
    }
    getFileID(user, path) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Authorization": user.token
        });
        return this.http.post(user.crUrl + "/v2/repository/file/list", {
            "fields": [
                "path"
            ],
            "filter": {
                "operator": "eq",
                "field": "path",
                "value": path
            }
        }, { headers: headers });
    }
    deploymentWithVariables(botVariables, fileId, deviceId, fields, user) {
        console.log(botVariables);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Authorization": user.token
        });
        return this.http.post(user.crUrl + "/v2/automations/deploy", {
            "fileId": fileId,
            "deviceIds": [
                deviceId
            ],
            "runWithRdp": false,
            botVariables
        }, { headers: headers });
    }
};
ControlRoomService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControlRoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ControlRoomService);



/***/ }),

/***/ "./src/app/services/loaders.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loaders.service.ts ***!
  \*********************************************/
/*! exports provided: LoadersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersService", function() { return LoadersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoadersService = class LoadersService {
    constructor(http) {
        this.http = http;
    }
    getConfigFile() {
        return this.http.get('/assets/configuration/configuration.json');
    }
};
LoadersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoadersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoadersService);



/***/ }),

/***/ "./src/app/services/resolver.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resolver.service.ts ***!
  \**********************************************/
/*! exports provided: ResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverService", function() { return ResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _control_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-room.service */ "./src/app/services/control-room.service.ts");





let ResolverService = class ResolverService {
    constructor(userService, CRService, router, zone) {
        this.userService = userService;
        this.CRService = CRService;
        this.router = router;
        this.zone = zone;
        this.user = {};
    }
    resolve(route) {
        this.userService.getUser().subscribe((res) => {
            this.user = res;
            if (Object.values(this.user).length !== 0) {
                this.CRService.verifyToken(this.user).subscribe(obj => {
                    console.log('resolver', obj);
                    if (obj['valid'] === false) {
                        this.zone.run(() => {
                            this.router.navigate(['/login']);
                            let newUser = {};
                            this.userService.setUser(newUser);
                        });
                    }
                    else {
                        this.userService.userSubscribe().next(this.user);
                    }
                });
                return this.user;
            }
            else {
                this.zone.run(() => {
                    this.router.navigate(['/login']);
                    const newUser = {};
                    this.userService.setUser(newUser);
                });
                return false;
            }
        });
    }
};
ResolverService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _control_room_service__WEBPACK_IMPORTED_MODULE_4__["ControlRoomService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ResolverService);



/***/ }),

/***/ "./src/app/services/user-history.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-history.service.ts ***!
  \**************************************************/
/*! exports provided: UserHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryService", function() { return UserHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



/// <reference path="node_modules\@types\chrome\index.d.ts"/>
const CHROME = chrome;
let UserHistoryService = class UserHistoryService {
    constructor() {
        this.userHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    setUserHistory(newUserHistory, user) {
        const obj = {};
        let tempUserHistory = [];
        this.getUserHistory(user).subscribe((res) => {
            if (res.length === 0) {
                tempUserHistory.push(newUserHistory);
                this.userHistory.next(tempUserHistory);
                obj[user] = tempUserHistory;
                CHROME.storage.local.set(obj, function () { });
            }
            else if (res.length === 10) {
                tempUserHistory = res;
                tempUserHistory.shift();
                tempUserHistory.push(newUserHistory);
                obj[user] = tempUserHistory;
                this.userHistory.next(tempUserHistory);
                CHROME.storage.local.set(obj, function () { });
            }
            else {
                tempUserHistory = res;
                tempUserHistory.push(newUserHistory);
                obj[user] = tempUserHistory;
                this.userHistory.next(tempUserHistory);
                CHROME.storage.local.set(obj, function () { });
            }
        });
    }
    getUserHistory(user) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observe => {
            CHROME.storage.local.get(user, function (result) {
                let botHistory = [];
                console.log('get userHistory:', result);
                if (result[user]) {
                    botHistory = result[user];
                    console.log(botHistory);
                }
                observe.next(botHistory);
                // observe.complete();
            });
        });
    }
    subscribeUserHistory() {
        return this.userHistory;
    }
};
UserHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserHistoryService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



/// <reference path="node_modules\@types\chrome\index.d.ts"/>
const CHROME = chrome;
let UserService = class UserService {
    constructor() {
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    setUser(newUser) {
        let obj = {};
        obj['user'] = newUser;
        CHROME.storage.local.set(obj, function () { });
        this.user.next(newUser);
    }
    userSubscribe() {
        return this.user;
    }
    getUser() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observe => {
            CHROME.storage.local.get(['user'], function (result) {
                console.log('get user:', result);
                if (result.user) {
                    this.user = result['user'];
                }
                observe.next(this.user);
                observe.complete();
            });
        });
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Inspiron\ChromeExtension\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map