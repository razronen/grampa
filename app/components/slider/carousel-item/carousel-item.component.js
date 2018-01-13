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
var CarouselItemComponent = (function () {
    function CarouselItemComponent() {
    }
    CarouselItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('src'),
        __metadata("design:type", String)
    ], CarouselItemComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input('alt'),
        __metadata("design:type", String)
    ], CarouselItemComponent.prototype, "alt", void 0);
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], CarouselItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], CarouselItemComponent.prototype, "text", void 0);
    CarouselItemComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel-item',
            templateUrl: './carousel-item.component.html',
            styleUrls: ['./carousel-item.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());
exports.CarouselItemComponent = CarouselItemComponent;
//# sourceMappingURL=carousel-item.component.js.map