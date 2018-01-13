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
var platform_browser_1 = require("@angular/platform-browser");
var data_service_1 = require("../../../services/data.service");
var ParagraphPanelComponent = (function () {
    function ParagraphPanelComponent(dataService, sanitizer) {
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.paragraph_header = 'loading..';
        this.video_url = '';
        this.paragraph_content = '';
        this.paragraph_content_2 = '';
    }
    ParagraphPanelComponent.prototype.updateContentLanguage = function () {
        var _this = this;
        this.dataService.getContent(this.content).subscribe(function (data) {
            _this.paragraph_content = data['content'];
            _this.paragraph_header = data['header'];
            if (data['content_extra'] !== undefined)
                _this.paragraph_content_2 = data['content_extra'];
        });
    };
    ParagraphPanelComponent.prototype.ngOnChanges = function (changes) {
        this.updateContentLanguage();
    };
    ParagraphPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('id'),
        __metadata("design:type", String)
    ], ParagraphPanelComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input('lang'),
        __metadata("design:type", String)
    ], ParagraphPanelComponent.prototype, "language", void 0);
    __decorate([
        core_1.Input('content'),
        __metadata("design:type", String)
    ], ParagraphPanelComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input('header'),
        __metadata("design:type", String)
    ], ParagraphPanelComponent.prototype, "paragraph_header", void 0);
    __decorate([
        core_1.Input('video'),
        __metadata("design:type", String)
    ], ParagraphPanelComponent.prototype, "video_url", void 0);
    __decorate([
        core_1.ViewChild('fireContent'),
        __metadata("design:type", core_1.ElementRef)
    ], ParagraphPanelComponent.prototype, "fireContent", void 0);
    ParagraphPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-paragraph-panel',
            templateUrl: './paragraph-panel.component.html',
            styleUrls: ['./paragraph-panel.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, platform_browser_1.DomSanitizer])
    ], ParagraphPanelComponent);
    return ParagraphPanelComponent;
}());
exports.ParagraphPanelComponent = ParagraphPanelComponent;
//# sourceMappingURL=paragraph-panel.component.js.map