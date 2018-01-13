"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.language = 'hebrew';
    }
    DataService.prototype.setLanguage = function (lang) {
        this.language = lang;
    };
    DataService.prototype.getZalmanName = function () {
        return this.language === 'hebrew' ? 'זלמן אקרמן' : 'Zalman Ackerman';
    };
    DataService.prototype.getContent = function (content) {
        var _this = this;
        this.data = new Observable_1.Observable(function (observer) {
            if (content == undefined)
                content = 'loading';
            _this.http.get("assets/content/" + _this.language + "/" + content + ".json")
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
            });
        });
        return this.data;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map