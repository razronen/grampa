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
var data_service_1 = require("./services/data.service");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'app';
        this.language = 'hebrew';
        this.profile_pic_title = '';
    }
    AppComponent.prototype.languageChanged = function (lang) {
        this.language = lang;
        this.dataService.setLanguage(lang);
        this.getProfilePicTitle();
    };
    AppComponent.prototype.getProfilePicTitle = function () {
        var _this = this;
        this.dataService.getContent('profile_pic_header').subscribe(function (data) {
            _this.profile_pic_title = data['header'];
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getProfilePicTitle();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map