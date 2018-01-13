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
var ContentPanelComponent = (function () {
    function ContentPanelComponent() {
    }
    ContentPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('lang'),
        __metadata("design:type", String)
    ], ContentPanelComponent.prototype, "language", void 0);
    ContentPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-content-panel',
            templateUrl: './content-panel.component.html',
            styleUrls: ['./content-panel.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ContentPanelComponent);
    return ContentPanelComponent;
}());
exports.ContentPanelComponent = ContentPanelComponent;
//# sourceMappingURL=content-panel.component.js.map