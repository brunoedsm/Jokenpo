webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__("./src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_rest_service__ = __webpack_require__("./src/app/service/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_rest_service__["a" /* RestService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\n    list-style-type: none;\n}\n\n.winner{\n    border:2px solid #32CD32;\n}"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Main HTMl-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!<i class=\"fa fa-thumbs-up\"></i>\n  </h1>\n</div>\n<br>\n<div id=\"dvAlert\" class=\"alert alert-danger\" role=\"alert\" style=\"display:none;\"></div>\n<div class=\"container\">\n  <div *ngIf=\"!isPlaying\" id=\"dvDefinePlayers\" class=\"row\">\n    <span>Please select number of players:&nbsp;</span>\n    <select [(ngModel)]=\"qtdPlayers\" (change)=\"changePlayerQtd();\" required>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n    </select>\n    <div class=\"row col-md-12\">\n      <div *ngFor=\"let playerWeapon of lstPlayersWeapons\" class=\"col-md-2\">\n        <p>Player Name:</p><input type=\"text\" [(ngModel)]=\"playerWeapon.playerName\" class=\"form-control\" required>\n      </div>\n    </div>\n    <div class=\"row col-md-12\">\n      <p>After complete the players, click Start!</p>\n    </div>\n    <div class=\"row col-md-12\">\n      <button class=\"btn btn-primary\" (click)=\"playMatch()\">Start!</button>\n    </div>\n  </div>\n  <div *ngIf=\"isPlaying && currentPlayer !== undefined\" id=\"dvChangeWeapons\" class=\"row\">\n    <div class=\"col-md-12\">Change weapon for player {{currentPlayer.playerName}}:&nbsp;&nbsp;\n      <select [(ngModel)]=\"currentPlayer.weaponName\">\n        <!--Usando o proprio name, poderia ser o ID-->\n        <option *ngFor=\"let weapon of lstWeapons\" value=\"{{weapon.name}}\">{{weapon.name}}</option>\n      </select>\n    </div>\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-warning\" (click)=\"selectWeapon()\">Select Weapon</button>\n    </div>\n  </div>\n  <div *ngIf=\"currentPlayer === undefined\" id=\"dvResults\" class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-success\" (click)=\"showResults()\">Jokenpo!!!</button>\n    </div>\n    <br />\n    <br />   \n    <div *ngIf=\"matchResults\" class=\"col-md-12\">\n        <p>Legenda:<br>\n        <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>&nbsp;=&nbsp;Vencedor(es)</p>\n        <table class=\"table\">\n           <thead class=\"thead-light\">\n             <tr>               \n               <th *ngFor=\"let res of matchResults\">\n                 {{res.playerName}}\n                 <i *ngIf=\"res.bestRanked\" class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\n               </th>\n             </tr>\n           </thead>\n           <tbody>\n             <tr>\n               <td *ngFor=\"let res of matchResults\">\n                 <span>\n                   <b>{{res.weaponName}}</b>\n                 </span>\n                 <ul *ngIf=\"res.wonFrom[0] !== undefined\" [ngClass]=\"{'winner':res.bestRanked}\" class=\"text-success\">\n                   <li>Ganhou de:</li> \n                   <li *ngFor=\"let name of res.wonFrom\">{{name}}</li>\n                 </ul>\n                 <ul *ngIf=\"res.tiedWith[0] !== undefined\" class=\"text-warning\">\n                    <li>Empatou com:</li> \n                    <li *ngFor=\"let name of res.tiedWith\">{{name}}</li>\n                 </ul>\n                 <ul *ngIf=\"res.lostTo[0] !== undefined\" class=\"text-danger\">\n                    <li>Perdeu para:</li> \n                    <li *ngFor=\"let name of res.lostTo\">{{name}}</li>\n                 </ul>\n               </td>\n             </tr>\n           </tbody>\n        </table>\n        <br />\n        <br /> \n        <button class=\"btn btn-primary\" (click)=\"playMatchAgain();\">Play Again</button>\n        <button class=\"btn btn-primary\" (click)=\"ngOnInit();\">Change Players</button>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_playerweapon_model__ = __webpack_require__("./src/app/model/playerweapon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_service__ = __webpack_require__("./src/app/service/rest.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(rest) {
        this.rest = rest;
        this.title = 'BESM Jokenpo';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.qtdPlayers = 2;
        this.lstPlayersWeapons = [];
        this.isPlaying = false;
        this.currentPlayer = new __WEBPACK_IMPORTED_MODULE_1__model_playerweapon_model__["a" /* PlayerWeaponModel */]();
        this.playerOrder = 0;
        this.changePlayerQtd();
    };
    AppComponent.prototype.changePlayerQtd = function () {
        this.lstPlayersWeapons = [];
        for (var i = 0; i < this.qtdPlayers; i++) {
            this.lstPlayersWeapons.push({
                playerName: '',
                weaponName: ''
            });
        }
    };
    AppComponent.prototype.playMatch = function () {
        var _this = this;
        /* validação Simples */
        if (!this.isValid())
            return;
        this.rest.getWeapons().subscribe(function (result) {
            _this.lstWeapons = result;
            _this.isPlaying = true;
            _this.currentPlayer = _this.lstPlayersWeapons[_this.playerOrder];
            _this.currentPlayer.weaponName = _this.lstWeapons[0].name;
        });
    };
    AppComponent.prototype.isValid = function () {
        var error = '';
        var lstPlayersCopy = this.lstPlayersWeapons;
        this.lstPlayersWeapons.forEach(function (playerToValidate, i) {
            if (playerToValidate.playerName === '')
                error += "Preencha o nome do jogador " + (i + 1) + "\n";
            else {
                var repenteance = lstPlayersCopy.filter(function (x) { return x.playerName === playerToValidate.playerName; });
                if (repenteance.length > 1)
                    error += "O nome do jogador " + (i + 1) + "\" ocorre mais de uma vez\n";
            }
        });
        if (error === '')
            return true;
        else {
            this.showMessageError(error);
            return false;
        }
    };
    AppComponent.prototype.selectWeapon = function () {
        this.lstPlayersWeapons[this.playerOrder].weaponName = this.currentPlayer.weaponName;
        this.playerOrder++;
        this.currentPlayer = this.lstPlayersWeapons[this.playerOrder];
        if (this.currentPlayer !== undefined)
            this.currentPlayer.weaponName = this.lstWeapons[0].name;
    };
    AppComponent.prototype.showResults = function () {
        var _this = this;
        this.rest.sendChoices(this.lstPlayersWeapons).subscribe(function (data) {
            if (data.message !== null)
                _this.showMessageError(data.message);
            else {
                _this.matchResults = data.playerWeaponResults;
            }
        });
    };
    AppComponent.prototype.playMatchAgain = function () {
        this.matchResults = null;
        this.playerOrder = 0;
        this.playMatch();
    };
    AppComponent.prototype.showMessageError = function (msg) {
        var errorContainer = document.getElementById('dvAlert');
        errorContainer.innerText = msg;
        errorContainer.style.display = 'block';
        setTimeout(function (container) {
            container.innerText = '';
            container.style.display = 'none';
        }, 3000, errorContainer);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/app/app.component.html"),
            styles: [__webpack_require__("./src/app/components/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_rest_service__["a" /* RestService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/model/playerweapon.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerWeaponModel; });
var PlayerWeaponModel = /** @class */ (function () {
    function PlayerWeaponModel() {
    }
    return PlayerWeaponModel;
}());



/***/ }),

/***/ "./src/app/service/rest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var endpoint = 'http://127.0.0.1:5000/api/';
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    // # region Play Game
    RestService.prototype.getWeapons = function () {
        return this.http.get(endpoint + 'match/weapons', httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(this.extractData));
    };
    RestService.prototype.sendChoices = function (playersweapons) {
        return this.http.post(endpoint + 'match/choices', JSON.stringify(playersweapons), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (player) { return console.log("send to results"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('send to results')));
    };
    // #end region
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            alert(error.message);
            return;
        };
    };
    RestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map