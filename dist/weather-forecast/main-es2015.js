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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _daily_daily_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily/daily.component */ "./src/app/daily/daily.component.ts");



class AppComponent {
    constructor() {
        this.title = 'weather-forecast';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-daily");
    } }, directives: [_daily_daily_component__WEBPACK_IMPORTED_MODULE_1__["DailyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _daily_daily_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./daily/daily.component */ "./src/app/daily/daily.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _svg_day_background_day_background_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/day-background/day-background.component */ "./src/app/svg/day-background/day-background.component.ts");
/* harmony import */ var _svg_night_background_night_background_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/night-background/night-background.component */ "./src/app/svg/night-background/night-background.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _daily_daily_component__WEBPACK_IMPORTED_MODULE_4__["DailyComponent"],
        _svg_day_background_day_background_component__WEBPACK_IMPORTED_MODULE_8__["DayBackgroundComponent"],
        _svg_night_background_night_background_component__WEBPACK_IMPORTED_MODULE_9__["NightBackgroundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _daily_daily_component__WEBPACK_IMPORTED_MODULE_4__["DailyComponent"],
                    _svg_day_background_day_background_component__WEBPACK_IMPORTED_MODULE_8__["DayBackgroundComponent"],
                    _svg_night_background_night_background_component__WEBPACK_IMPORTED_MODULE_9__["NightBackgroundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/daily/daily.component.ts":
/*!******************************************!*\
  !*** ./src/app/daily/daily.component.ts ***!
  \******************************************/
/*! exports provided: DailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyComponent", function() { return DailyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/weather.service */ "./src/app/service/weather.service.ts");
/* harmony import */ var _svg_night_background_night_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/night-background/night-background.component */ "./src/app/svg/night-background/night-background.component.ts");




class DailyComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    ngOnInit() {
        this.weatherService.getData().subscribe((data) => {
            console.log(data);
            this.currentTemperature = data[4].temp;
            this.currentFeelsTemperature = data[4].feels_like;
            this.currentWeather = data[4].weather[0].description;
        });
    }
}
DailyComponent.ɵfac = function DailyComponent_Factory(t) { return new (t || DailyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_weather_service__WEBPACK_IMPORTED_MODULE_1__["weatherService"])); };
DailyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyComponent, selectors: [["app-daily"]], decls: 7, vars: 3, template: function DailyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-night-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTemperature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentFeelsTemperature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentWeather);
    } }, directives: [_svg_night_background_night_background_component__WEBPACK_IMPORTED_MODULE_2__["NightBackgroundComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbHkvUDpcXHByb2pla3R5XFx3ZWF0aGVyLWZvcmVjYXN0L3NyY1xcYXBwXFxkYWlseVxcZGFpbHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RhaWx5L2RhaWx5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RhaWx5L2RhaWx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iLCJoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily',
                templateUrl: './daily.component.html',
                styleUrls: ['./daily.component.scss'],
            }]
    }], function () { return [{ type: _service_weather_service__WEBPACK_IMPORTED_MODULE_1__["weatherService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/weather.service.ts ***!
  \********************************************/
/*! exports provided: weatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherService", function() { return weatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class weatherService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=52.0887&lon=17.01506&units=metric&exclude=daily,hourly,weekly,minutely&appid=${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((responseData) => {
            const postsArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    postsArray.push(Object.assign(Object.assign({}, responseData[key]), { id: key }));
                }
            }
            return postsArray;
        }));
    }
}
weatherService.ɵfac = function weatherService_Factory(t) { return new (t || weatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
weatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: weatherService, factory: weatherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](weatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/svg/day-background/day-background.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/svg/day-background/day-background.component.ts ***!
  \****************************************************************/
/*! exports provided: DayBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBackgroundComponent", function() { return DayBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DayBackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
DayBackgroundComponent.ɵfac = function DayBackgroundComponent_Factory(t) { return new (t || DayBackgroundComponent)(); };
DayBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayBackgroundComponent, selectors: [["app-day-background"]], decls: 304, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "width", "155.956mm", "height", "279.4mm", "version", "1.1", "viewBox", "0 0 15596 27940", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "shape-rendering", "geometricPrecision", "text-rendering", "geometricPrecision", "image-rendering", "optimizeQuality", "fill-rule", "evenodd", "clip-rule", "evenodd"], ["type", "text/css"], ["id", "id0"], ["d", "M12857 4545c987,0 1787,800 1787,1787 0,987 -800,1787 -1787,1787 -986,0 -1787,-800 -1787,-1787 0,-987 801,-1787 1787,-1787z"], ["id", "id1", "gradientUnits", "userSpaceOnUse", "x1", "11369", "y1", "18072.8", "x2", "11547.4", "y2", "12725.9"], ["offset", "0", 2, "stop-opacity", "1", "stop-color", "#9E9D24"], ["offset", "0.831373", 2, "stop-opacity", "1", "stop-color", "#CECE91"], ["offset", "1", 2, "stop-opacity", "1", "stop-color", "white"], ["id", "id2", "gradientUnits", "userSpaceOnUse", 0, "xlink", "href", "#id1", "x1", "11369", "y1", "18072.8", "x2", "11547.4", "y2", "12725.9"], ["id", "id3", "gradientUnits", "userSpaceOnUse", "x1", "9069.62", "y1", "18900", "x2", "9273.05", "y2", "12336"], ["offset", "0.921569", 2, "stop-opacity", "1", "stop-color", "#CECE91"], ["id", "id4", "gradientUnits", "userSpaceOnUse", "x1", "13473.5", "y1", "17716", "x2", "14536.6", "y2", "10256.6"], ["offset", "0.788235", 2, "stop-opacity", "1", "stop-color", "#CECE91"], ["id", "id5", "gradientUnits", "userSpaceOnUse", "x1", "9069.78", "y1", "18839.5", "x2", "9299.08", "y2", "12069.4"], ["offset", "0.909804", 2, "stop-opacity", "1", "stop-color", "#CECE91"], ["id", "id6", "gradientUnits", "userSpaceOnUse", "x1", "7816.42", "y1", "17412.3", "x2", "8004.77", "y2", "-12346.2"], ["offset", "0", 2, "stop-opacity", "1", "stop-color", "#FFD740"], ["offset", "0.988235", 2, "stop-opacity", "1", "stop-color", "#60ACC4"], ["offset", "1", 2, "stop-opacity", "1", "stop-color", "#CCCF2C"], ["id", "id7", "gradientUnits", "userSpaceOnUse", "x1", "2475.05", "y1", "21465.9", "x2", "2874.21", "y2", "12108.6"], ["offset", "0", 2, "stop-opacity", "1", "stop-color", "#DBBB3B"], ["offset", "0.309804", 2, "stop-opacity", "1", "stop-color", "#8DCB32"], ["offset", "1", 2, "stop-opacity", "1", "stop-color", "#3FDB28"], ["id", "Warstwa_x0020_1"], ["id", "CorelCorpID_0Corel-Layer"], ["d", "M15217 27992l-14839 0c-356,0 -645,-287 -645,-641l0 -27256c0,-354 289,-641 645,-641l14839 0c357,0 645,287 645,641l0 27254c2,356 -286,643 -645,643z", 1, "fil0"], ["d", "M-267 16093c0,0 4293,-823 9858,2955 5783,4113 4196,6117 4196,6117l-14054 -617 0 -8455z", 1, "fil1"], ["id", "_2796627363120"], ["d", "M8935 17198c153,445 146,924 138,1396 -2,95 -3,190 -3,306l-124 0c0,-88 2,-198 4,-308 7,-461 15,-928 -132,-1354l117 -40z", 1, "fil2"], ["d", "M9015 15367l0 0 0 1c290,0 566,74 775,224 227,163 372,408 372,737l1 0 0 0 0 0 -1 0c0,309 -124,588 -326,790 -202,201 -481,326 -790,326l0 1 0 0 0 0 0 -1c-309,0 -588,-125 -790,-326 -201,-202 -326,-481 -326,-790l-1 0 0 0 0 0 1 0c0,-322 125,-566 333,-731 194,-154 457,-230 752,-230l0 -1 0 0zm0 494l0 1 0 0 0 0 0 -1c-186,0 -342,41 -447,124 -91,72 -145,186 -145,344l1 0 0 0 0 0 -1 0c0,171 70,327 183,440 113,113 269,183 440,183l0 -1 0 0 0 0 0 1c171,0 327,-70 440,-183 113,-113 183,-269 183,-440l-1 0 0 0 0 0 1 0c0,-152 -65,-264 -167,-337 -122,-88 -296,-131 -487,-131z", 1, "fil3"], ["id", "_2796627360080"], ["d", "M11181 17023c-30,206 -50,397 -49,585 1,188 22,375 74,574l-119 31c-55,-210 -77,-406 -78,-604 -1,-197 19,-393 50,-603l122 17z", 1, "fil4"], ["d", "M11091 15955l1 0 0 1c197,0 375,79 504,208 128,128 208,306 208,504l1 0 0 0c0,197 -52,348 -163,458 -109,109 -260,161 -457,161l0 1 0 0 0 -1c-168,0 -352,-39 -498,-122 -181,-102 -308,-265 -308,-497l-1 0 0 0 0 0 1 0c0,-198 80,-376 208,-504 129,-129 307,-208 504,-208l0 -1 0 0zm1 494l0 0 -1 0 0 0 0 0c-59,0 -114,24 -154,64 -40,41 -65,95 -65,155l1 0 0 0 0 0 -1 0c0,25 24,49 58,68 70,40 165,58 255,58l0 -1 0 0 0 1c59,0 95,-6 108,-18 11,-12 17,-48 17,-108l0 0 1 0c0,-60 -25,-114 -65,-155 -40,-40 -95,-64 -154,-64z", 1, "fil5"], ["d", "M12190 18707c90,-345 174,-702 242,-1091 58,-330 105,-679 134,-1057l-198 -29 29 -213 137 -1019 8 -54 31 -44 157 -220 178 -250 161 228 449 -860 236 -453 163 485c69,205 126,413 167,625 13,71 25,143 34,215l161 -134 124 243 171 336 35 67 -16 75 -211 1023 -34 165 -167 8c-118,358 -210,708 -282,1052 -81,388 -136,767 -174,1142l-433 -45c40,-388 97,-783 181,-1186 85,-404 196,-817 345,-1244l48 -138 124 -6 162 -783 -13 -26 -72 60 -361 301 4 -470c2,-193 -18,-385 -54,-575 -3,-15 -6,-30 -9,-46l-358 686 -164 316 -184 -260 -85 630 170 25 -12 200c-29,477 -82,906 -153,1305 -69,396 -156,767 -251,1126l-420 -110z", 1, "fil6"], ["d", "M-307 27859c0,327 290,592 648,592l14915 0c358,0 649,-265 649,-592l0 -9711c-7667,-1287 -16127,3018 -16127,3018l-87 6693 2 0z", 1, "fil7"], ["id", "_2796627358096"], [2, "clip-path", "url(#id0)"], ["points", "11070,4545 14644,4545 14644,8119 11070,8119 ", 1, "fil8"], ["id", "1", "points", "12847,6321 12868,6321 12868,6342 12847,6342 ", 1, "fil9"], ["id", "2", "d", "M12851 6325l0 14 13 0 0 -14 -13 0zm-11 -11l35 0 0 35 -35 0 0 -35z", 1, "fil10"], ["id", "3", "d", "M12844 6318l0 28 27 0 0 -28 -27 0zm-11 -11l49 0 0 49 -49 0 0 -49z", 1, "fil10"], ["id", "4", "d", "M12837 6311l0 42 41 0 0 -42 -41 0zm-11 -11l63 0 0 63 -63 0 0 -63z", 1, "fil11"], ["id", "5", "d", "M12830 6304l0 56 55 0 0 -56 -55 0zm-11 -11l77 0 0 77 -77 0 0 -77z", 1, "fil12"], ["id", "6", "d", "M12823 6297l0 70 69 0 0 -70 -69 0zm-11 -11l91 0 0 91 -91 0 0 -91z", 1, "fil13"], ["id", "7", "d", "M12816 6290l0 84 83 0 0 -84 -83 0zm-11 -11l105 0 0 105 -105 0 0 -105z", 1, "fil13"], ["id", "8", "d", "M12809 6283l0 98 97 0 0 -98 -97 0zm-11 -11l119 0 0 119 -119 0 0 -119z", 1, "fil14"], ["id", "9", "d", "M12802 6276l0 112 111 0 0 -112 -111 0zm-11 -11l133 0 0 133 -133 0 0 -133z", 1, "fil15"], ["id", "10", "d", "M12795 6269l0 126 125 0 0 -126 -125 0zm-11 -11l147 0 0 147 -147 0 0 -147z", 1, "fil15"], ["id", "11", "d", "M12788 6262l0 140 139 0 0 -140 -139 0zm-11 -11l161 0 0 161 -161 0 0 -161z", 1, "fil15"], ["id", "12", "d", "M12781 6255l0 153 153 0 0 -153 -153 0zm-11 -11l175 0 0 175 -175 0 0 -175z", 1, "fil15"], ["id", "13", "d", "M12774 6248l0 167 167 0 0 -167 -167 0zm-11 -11l189 0 0 189 -189 0 0 -189z", 1, "fil16"], ["id", "14", "d", "M12767 6241l0 181 181 0 0 -181 -181 0zm-11 -11l203 0 0 203 -203 0 0 -203z", 1, "fil17"], ["id", "15", "d", "M12760 6234l0 195 195 0 0 -195 -195 0zm-11 -10l217 0 0 216 -217 0 0 -216z", 1, "fil17"], ["id", "16", "d", "M12753 6227l0 209 209 0 0 -209 -209 0zm-11 -10l231 0 0 230 -231 0 0 -230z", 1, "fil18"], ["id", "17", "d", "M12746 6220l0 223 223 0 0 -223 -223 0zm-11 -10l245 0 0 244 -245 0 0 -244z", 1, "fil18"], ["id", "18", "d", "M12739 6213l0 237 237 0 0 -237 -237 0zm-11 -10l259 0 0 258 -259 0 0 -258z", 1, "fil18"], ["id", "19", "d", "M12732 6206l0 251 251 0 0 -251 -251 0zm-11 -10l273 0 0 272 -273 0 0 -272z", 1, "fil19"], ["id", "20", "d", "M12725 6199l0 265 265 0 0 -265 -265 0zm-11 -10l287 0 0 286 -287 0 0 -286z", 1, "fil19"], ["id", "21", "d", "M12718 6192l0 279 279 0 0 -279 -279 0zm-11 -10l301 0 0 300 -301 0 0 -300z", 1, "fil20"], ["id", "22", "d", "M12711 6185l0 293 293 0 0 -293 -293 0zm-11 -10l315 0 0 314 -315 0 0 -314z", 1, "fil21"], ["id", "23", "d", "M12704 6178l0 307 307 0 0 -307 -307 0zm-11 -10l329 0 0 328 -329 0 0 -328z", 1, "fil21"], ["id", "24", "d", "M12697 6171l0 321 321 0 0 -321 -321 0zm-11 -10l343 0 0 342 -343 0 0 -342z", 1, "fil22"], ["id", "25", "d", "M12690 6164l0 335 335 0 0 -335 -335 0zm-11 -10l356 0 0 356 -356 0 0 -356z", 1, "fil22"], ["id", "26", "d", "M12683 6157l0 349 349 0 0 -349 -349 0zm-10 -10l369 0 0 370 -369 0 0 -370z", 1, "fil23"], ["id", "27", "d", "M12676 6150l0 363 363 0 0 -363 -363 0zm-10 -10l383 0 0 384 -383 0 0 -384z", 1, "fil23"], ["id", "28", "d", "M12669 6143l0 377 377 0 0 -377 -377 0zm-10 -10l397 0 0 398 -397 0 0 -398z", 1, "fil23"], ["id", "29", "d", "M12662 6136l0 391 391 0 0 -391 -391 0zm-10 -10l411 0 0 412 -411 0 0 -412z", 1, "fil24"], ["id", "30", "d", "M12655 6129l0 405 405 0 0 -405 -405 0zm-10 -10l425 0 0 426 -425 0 0 -426z", 1, "fil25"], ["id", "31", "d", "M12648 6122l0 419 419 0 0 -419 -419 0zm-10 -10l439 0 0 440 -439 0 0 -440z", 1, "fil25"], ["id", "32", "d", "M12641 6115l0 433 433 0 0 -433 -433 0zm-10 -10l453 0 0 454 -453 0 0 -454z", 1, "fil25"], ["id", "33", "d", "M12634 6108l0 447 447 0 0 -447 -447 0zm-10 -10l467 0 0 468 -467 0 0 -468z", 1, "fil25"], ["id", "34", "d", "M12627 6101l0 461 461 0 0 -461 -461 0zm-10 -10l481 0 0 482 -481 0 0 -482z", 1, "fil25"], ["id", "35", "d", "M12620 6094l0 475 475 0 0 -475 -475 0zm-10 -10l495 0 0 496 -495 0 0 -496z", 1, "fil26"], ["id", "36", "d", "M12613 6087l0 489 489 0 0 -489 -489 0zm-10 -10l509 0 0 509 -509 0 0 -509z", 1, "fil27"], ["id", "37", "d", "M12606 6080l0 503 503 0 0 -503 -503 0zm-10 -10l523 0 0 523 -523 0 0 -523z", 1, "fil27"], ["id", "38", "d", "M12599 6073l0 517 517 0 0 -517 -517 0zm-10 -10l537 0 0 537 -537 0 0 -537z", 1, "fil27"], ["id", "39", "d", "M12592 6066l0 531 531 0 0 -531 -531 0zm-10 -10l551 0 0 551 -551 0 0 -551z", 1, "fil27"], ["id", "40", "d", "M12585 6059l0 545 545 0 0 -545 -545 0zm-10 -10l565 0 0 565 -565 0 0 -565z", 1, "fil28"], ["id", "41", "d", "M12578 6052l0 559 559 0 0 -559 -559 0zm-10 -10l579 0 0 579 -579 0 0 -579z", 1, "fil28"], ["id", "42", "d", "M12571 6046l0 572 573 0 0 -572 -573 0zm-10 -11l593 0 0 593 -593 0 0 -593z", 1, "fil28"], ["id", "43", "d", "M12564 6039l0 586 587 0 0 -586 -587 0zm-10 -11l607 0 0 607 -607 0 0 -607z", 1, "fil28"], ["id", "44", "d", "M12557 6032l0 600 601 0 0 -600 -601 0zm-10 -11l621 0 0 621 -621 0 0 -621z", 1, "fil29"], ["id", "45", "d", "M12550 6025l0 614 615 0 0 -614 -615 0zm-10 -11l635 0 0 635 -635 0 0 -635z", 1, "fil30"], ["id", "46", "d", "M12543 6018l0 628 629 0 0 -628 -629 0zm-10 -11l649 0 0 649 -649 0 0 -649z", 1, "fil31"], ["id", "47", "d", "M12536 6011l0 642 643 0 0 -642 -643 0zm-10 -11l663 0 0 663 -663 0 0 -663z", 1, "fil31"], ["id", "48", "d", "M12529 6004l0 656 657 0 0 -656 -657 0zm-10 -11l677 0 0 677 -677 0 0 -677z", 1, "fil32"], ["id", "49", "d", "M12522 5997l0 670 671 0 0 -670 -671 0zm-10 -11l691 0 0 691 -691 0 0 -691z", 1, "fil32"], ["id", "50", "d", "M12515 5990l0 684 685 0 0 -684 -685 0zm-10 -11l705 0 0 705 -705 0 0 -705z", 1, "fil33"], ["id", "51", "d", "M12508 5983l0 698 699 0 0 -698 -699 0zm-10 -11l719 0 0 719 -719 0 0 -719z", 1, "fil33"], ["id", "52", "d", "M12501 5976l0 712 712 0 0 -712 -712 0zm-10 -11l733 0 0 733 -733 0 0 -733z", 1, "fil34"], ["id", "53", "d", "M12495 5969l0 726 725 0 0 -726 -725 0zm-11 -11l747 0 0 747 -747 0 0 -747z", 1, "fil34"], ["id", "54", "d", "M12488 5962l0 740 739 0 0 -740 -739 0zm-11 -11l761 0 0 761 -761 0 0 -761z", 1, "fil34"], ["id", "55", "d", "M12481 5955l0 754 753 0 0 -754 -753 0zm-11 -11l775 0 0 775 -775 0 0 -775z", 1, "fil35"], ["id", "56", "d", "M12474 5948l0 768 767 0 0 -768 -767 0zm-11 -11l789 0 0 789 -789 0 0 -789z", 1, "fil35"], ["id", "57", "d", "M12467 5941l0 782 781 0 0 -782 -781 0zm-11 -11l803 0 0 803 -803 0 0 -803z", 1, "fil35"], ["id", "58", "d", "M12460 5934l0 796 795 0 0 -796 -795 0zm-11 -11l817 0 0 817 -817 0 0 -817z", 1, "fil35"], ["id", "59", "d", "M12453 5927l0 810 809 0 0 -810 -809 0zm-11 -11l831 0 0 831 -831 0 0 -831z", 1, "fil36"], ["id", "60", "d", "M12446 5920l0 824 823 0 0 -824 -823 0zm-11 -11l845 0 0 845 -845 0 0 -845z", 1, "fil37"], ["id", "61", "d", "M12439 5913l0 838 837 0 0 -838 -837 0zm-11 -11l859 0 0 859 -859 0 0 -859z", 1, "fil37"], ["id", "62", "d", "M12432 5906l0 852 851 0 0 -852 -851 0zm-11 -11l873 0 0 873 -873 0 0 -873z", 1, "fil38"], ["id", "63", "d", "M12425 5899l0 865 865 0 0 -865 -865 0zm-11 -11l887 0 0 887 -887 0 0 -887z", 1, "fil38"], ["id", "64", "d", "M12418 5892l0 879 879 0 0 -879 -879 0zm-11 -11l901 0 0 901 -901 0 0 -901z", 1, "fil38"], ["id", "65", "d", "M12411 5885l0 893 893 0 0 -893 -893 0zm-11 -11l915 0 0 915 -915 0 0 -915z", 1, "fil39"], ["id", "66", "d", "M12404 5878l0 907 907 0 0 -907 -907 0zm-11 -10l929 0 0 928 -929 0 0 -928z", 1, "fil39"], ["id", "67", "d", "M12397 5871l0 921 921 0 0 -921 -921 0zm-11 -10l943 0 0 942 -943 0 0 -942z", 1, "fil40"], ["id", "68", "d", "M12390 5864l0 935 935 0 0 -935 -935 0zm-11 -10l957 0 0 956 -957 0 0 -956z", 1, "fil40"], ["id", "69", "d", "M12383 5857l0 949 949 0 0 -949 -949 0zm-11 -10l971 0 0 970 -971 0 0 -970z", 1, "fil40"], ["id", "70", "d", "M12376 5850l0 963 963 0 0 -963 -963 0zm-11 -10l985 0 0 984 -985 0 0 -984z", 1, "fil41"], ["id", "71", "d", "M12369 5843l0 977 977 0 0 -977 -977 0zm-11 -10l999 0 0 998 -999 0 0 -998z", 1, "fil41"], ["id", "72", "d", "M12362 5836l0 991 991 0 0 -991 -991 0zm-11 -10l1013 0 0 1012 -1013 0 0 -1012z", 1, "fil41"], ["id", "73", "d", "M12355 5829l0 1005 1005 0 0 -1005 -1005 0zm-11 -10l1027 0 0 1026 -1027 0 0 -1026z", 1, "fil41"], ["id", "74", "d", "M12348 5822l0 1019 1019 0 0 -1019 -1019 0zm-11 -10l1041 0 0 1040 -1041 0 0 -1040z", 1, "fil41"], ["id", "75", "d", "M12341 5815l0 1033 1033 0 0 -1033 -1033 0zm-11 -10l1055 0 0 1054 -1055 0 0 -1054z", 1, "fil42"], ["id", "76", "d", "M12334 5808l0 1047 1047 0 0 -1047 -1047 0zm-11 -10l1068 0 0 1068 -1068 0 0 -1068z", 1, "fil42"], ["id", "77", "d", "M12327 5801l0 1061 1061 0 0 -1061 -1061 0zm-10 -10l1081 0 0 1082 -1081 0 0 -1082z", 1, "fil42"], ["id", "78", "d", "M12320 5794l0 1075 1075 0 0 -1075 -1075 0zm-10 -10l1095 0 0 1096 -1095 0 0 -1096z", 1, "fil42"], ["id", "79", "d", "M12313 5787l0 1089 1089 0 0 -1089 -1089 0zm-10 -10l1109 0 0 1110 -1109 0 0 -1110z", 1, "fil42"], ["id", "80", "d", "M12306 5780l0 1103 1103 0 0 -1103 -1103 0zm-10 -10l1123 0 0 1124 -1123 0 0 -1124z", 1, "fil42"], ["id", "81", "d", "M12299 5773l0 1117 1117 0 0 -1117 -1117 0zm-10 -10l1137 0 0 1138 -1137 0 0 -1138z", 1, "fil43"], ["id", "82", "d", "M12292 5766l0 1131 1131 0 0 -1131 -1131 0zm-10 -10l1151 0 0 1152 -1151 0 0 -1152z", 1, "fil43"], ["id", "83", "d", "M12285 5759l0 1145 1145 0 0 -1145 -1145 0zm-10 -10l1165 0 0 1166 -1165 0 0 -1166z", 1, "fil44"], ["id", "84", "d", "M12278 5752l0 1159 1159 0 0 -1159 -1159 0zm-10 -10l1179 0 0 1180 -1179 0 0 -1180z", 1, "fil44"], ["id", "85", "d", "M12271 5745l0 1173 1173 0 0 -1173 -1173 0zm-10 -10l1193 0 0 1194 -1193 0 0 -1194z", 1, "fil45"], ["id", "86", "d", "M12264 5738l0 1187 1187 0 0 -1187 -1187 0zm-10 -10l1207 0 0 1208 -1207 0 0 -1208z", 1, "fil46"], ["id", "87", "d", "M12257 5731l0 1201 1201 0 0 -1201 -1201 0zm-10 -10l1221 0 0 1221 -1221 0 0 -1221z", 1, "fil46"], ["id", "88", "d", "M12250 5724l0 1215 1215 0 0 -1215 -1215 0zm-10 -10l1235 0 0 1235 -1235 0 0 -1235z", 1, "fil46"], ["id", "89", "d", "M12243 5717l0 1229 1229 0 0 -1229 -1229 0zm-10 -10l1249 0 0 1249 -1249 0 0 -1249z", 1, "fil47"], ["id", "90", "d", "M12236 5710l0 1243 1243 0 0 -1243 -1243 0zm-10 -10l1263 0 0 1263 -1263 0 0 -1263z", 1, "fil48"], ["id", "91", "d", "M12229 5703l0 1257 1257 0 0 -1257 -1257 0zm-10 -10l1277 0 0 1277 -1277 0 0 -1277z", 1, "fil49"], ["id", "92", "d", "M12222 5696l0 1271 1271 0 0 -1271 -1271 0zm-10 -10l1291 0 0 1291 -1291 0 0 -1291z", 1, "fil49"], ["id", "93", "d", "M12215 5690l0 1284 1285 0 0 -1284 -1285 0zm-10 -11l1305 0 0 1305 -1305 0 0 -1305z", 1, "fil49"], ["id", "94", "d", "M12208 5683l0 1298 1299 0 0 -1298 -1299 0zm-10 -11l1319 0 0 1319 -1319 0 0 -1319z", 1, "fil49"], ["id", "95", "d", "M12201 5676l0 1312 1313 0 0 -1312 -1313 0zm-10 -11l1333 0 0 1333 -1333 0 0 -1333z", 1, "fil50"], ["id", "96", "d", "M12194 5669l0 1326 1327 0 0 -1326 -1327 0zm-10 -11l1347 0 0 1347 -1347 0 0 -1347z", 1, "fil51"], ["id", "97", "d", "M12187 5662l0 1340 1341 0 0 -1340 -1341 0zm-10 -11l1361 0 0 1361 -1361 0 0 -1361z", 1, "fil51"], ["id", "98", "d", "M12180 5655l0 1354 1355 0 0 -1354 -1355 0zm-10 -11l1375 0 0 1375 -1375 0 0 -1375z", 1, "fil52"], ["id", "99", "d", "M12173 5648l0 1368 1369 0 0 -1368 -1369 0zm-10 -11l1389 0 0 1389 -1389 0 0 -1389z", 1, "fil52"], ["id", "100", "d", "M12166 5641l0 1382 1383 0 0 -1382 -1383 0zm-10 -11l1403 0 0 1403 -1403 0 0 -1403z", 1, "fil52"], ["id", "101", "d", "M12159 5634l0 1396 1397 0 0 -1396 -1397 0zm-10 -11l1417 0 0 1417 -1417 0 0 -1417z", 1, "fil53"], ["id", "102", "d", "M12152 5627l0 1410 1411 0 0 -1410 -1411 0zm-10 -11l1431 0 0 1431 -1431 0 0 -1431z", 1, "fil54"], ["id", "103", "d", "M12145 5620l0 1424 1425 0 0 -1424 -1425 0zm-10 -11l1445 0 0 1445 -1445 0 0 -1445z", 1, "fil54"], ["id", "104", "d", "M12139 5613l0 1438 1437 0 0 -1438 -1437 0zm-11 -11l1459 0 0 1459 -1459 0 0 -1459z", 1, "fil55"], ["id", "105", "d", "M12132 5606l0 1452 1451 0 0 -1452 -1451 0zm-11 -11l1473 0 0 1473 -1473 0 0 -1473z", 1, "fil55"], ["id", "106", "d", "M12125 5599l0 1466 1465 0 0 -1466 -1465 0zm-11 -11l1487 0 0 1487 -1487 0 0 -1487z", 1, "fil56"], ["id", "107", "d", "M12118 5592l0 1480 1479 0 0 -1480 -1479 0zm-11 -11l1501 0 0 1501 -1501 0 0 -1501z", 1, "fil56"], ["id", "108", "d", "M12111 5585l0 1494 1493 0 0 -1494 -1493 0zm-11 -11l1515 0 0 1515 -1515 0 0 -1515z", 1, "fil56"], ["id", "109", "d", "M12104 5578l0 1508 1507 0 0 -1508 -1507 0zm-11 -11l1529 0 0 1529 -1529 0 0 -1529z", 1, "fil56"], ["id", "110", "d", "M12097 5571l0 1522 1521 0 0 -1522 -1521 0zm-11 -11l1543 0 0 1543 -1543 0 0 -1543z", 1, "fil56"], ["id", "111", "d", "M12090 5564l0 1536 1535 0 0 -1536 -1535 0zm-11 -11l1557 0 0 1557 -1557 0 0 -1557z", 1, "fil57"], ["id", "112", "d", "M12083 5557l0 1550 1549 0 0 -1550 -1549 0zm-11 -11l1571 0 0 1571 -1571 0 0 -1571z", 1, "fil57"], ["id", "113", "d", "M12076 5550l0 1564 1563 0 0 -1564 -1563 0zm-11 -11l1585 0 0 1585 -1585 0 0 -1585z", 1, "fil57"], ["id", "114", "d", "M12069 5543l0 1577 1577 0 0 -1577 -1577 0zm-11 -11l1599 0 0 1599 -1599 0 0 -1599z", 1, "fil58"], ["id", "115", "d", "M12062 5536l0 1591 1591 0 0 -1591 -1591 0zm-11 -11l1613 0 0 1613 -1613 0 0 -1613z", 1, "fil58"], ["id", "116", "d", "M12055 5529l0 1605 1605 0 0 -1605 -1605 0zm-11 -11l1627 0 0 1627 -1627 0 0 -1627z", 1, "fil59"], ["id", "117", "d", "M12048 5522l0 1619 1619 0 0 -1619 -1619 0zm-11 -11l1641 0 0 1641 -1641 0 0 -1641z", 1, "fil59"], ["id", "118", "d", "M12041 5515l0 1633 1633 0 0 -1633 -1633 0zm-11 -10l1655 0 0 1654 -1655 0 0 -1654z", 1, "fil59"], ["id", "119", "d", "M12034 5508l0 1647 1647 0 0 -1647 -1647 0zm-11 -10l1669 0 0 1668 -1669 0 0 -1668z", 1, "fil59"], ["id", "120", "d", "M12027 5501l0 1661 1661 0 0 -1661 -1661 0zm-11 -10l1683 0 0 1682 -1683 0 0 -1682z", 1, "fil59"], ["id", "121", "d", "M12020 5494l0 1675 1675 0 0 -1675 -1675 0zm-11 -10l1697 0 0 1696 -1697 0 0 -1696z", 1, "fil60"], ["id", "122", "d", "M12013 5487l0 1689 1689 0 0 -1689 -1689 0zm-11 -10l1711 0 0 1710 -1711 0 0 -1710z", 1, "fil60"], ["id", "123", "d", "M12006 5480l0 1703 1703 0 0 -1703 -1703 0zm-11 -10l1725 0 0 1724 -1725 0 0 -1724z", 1, "fil60"], ["id", "124", "d", "M11999 5473l0 1717 1717 0 0 -1717 -1717 0zm-11 -10l1739 0 0 1738 -1739 0 0 -1738z", 1, "fil61"], ["id", "125", "d", "M11992 5466l0 1731 1731 0 0 -1731 -1731 0zm-11 -10l1753 0 0 1752 -1753 0 0 -1752z", 1, "fil61"], ["id", "126", "d", "M11985 5459l0 1745 1745 0 0 -1745 -1745 0zm-11 -10l1767 0 0 1766 -1767 0 0 -1766z", 1, "fil62"], ["id", "127", "d", "M11978 5452l0 1759 1759 0 0 -1759 -1759 0zm-11 -10l1781 0 0 1780 -1781 0 0 -1780z", 1, "fil62"], ["id", "128", "d", "M11971 5445l0 1773 1773 0 0 -1773 -1773 0zm-10 -10l1793 0 0 1794 -1793 0 0 -1794z", 1, "fil62"], ["id", "129", "d", "M11964 5438l0 1787 1787 0 0 -1787 -1787 0zm-10 -10l1807 0 0 1808 -1807 0 0 -1808z", 1, "fil63"], ["id", "130", "d", "M11957 5431l0 1801 1801 0 0 -1801 -1801 0zm-10 -10l1821 0 0 1822 -1821 0 0 -1822z", 1, "fil63"], ["id", "131", "d", "M11950 5424l0 1815 1815 0 0 -1815 -1815 0zm-10 -10l1835 0 0 1836 -1835 0 0 -1836z", 1, "fil63"], ["id", "132", "d", "M11943 5417l0 1829 1829 0 0 -1829 -1829 0zm-10 -10l1849 0 0 1850 -1849 0 0 -1850z", 1, "fil64"], ["id", "133", "d", "M11936 5410l0 1843 1843 0 0 -1843 -1843 0zm-10 -10l1863 0 0 1864 -1863 0 0 -1864z", 1, "fil64"], ["id", "134", "d", "M11929 5403l0 1857 1857 0 0 -1857 -1857 0zm-10 -10l1877 0 0 1878 -1877 0 0 -1878z", 1, "fil65"], ["id", "135", "d", "M11922 5396l0 1871 1871 0 0 -1871 -1871 0zm-10 -10l1891 0 0 1892 -1891 0 0 -1892z", 1, "fil65"], ["id", "136", "d", "M11915 5389l0 1885 1885 0 0 -1885 -1885 0zm-10 -10l1905 0 0 1906 -1905 0 0 -1906z", 1, "fil65"], ["id", "137", "d", "M11908 5382l0 1899 1899 0 0 -1899 -1899 0zm-10 -10l1919 0 0 1920 -1919 0 0 -1920z", 1, "fil66"], ["id", "138", "d", "M11901 5375l0 1913 1913 0 0 -1913 -1913 0zm-10 -10l1933 0 0 1934 -1933 0 0 -1934z", 1, "fil66"], ["id", "139", "d", "M11894 5368l0 1927 1927 0 0 -1927 -1927 0zm-10 -10l1947 0 0 1947 -1947 0 0 -1947z", 1, "fil66"], ["id", "140", "d", "M11887 5361l0 1941 1941 0 0 -1941 -1941 0zm-10 -10l1961 0 0 1961 -1961 0 0 -1961z", 1, "fil66"], ["id", "141", "d", "M11880 5354l0 1955 1955 0 0 -1955 -1955 0zm-10 -10l1975 0 0 1975 -1975 0 0 -1975z", 1, "fil66"], ["id", "142", "d", "M11873 5347l0 1969 1969 0 0 -1969 -1969 0zm-10 -10l1989 0 0 1989 -1989 0 0 -1989z", 1, "fil67"], ["id", "143", "d", "M11866 5340l0 1983 1983 0 0 -1983 -1983 0zm-10 -10l2003 0 0 2003 -2003 0 0 -2003z", 1, "fil67"], ["id", "144", "d", "M11859 5333l0 1997 1997 0 0 -1997 -1997 0zm-10 -10l2017 0 0 2017 -2017 0 0 -2017z", 1, "fil68"], ["id", "145", "d", "M11852 5327l0 2010 2011 0 0 -2010 -2011 0zm-10 -11l2031 0 0 2031 -2031 0 0 -2031z", 1, "fil68"], ["id", "146", "d", "M11845 5320l0 2024 2025 0 0 -2024 -2025 0zm-10 -11l2045 0 0 2045 -2045 0 0 -2045z", 1, "fil68"], ["id", "147", "d", "M11838 5313l0 2038 2039 0 0 -2038 -2039 0zm-10 -11l2059 0 0 2059 -2059 0 0 -2059z", 1, "fil69"], ["id", "148", "d", "M11831 5306l0 2052 2053 0 0 -2052 -2053 0zm-10 -11l2073 0 0 2073 -2073 0 0 -2073z", 1, "fil69"], ["id", "149", "d", "M11824 5299l0 2066 2067 0 0 -2066 -2067 0zm-10 -11l2087 0 0 2087 -2087 0 0 -2087z", 1, "fil69"], ["id", "150", "d", "M11817 5292l0 2080 2081 0 0 -2080 -2081 0zm-10 -11l2101 0 0 2101 -2101 0 0 -2101z", 1, "fil69"], ["id", "151", "d", "M11810 5285l0 2094 2095 0 0 -2094 -2095 0zm-10 -11l2115 0 0 2115 -2115 0 0 -2115z", 1, "fil69"], ["id", "152", "d", "M11803 5278l0 2108 2109 0 0 -2108 -2109 0zm-10 -11l2129 0 0 2129 -2129 0 0 -2129z", 1, "fil70"], ["id", "153", "d", "M11796 5271l0 2122 2123 0 0 -2122 -2123 0zm-10 -11l2143 0 0 2143 -2143 0 0 -2143z", 1, "fil70"], ["id", "154", "d", "M11789 5264l0 2136 2137 0 0 -2136 -2137 0zm-10 -11l2157 0 0 2157 -2157 0 0 -2157z", 1, "fil71"], ["id", "155", "d", "M11782 5257l0 2150 2150 0 0 -2150 -2150 0zm-10 -11l2171 0 0 2171 -2171 0 0 -2171z", 1, "fil71"], ["id", "156", "d", "M11776 5250l0 2164 2163 0 0 -2164 -2163 0zm-11 -11l2185 0 0 2185 -2185 0 0 -2185z", 1, "fil72"], ["id", "157", "d", "M11769 5243l0 2178 2177 0 0 -2178 -2177 0zm-11 -11l2199 0 0 2199 -2199 0 0 -2199z", 1, "fil73"], ["id", "158", "d", "M11762 5236l0 2192 2191 0 0 -2192 -2191 0zm-11 -11l2213 0 0 2213 -2213 0 0 -2213z", 1, "fil73"], ["id", "159", "d", "M11755 5229l0 2206 2205 0 0 -2206 -2205 0zm-11 -11l2227 0 0 2227 -2227 0 0 -2227z", 1, "fil73"], ["id", "160", "d", "M11748 5222l0 2220 2219 0 0 -2220 -2219 0zm-11 -11l2241 0 0 2241 -2241 0 0 -2241z", 1, "fil74"], ["id", "161", "d", "M11741 5215l0 2234 2233 0 0 -2234 -2233 0zm-11 -11l2255 0 0 2255 -2255 0 0 -2255z", 1, "fil74"], ["id", "162", "d", "M11734 5208l0 2248 2247 0 0 -2248 -2247 0zm-11 -11l2269 0 0 2269 -2269 0 0 -2269z", 1, "fil75"], ["id", "163", "d", "M11727 5201l0 2262 2261 0 0 -2262 -2261 0zm-11 -11l2283 0 0 2283 -2283 0 0 -2283z", 1, "fil76"], ["id", "164", "d", "M11720 5194l0 2276 2275 0 0 -2276 -2275 0zm-11 -11l2297 0 0 2297 -2297 0 0 -2297z", 1, "fil76"], ["id", "165", "d", "M11713 5187l0 2290 2289 0 0 -2290 -2289 0zm-11 -11l2311 0 0 2311 -2311 0 0 -2311z", 1, "fil76"], ["id", "166", "d", "M11706 5180l0 2303 2303 0 0 -2303 -2303 0zm-11 -11l2325 0 0 2325 -2325 0 0 -2325z", 1, "fil76"], ["id", "167", "d", "M11699 5173l0 2317 2317 0 0 -2317 -2317 0zm-11 -11l2339 0 0 2339 -2339 0 0 -2339z", 1, "fil77"], ["id", "168", "d", "M11692 5166l0 2331 2331 0 0 -2331 -2331 0zm-11 -11l2353 0 0 2353 -2353 0 0 -2353z", 1, "fil78"], ["id", "169", "d", "M11685 5159l0 2345 2345 0 0 -2345 -2345 0zm-11 -10l2367 0 0 2366 -2367 0 0 -2366z", 1, "fil79"], ["id", "170", "d", "M11678 5152l0 2359 2359 0 0 -2359 -2359 0zm-11 -10l2381 0 0 2380 -2381 0 0 -2380z", 1, "fil79"], ["id", "171", "d", "M11671 5145l0 2373 2373 0 0 -2373 -2373 0zm-11 -10l2395 0 0 2394 -2395 0 0 -2394z", 1, "fil79"], ["id", "172", "d", "M11664 5138l0 2387 2387 0 0 -2387 -2387 0zm-11 -10l2409 0 0 2408 -2409 0 0 -2408z", 1, "fil80"], ["id", "173", "d", "M11657 5131l0 2401 2401 0 0 -2401 -2401 0zm-11 -10l2423 0 0 2422 -2423 0 0 -2422z", 1, "fil81"], ["id", "174", "d", "M11650 5124l0 2415 2415 0 0 -2415 -2415 0zm-11 -10l2437 0 0 2436 -2437 0 0 -2436z", 1, "fil81"], ["id", "175", "d", "M11643 5117l0 2429 2429 0 0 -2429 -2429 0zm-11 -10l2451 0 0 2450 -2451 0 0 -2450z", 1, "fil82"], ["id", "176", "d", "M11636 5110l0 2443 2443 0 0 -2443 -2443 0zm-11 -10l2465 0 0 2464 -2465 0 0 -2464z", 1, "fil82"], ["id", "177", "d", "M11629 5103l0 2457 2457 0 0 -2457 -2457 0zm-11 -10l2479 0 0 2478 -2479 0 0 -2478z", 1, "fil83"], ["id", "178", "d", "M11622 5096l0 2471 2471 0 0 -2471 -2471 0zm-11 -10l2493 0 0 2492 -2493 0 0 -2492z", 1, "fil83"], ["id", "179", "d", "M11615 5089l0 2485 2485 0 0 -2485 -2485 0zm-11 -10l2506 0 0 2506 -2506 0 0 -2506z", 1, "fil83"], ["id", "180", "d", "M11608 5082l0 2499 2499 0 0 -2499 -2499 0zm-10 -10l2519 0 0 2520 -2519 0 0 -2520z", 1, "fil83"], ["id", "181", "d", "M11601 5075l0 2513 2513 0 0 -2513 -2513 0zm-10 -10l2533 0 0 2534 -2533 0 0 -2534z", 1, "fil83"], ["id", "182", "d", "M11594 5068l0 2527 2527 0 0 -2527 -2527 0zm-10 -10l2547 0 0 2548 -2547 0 0 -2548z", 1, "fil83"], ["id", "183", "d", "M11587 5061l0 2541 2541 0 0 -2541 -2541 0zm-10 -10l2561 0 0 2562 -2561 0 0 -2562z", 1, "fil84"], ["id", "184", "d", "M11580 5054l0 2555 2555 0 0 -2555 -2555 0zm-10 -10l2575 0 0 2576 -2575 0 0 -2576z", 1, "fil84"], ["id", "185", "d", "M11573 5047l0 2569 2569 0 0 -2569 -2569 0zm-10 -10l2589 0 0 2590 -2589 0 0 -2590z", 1, "fil84"], ["id", "186", "d", "M11566 5040l0 2583 2583 0 0 -2583 -2583 0zm-10 -10l2603 0 0 2604 -2603 0 0 -2604z", 1, "fil84"], ["id", "187", "d", "M11559 5033l0 2597 2597 0 0 -2597 -2597 0zm-10 -10l2617 0 0 2618 -2617 0 0 -2618z", 1, "fil84"], ["id", "188", "d", "M11552 5026l0 2611 2611 0 0 -2611 -2611 0zm-10 -10l2631 0 0 2632 -2631 0 0 -2632z", 1, "fil85"], ["id", "189", "d", "M11545 5019l0 2625 2625 0 0 -2625 -2625 0zm-10 -10l2645 0 0 2646 -2645 0 0 -2646z", 1, "fil85"], ["id", "190", "d", "M11538 5012l0 2639 2639 0 0 -2639 -2639 0zm-10 -10l2659 0 0 2659 -2659 0 0 -2659z", 1, "fil85"], ["id", "191", "d", "M11531 5005l0 2653 2653 0 0 -2653 -2653 0zm-10 -10l2673 0 0 2673 -2673 0 0 -2673z", 1, "fil86"], ["id", "192", "d", "M11524 4998l0 2667 2667 0 0 -2667 -2667 0zm-10 -10l2687 0 0 2687 -2687 0 0 -2687z", 1, "fil86"], ["id", "193", "d", "M11517 4991l0 2681 2681 0 0 -2681 -2681 0zm-10 -10l2701 0 0 2701 -2701 0 0 -2701z", 1, "fil87"], ["id", "194", "d", "M11510 4984l0 2695 2695 0 0 -2695 -2695 0zm-10 -10l2715 0 0 2715 -2715 0 0 -2715z", 1, "fil87"], ["id", "195", "d", "M11503 4977l0 2709 2709 0 0 -2709 -2709 0zm-10 -10l2729 0 0 2729 -2729 0 0 -2729z", 1, "fil87"], ["id", "196", "d", "M11496 4971l0 2722 2723 0 0 -2722 -2723 0zm-10 -11l2743 0 0 2743 -2743 0 0 -2743z", 1, "fil88"], ["id", "197", "d", "M11489 4964l0 2736 2737 0 0 -2736 -2737 0zm-10 -11l2757 0 0 2757 -2757 0 0 -2757z", 1, "fil88"], ["id", "198", "d", "M11482 4957l0 2750 2751 0 0 -2750 -2751 0zm-10 -11l2771 0 0 2771 -2771 0 0 -2771z", 1, "fil89"], ["id", "199", "d", "M11475 4950l0 2764 2765 0 0 -2764 -2765 0zm-10 -11l2785 0 0 2785 -2785 0 0 -2785z", 1, "fil90"], ["id", "200", "d", "M11468 4943l0 2778 2779 0 0 -2778 -2779 0zm-10 -11l2799 0 0 2799 -2799 0 0 -2799z", 1, "fil90"], ["id", "201", "d", "M11461 4936l0 2792 2793 0 0 -2792 -2793 0zm-10 -11l2813 0 0 2813 -2813 0 0 -2813z", 1, "fil90"], ["id", "202", "d", "M11454 4929l0 2806 2807 0 0 -2806 -2807 0zm-10 -11l2827 0 0 2827 -2827 0 0 -2827z", 1, "fil90"], ["id", "203", "d", "M11447 4922l0 2820 2821 0 0 -2820 -2821 0zm-10 -11l2841 0 0 2841 -2841 0 0 -2841z", 1, "fil91"], ["id", "204", "d", "M11440 4915l0 2834 2835 0 0 -2834 -2835 0zm-10 -11l2855 0 0 2855 -2855 0 0 -2855z", 1, "fil91"], ["id", "205", "d", "M11433 4908l0 2848 2849 0 0 -2848 -2849 0zm-10 -11l2869 0 0 2869 -2869 0 0 -2869z", 1, "fil91"], ["id", "206", "d", "M11426 4901l0 2862 2862 0 0 -2862 -2862 0zm-10 -11l2883 0 0 2883 -2883 0 0 -2883z", 1, "fil92"], ["id", "207", "d", "M11420 4894l0 2876 2875 0 0 -2876 -2875 0zm-11 -11l2897 0 0 2897 -2897 0 0 -2897z", 1, "fil92"], ["id", "208", "d", "M11413 4887l0 2890 2889 0 0 -2890 -2889 0zm-11 -11l2911 0 0 2911 -2911 0 0 -2911z", 1, "fil93"], ["id", "209", "d", "M11406 4880l0 2904 2903 0 0 -2904 -2903 0zm-11 -11l2925 0 0 2925 -2925 0 0 -2925z", 1, "fil93"], ["id", "210", "d", "M11399 4873l0 2918 2917 0 0 -2918 -2917 0zm-11 -11l2939 0 0 2939 -2939 0 0 -2939z", 1, "fil94"], ["id", "211", "d", "M11392 4866l0 2932 2931 0 0 -2932 -2931 0zm-11 -11l2953 0 0 2953 -2953 0 0 -2953z", 1, "fil94"], ["id", "212", "d", "M11385 4859l0 2946 2945 0 0 -2946 -2945 0zm-11 -11l2967 0 0 2967 -2967 0 0 -2967z", 1, "fil95"], ["id", "213", "d", "M11378 4852l0 2960 2959 0 0 -2960 -2959 0zm-11 -11l2981 0 0 2981 -2981 0 0 -2981z", 1, "fil96"], ["id", "214", "d", "M11371 4845l0 2974 2973 0 0 -2974 -2973 0zm-11 -11l2995 0 0 2995 -2995 0 0 -2995z", 1, "fil97"], ["id", "215", "d", "M11364 4838l0 2988 2987 0 0 -2988 -2987 0zm-11 -11l3009 0 0 3009 -3009 0 0 -3009z", 1, "fil97"], ["id", "216", "d", "M11357 4831l0 3002 3001 0 0 -3002 -3001 0zm-11 -11l3023 0 0 3023 -3023 0 0 -3023z", 1, "fil97"], ["id", "217", "d", "M11350 4824l0 3015 3015 0 0 -3015 -3015 0zm-11 -11l3037 0 0 3037 -3037 0 0 -3037z", 1, "fil97"], ["id", "218", "d", "M11343 4817l0 3029 3029 0 0 -3029 -3029 0zm-11 -11l3051 0 0 3051 -3051 0 0 -3051z", 1, "fil98"], ["id", "219", "d", "M11336 4810l0 3043 3043 0 0 -3043 -3043 0zm-11 -11l3065 0 0 3065 -3065 0 0 -3065z", 1, "fil98"], ["id", "220", "d", "M11329 4803l0 3057 3057 0 0 -3057 -3057 0zm-11 -10l3079 0 0 3078 -3079 0 0 -3078z", 1, "fil98"], ["id", "221", "d", "M11322 4796l0 3071 3071 0 0 -3071 -3071 0zm-11 -10l3093 0 0 3092 -3093 0 0 -3092z", 1, "fil98"], ["id", "222", "d", "M11315 4789l0 3085 3085 0 0 -3085 -3085 0zm-11 -10l3107 0 0 3106 -3107 0 0 -3106z", 1, "fil99"], ["id", "223", "d", "M11308 4782l0 3099 3099 0 0 -3099 -3099 0zm-11 -10l3121 0 0 3120 -3121 0 0 -3120z", 1, "fil100"], ["id", "224", "d", "M11301 4775l0 3113 3113 0 0 -3113 -3113 0zm-11 -10l3135 0 0 3134 -3135 0 0 -3134z", 1, "fil100"], ["id", "225", "d", "M11294 4768l0 3127 3127 0 0 -3127 -3127 0zm-11 -10l3149 0 0 3148 -3149 0 0 -3148z", 1, "fil100"], ["id", "226", "d", "M11287 4761l0 3141 3141 0 0 -3141 -3141 0zm-11 -10l3163 0 0 3162 -3163 0 0 -3162z", 1, "fil100"], ["id", "227", "d", "M11280 4754l0 3155 3155 0 0 -3155 -3155 0zm-11 -10l3177 0 0 3176 -3177 0 0 -3176z", 1, "fil100"], ["id", "228", "d", "M11273 4747l0 3169 3169 0 0 -3169 -3169 0zm-11 -10l3191 0 0 3190 -3191 0 0 -3190z", 1, "fil101"], ["id", "229", "d", "M11266 4740l0 3183 3183 0 0 -3183 -3183 0zm-11 -10l3205 0 0 3204 -3205 0 0 -3204z", 1, "fil102"], ["id", "230", "d", "M11259 4733l0 3197 3197 0 0 -3197 -3197 0zm-11 -10l3218 0 0 3218 -3218 0 0 -3218z", 1, "fil102"], ["id", "231", "d", "M11252 4726l0 3211 3211 0 0 -3211 -3211 0zm-10 -10l3231 0 0 3232 -3231 0 0 -3232z", 1, "fil102"], ["id", "232", "d", "M11245 4719l0 3225 3225 0 0 -3225 -3225 0zm-10 -10l3245 0 0 3246 -3245 0 0 -3246z", 1, "fil103"], ["id", "233", "d", "M11238 4712l0 3239 3239 0 0 -3239 -3239 0zm-10 -10l3259 0 0 3260 -3259 0 0 -3260z", 1, "fil103"], ["id", "234", "d", "M11231 4705l0 3253 3253 0 0 -3253 -3253 0zm-10 -10l3273 0 0 3274 -3273 0 0 -3274z", 1, "fil104"], ["id", "235", "d", "M11224 4698l0 3267 3267 0 0 -3267 -3267 0zm-10 -10l3287 0 0 3288 -3287 0 0 -3288z", 1, "fil104"], ["id", "236", "d", "M11217 4691l0 3281 3281 0 0 -3281 -3281 0zm-10 -10l3301 0 0 3302 -3301 0 0 -3302z", 1, "fil105"], ["id", "237", "d", "M11210 4684l0 3295 3295 0 0 -3295 -3295 0zm-10 -10l3315 0 0 3316 -3315 0 0 -3316z", 1, "fil106"], ["id", "238", "d", "M11203 4677l0 3309 3309 0 0 -3309 -3309 0zm-10 -10l3329 0 0 3330 -3329 0 0 -3330z", 1, "fil106"], ["id", "239", "d", "M11196 4670l0 3323 3323 0 0 -3323 -3323 0zm-10 -10l3343 0 0 3344 -3343 0 0 -3344z", 1, "fil107"], ["id", "240", "d", "M11189 4663l0 3337 3337 0 0 -3337 -3337 0zm-10 -10l3357 0 0 3358 -3357 0 0 -3358z", 1, "fil107"], ["id", "241", "d", "M11182 4656l0 3351 3351 0 0 -3351 -3351 0zm-10 -10l3371 0 0 3371 -3371 0 0 -3371z", 1, "fil107"], ["id", "242", "d", "M11175 4649l0 3365 3365 0 0 -3365 -3365 0zm-10 -10l3385 0 0 3385 -3385 0 0 -3385z", 1, "fil108"], ["id", "243", "d", "M11168 4642l0 3379 3379 0 0 -3379 -3379 0zm-10 -10l3399 0 0 3399 -3399 0 0 -3399z", 1, "fil108"], ["id", "244", "d", "M11161 4635l0 3393 3393 0 0 -3393 -3393 0zm-10 -10l3413 0 0 3413 -3413 0 0 -3413z", 1, "fil109"], ["id", "245", "d", "M11154 4628l0 3407 3407 0 0 -3407 -3407 0zm-10 -10l3427 0 0 3427 -3427 0 0 -3427z", 1, "fil110"], ["id", "246", "d", "M11147 4621l0 3421 3421 0 0 -3421 -3421 0zm-10 -10l3441 0 0 3441 -3441 0 0 -3441z", 1, "fil110"], ["id", "247", "d", "M11140 4615l0 3434 3435 0 0 -3434 -3435 0zm-10 -11l3455 0 0 3455 -3455 0 0 -3455z", 1, "fil110"], ["id", "248", "d", "M11133 4608l0 3448 3449 0 0 -3448 -3449 0zm-10 -11l3469 0 0 3469 -3469 0 0 -3469z", 1, "fil110"], ["id", "249", "d", "M11126 4601l0 3462 3463 0 0 -3462 -3463 0zm-10 -11l3483 0 0 3483 -3483 0 0 -3483z", 1, "fil111"], ["id", "250", "d", "M11119 4594l0 3476 3477 0 0 -3476 -3477 0zm-10 -11l3497 0 0 3497 -3497 0 0 -3497z", 1, "fil112"], ["id", "251", "d", "M11112 4587l0 3490 3491 0 0 -3490 -3491 0zm-10 -11l3511 0 0 3511 -3511 0 0 -3511z", 1, "fil112"], ["id", "252", "d", "M11105 4580l0 3504 3505 0 0 -3504 -3505 0zm-10 -11l3525 0 0 3525 -3525 0 0 -3525z", 1, "fil113"], ["id", "253", "d", "M11098 4573l0 3518 3519 0 0 -3518 -3519 0zm-10 -11l3539 0 0 3539 -3539 0 0 -3539z", 1, "fil114"], ["id", "254", "d", "M11091 4566l0 3532 3533 0 0 -3532 -3533 0zm-10 -11l3553 0 0 3553 -3553 0 0 -3553z", 1, "fil8"], ["id", "255", "d", "M11084 4559l0 3546 3547 0 0 -3546 -3547 0zm-10 -11l3567 0 0 3567 -3567 0 0 -3567z", 1, "fil8"], ["id", "256", "d", "M11077 4552l0 3560 3561 0 0 -3560 -3561 0zm-7 -7l3574 0 0 3574 -3574 0 0 -3574z", 1, "fil8"], ["cx", "12857", "cy", "6332", "r", "1366", 1, "fil9", "str0"]], template: function DayBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .str0 {stroke:#FFED00;stroke-width:20} .fil11 {fill:#FFED00} .fil10 {fill:#FFED00} .fil9 {fill:#FFED00} .fil12 {fill:#FFED00} .fil13 {fill:#FEEC00} .fil15 {fill:#FEEB00} .fil14 {fill:#FEEB00} .fil19 {fill:#FDEB00} .fil17 {fill:#FEEB00} .fil18 {fill:#FDEB00} .fil16 {fill:#FEEB00} .fil20 {fill:#FDEA00} .fil22 {fill:#FDEA00} .fil23 {fill:#FCE900} .fil21 {fill:#FDEA00} .fil25 {fill:#FBE900} .fil24 {fill:#FBE900} .fil26 {fill:#FBE800} .fil28 {fill:#FAE700} .fil27 {fill:#FAE700} .fil30 {fill:#FAE700} .fil31 {fill:#F9E600} .fil29 {fill:#FAE700} .fil33 {fill:#F9E600} .fil32 {fill:#F9E600} .fil35 {fill:#F8E500} .fil34 {fill:#F8E600} .fil37 {fill:#F7E502} .fil36 {fill:#F7E501} .fil39 {fill:#F6E304} .fil38 {fill:#F7E402} .fil41 {fill:#F6E306} .fil40 {fill:#F6E305} .fil43 {fill:#F5E20B} .fil42 {fill:#F5E209} .fil46 {fill:#F3E10D} .fil44 {fill:#F4E10B} .fil45 {fill:#F3E10C} .fil47 {fill:#F3E00E} .fil51 {fill:#F2DF14} .fil49 {fill:#F3E011} .fil50 {fill:#F2DF12} .fil48 {fill:#F3E00E} .fil53 {fill:#F2DF18} .fil52 {fill:#F2DF15} .fil54 {fill:#F2DE18} .fil55 {fill:#F1DE18} .fil57 {fill:#F0DD1E} .fil56 {fill:#F0DD1B} .fil58 {fill:#EFDC1E} .fil59 {fill:#EFDC21} .fil62 {fill:#EEDB25} .fil60 {fill:#EFDC23} .fil61 {fill:#EEDB23} .fil64 {fill:#EDDA27} .fil65 {fill:#EDD927} .fil63 {fill:#EDDA25} .fil66 {fill:#ECD929} .fil67 {fill:#ECD92B} .fil69 {fill:#EAD82D} .fil68 {fill:#EAD82B} .fil70 {fill:#EAD72F} .fil71 {fill:#E9D72F} .fil73 {fill:#E9D631} .fil72 {fill:#E9D62F} .fil77 {fill:#E7D534} .fil75 {fill:#E8D632} .fil76 {fill:#E7D532} .fil74 {fill:#E8D631} .fil78 {fill:#E7D534} .fil80 {fill:#E6D535} .fil81 {fill:#E6D435} .fil79 {fill:#E6D434} .fil83 {fill:#E5D437} .fil82 {fill:#E5D435} .fil85 {fill:#E3D23A} .fil84 {fill:#E3D238} .fil87 {fill:#E2D23B} .fil86 {fill:#E3D23A} .fil89 {fill:#E2D13C} .fil88 {fill:#E2D13B} .fil91 {fill:#E0D03E} .fil90 {fill:#E1D13C} .fil93 {fill:#E0D03F} .fil92 {fill:#E0D03E} .fil96 {fill:#DFCF40} .fil94 {fill:#E0CF3F} .fil95 {fill:#DFCF3F} .fil98 {fill:#DECF41} .fil97 {fill:#DECF40} .fil99 {fill:#DDCE41} .fil101 {fill:#DDCD44} .fil100 {fill:#DDCD43} .fil104 {fill:#DBCC45} .fil102 {fill:#DCCD44} .fil103 {fill:#DBCC44} .fil105 {fill:#DBCC45} .fil109 {fill:#DACB47} .fil107 {fill:#DACC46} .fil108 {fill:#DACB46} .fil106 {fill:#DACC45} .fil111 {fill:#D9CB48} .fil110 {fill:#D9CB47} .fil112 {fill:#D9CA48} .fil113 {fill:#D8CA48} .fil8 {fill:#D7C949} .fil114 {fill:#D7C948} .fil7 {fill:#9E9D24} .fil5 {fill:url(#id1)} .fil4 {fill:url(#id2)} .fil2 {fill:url(#id3)} .fil6 {fill:url(#id4)} .fil3 {fill:url(#id5)} .fil0 {fill:url(#id6)} .fil1 {fill:url(#id7)} ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "linearGradient", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "linearGradient", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "linearGradient", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "stop", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "linearGradient", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "stop", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "linearGradient", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "linearGradient", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "stop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "stop", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "linearGradient", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "stop", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "stop", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "stop", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "metadata", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "polygon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "polygon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "path", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "path", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "path", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "path", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "path", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "path", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "path", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "path", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "path", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "path", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "path", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "path", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "path", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "path", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "path", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "path", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "path", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "path", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "path", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "circle", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["svg[_ngcontent-%COMP%] {\n  width: 101%;\n  height: 101%;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnL2RheS1iYWNrZ3JvdW5kL1A6XFxwcm9qZWt0eVxcd2VhdGhlci1mb3JlY2FzdC9zcmNcXGFwcFxcc3ZnXFxkYXktYmFja2dyb3VuZFxcZGF5LWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N2Zy9kYXktYmFja2dyb3VuZC9kYXktYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3ZnL2RheS1iYWNrZ3JvdW5kL2RheS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICB3aWR0aDogMTAxJTtcclxuICBoZWlnaHQ6IDEwMSU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbiIsInN2ZyB7XG4gIHdpZHRoOiAxMDElO1xuICBoZWlnaHQ6IDEwMSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-day-background',
                templateUrl: './day-background.component.html',
                styleUrls: ['./day-background.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/svg/night-background/night-background.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/svg/night-background/night-background.component.ts ***!
  \********************************************************************/
/*! exports provided: NightBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NightBackgroundComponent", function() { return NightBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NightBackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NightBackgroundComponent.ɵfac = function NightBackgroundComponent_Factory(t) { return new (t || NightBackgroundComponent)(); };
NightBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NightBackgroundComponent, selectors: [["app-night-background"]], decls: 50, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "width", "155.956mm", "height", "279.4mm", "version", "1.1", "viewBox", "0 0 15596 27940", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "shape-rendering", "geometricPrecision", "text-rendering", "geometricPrecision", "image-rendering", "optimizeQuality", "fill-rule", "evenodd", "clip-rule", "evenodd"], ["type", "text/css"], ["id", "id0", "gradientUnits", "userSpaceOnUse", "x1", "9069.53", "y1", "18899.6", "x2", "9090.91", "y2", "14457.3"], ["offset", "0", 2, "stop-opacity", "1", "stop-color", "#002F6C"], ["offset", "0.921569", 2, "stop-opacity", "1", "stop-color", "#7F97B5"], ["offset", "1", 2, "stop-opacity", "1", "stop-color", "white"], ["id", "id1", "gradientUnits", "userSpaceOnUse", "x1", "13473.1", "y1", "17715.8", "x2", "14073.7", "y2", "12405.5"], ["offset", "0.788235", 2, "stop-opacity", "1", "stop-color", "#7F97B5"], ["id", "id2", "gradientUnits", "userSpaceOnUse", "x1", "11368.8", "y1", "18072.4", "x2", "11303.8", "y2", "15278.4"], ["offset", "0.831373", 2, "stop-opacity", "1", "stop-color", "#7F97B5"], ["id", "id3", "gradientUnits", "userSpaceOnUse", "x1", "9069.68", "y1", "18839.2", "x2", "9090.91", "y2", "14457.3"], ["offset", "0.909804", 2, "stop-opacity", "1", "stop-color", "#7F97B5"], ["id", "id4", "gradientUnits", "userSpaceOnUse", 0, "xlink", "href", "#id2", "x1", "11368.8", "y1", "18072.4", "x2", "11303.8", "y2", "15278.4"], ["id", "id5", "gradientUnits", "userSpaceOnUse", "x1", "7872.31", "y1", "17035.6", "x2", "7872.31", "y2", "-1485.56"], ["offset", "0", 2, "stop-opacity", "1", "stop-color", "#81D4FA"], ["offset", "0.301961", 2, "stop-opacity", "1", "stop-color", "#60ACC4"], ["offset", "1", 2, "stop-opacity", "1", "stop-color", "#352968"], ["id", "id6", "gradientUnits", "userSpaceOnUse", "x1", "6182.16", "y1", "23424.1", "x2", "-209.96", "y2", "16017.5"], ["offset", "0", 2, "stop-opacity", "1", "stop-color", "#01579B"], ["offset", "0.74902", 2, "stop-opacity", "1", "stop-color", "#3B4072"], ["offset", "1", 2, "stop-opacity", "1", "stop-color", "#252851"], ["id", "Warstwa_x0020_1"], ["id", "CorelCorpID_0Corel-Layer"], ["d", "M15273 27446l-14838 0c-356,0 -645,-283 -645,-632l0 -26818c0,-348 289,-631 645,-631l14838 0c356,0 644,283 644,631l0 26816c2,351 -286,634 -644,634z", 1, "fil0"], ["d", "M-210 16093c0,0 4276,-823 9818,2955 5760,4112 4179,6117 4179,6117l-13997 -618 0 -8454z", 1, "fil1"], ["d", "M14202 7063c-24,5 -48,8 -72,12 -397,60 -794,-37 -1118,-275 -323,-239 -534,-589 -594,-986 -35,-226 -18,-452 47,-664 29,-94 66,-185 113,-271 -102,26 -198,63 -290,108 -608,299 -980,965 -873,1670 133,870 945,1468 1815,1336 481,-73 878,-354 1116,-737 53,-88 100,-182 136,-279 -89,37 -182,67 -280,86zm-2359 108l4 0 2 9 -6 -9zm2179 152l-2 -13c5,-1 9,-1 14,-1 -4,4 -8,9 -12,14zm-1274 431l3 15c-16,-2 -31,-5 -47,-9l44 -6zm-119 -1005l-15 3 -4 -24c7,7 13,14 19,21zm-705 -1184l-9 2c2,-4 5,-7 8,-10l1 8z", 1, "fil2", "str0"], ["cx", "1935", "cy", "2537", "r", "166", 1, "fil3", "str1"], ["cx", "4053", "cy", "3979", "r", "166", 1, "fil4", "str2"], ["cx", "14615", "cy", "5726", "r", "166", 1, "fil5", "str3"], ["cx", "10163", "cy", "6347", "r", "166", 1, "fil6", "str4"], ["cx", "5985", "cy", "2929", "r", "166", 1, "fil7", "str5"], ["cx", "1565", "cy", "6888", "r", "166", 1, "fil8", "str6"], ["cx", "7420", "cy", "5391", "r", "166", 1, "fil9", "str7"], ["cx", "13108", "cy", "2129", "r", "166", 1, "fil3", "str1"], ["id", "_2796772051312"], ["d", "M8935 17197c153,446 146,924 138,1397 -2,95 -3,190 -3,306l-124 0c0,-88 2,-198 4,-308 7,-461 15,-928 -132,-1354l117 -41z", 1, "fil10"], ["d", "M9015 15367l0 0 0 1c290,0 566,74 774,223 228,164 373,409 373,738l1 0 0 0 0 0 -1 0c0,309 -125,588 -326,790 -202,201 -481,326 -790,326l0 1 0 0 0 0 0 -1c-309,0 -588,-125 -790,-326 -201,-202 -326,-481 -326,-790l-1 0 0 0 0 0 1 0c0,-323 125,-566 333,-731 194,-154 457,-230 752,-230l0 -1 0 0zm0 494l0 1 0 0 0 0 0 -1c-186,0 -342,41 -447,124 -91,72 -145,186 -145,344l1 0 0 0 0 0 -1 0c0,171 70,327 183,440 113,113 269,183 440,183l0 -1 0 0 0 0 0 1c171,0 327,-70 440,-183 113,-113 183,-269 183,-440l-1 0 0 0 0 0 1 0c0,-152 -65,-264 -168,-338 -121,-87 -296,-130 -486,-130z", 1, "fil11"], ["id", "_2796772049840"], ["d", "M11181 17023c-31,206 -50,397 -49,585 1,188 22,374 74,573l-120 31c-54,-209 -76,-406 -77,-603 -2,-197 19,-394 50,-604l122 18z", 1, "fil12"], ["d", "M11091 15955l0 0 0 0c198,0 376,80 505,208 128,129 208,307 208,505l1 0 0 0c0,197 -53,347 -163,458 -109,109 -260,161 -458,161l0 1 0 0 0 -1c-167,0 -352,-39 -497,-122 -181,-102 -308,-265 -308,-497l-1 0 0 0 0 0 1 0c0,-198 79,-376 208,-505 128,-128 307,-208 504,-208l0 0 0 0zm0 493l0 1 0 0 0 0 0 -1c-60,0 -114,25 -154,65 -40,40 -65,95 -65,155l1 0 0 0 0 0 -1 0c0,25 24,49 58,68 70,39 164,58 254,58l0 -1 0 0 0 1c60,0 96,-6 108,-18 12,-12 18,-48 18,-108l0 0 1 0c0,-60 -25,-115 -65,-155 -40,-40 -95,-65 -155,-65z", 1, "fil13"], ["d", "M12189 18706c91,-344 174,-702 243,-1091 58,-330 104,-679 134,-1056l-199 -29 29 -213 138 -1019 7 -54 31 -44 158 -220 177 -250 162 228 449 -860 236 -453 162 485c69,205 127,413 167,625 14,71 25,143 34,215l161 -134 124 243 172 335 34 67 -15 76 -211 1022 -34 165 -167 9c-119,358 -211,708 -282,1051 -81,388 -136,768 -175,1142l-432 -44c40,-389 97,-783 181,-1186 84,-404 196,-818 344,-1244l48 -138 125 -6 161 -783 -13 -26 -71 60 -361 301 4 -470c2,-193 -18,-385 -54,-575 -3,-15 -6,-30 -9,-46l-358 686 -165 316 -183 -260 -85 630 169 25 -12 199c-28,477 -82,907 -152,1305 -70,397 -157,768 -251,1127l-421 -111z", 1, "fil14"], ["d", "M-294 27737c0,322 290,584 648,584l14915 0c358,0 648,-262 648,-584l0 -9593c-7666,-1271 -16127,2982 -16127,2982l-86 6611 2 0z", 1, "fil15", "str8"]], template: function NightBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .str5 {stroke:#445788;stroke-width:20} .str1 {stroke:#455A8B;stroke-width:20} .str2 {stroke:#475F8E;stroke-width:20} .str7 {stroke:#4C709A;stroke-width:20} .str3 {stroke:#4F78A0;stroke-width:20} .str4 {stroke:#507DA3;stroke-width:20} .str6 {stroke:#5282A6;stroke-width:20} .str8 {stroke:#373766;stroke-width:7.62} .str0 {stroke:#65B3CD;stroke-width:7.62} .fil15 {fill:#002F6C} .fil7 {fill:#445788} .fil3 {fill:#455A8B} .fil4 {fill:#475F8E} .fil9 {fill:#4C709A} .fil5 {fill:#4F78A0} .fil6 {fill:#507DA3} .fil8 {fill:#5282A6} .fil2 {fill:#65B3CD} .fil10 {fill:url(#id0)} .fil14 {fill:url(#id1)} .fil12 {fill:url(#id2)} .fil11 {fill:url(#id3)} .fil13 {fill:url(#id4)} .fil0 {fill:url(#id5)} .fil1 {fill:url(#id6)} ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "linearGradient", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "linearGradient", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "linearGradient", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "stop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "linearGradient", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "stop", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "linearGradient", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "linearGradient", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "stop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "stop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "linearGradient", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "stop", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "metadata", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["svg[_ngcontent-%COMP%] {\n  width: 101%;\n  height: 101%;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnL25pZ2h0LWJhY2tncm91bmQvUDpcXHByb2pla3R5XFx3ZWF0aGVyLWZvcmVjYXN0L3NyY1xcYXBwXFxzdmdcXG5pZ2h0LWJhY2tncm91bmRcXG5pZ2h0LWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N2Zy9uaWdodC1iYWNrZ3JvdW5kL25pZ2h0LWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N2Zy9uaWdodC1iYWNrZ3JvdW5kL25pZ2h0LWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gIHdpZHRoOiAxMDElO1xyXG4gIGhlaWdodDogMTAxJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuIiwic3ZnIHtcbiAgd2lkdGg6IDEwMSU7XG4gIGhlaWdodDogMTAxJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NightBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-night-background',
                templateUrl: './night-background.component.html',
                styleUrls: ['./night-background.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: 'bc1f103d0825160fc4ecba0adc35009a',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\projekty\weather-forecast\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map