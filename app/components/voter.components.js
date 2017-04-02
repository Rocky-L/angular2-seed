System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.votes = 10;
                    this.voted = 0;
                }
                VoterComponent.prototype.vote = function () {
                    this.votes += this.voted <= 0 ? 1 : 0;
                    this.voted += this.voted < 1 ? 1 : 0;
                };
                VoterComponent.prototype.devote = function () {
                    this.votes -= this.voted >= 0 ? 1 : 0;
                    this.voted -= this.voted > -1 ? 1 : 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "votes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voted", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div>\n      <i \n          class=\"glyphicon glyphicon-menu-up\"\n          [class.highlighted] = \"voted == 1\"\n          (click)=\"vote()\">\n      </i>\n      <br />\n      <span class=\"votes\"> {{votes}} </span>\n      <br />\n      <i\n          class=\"glyphicon glyphicon-menu-down\"\n          [class.highlighted] = \"voted == -1\"\n          (click)=\"devote()\">\n      </i>\n    </div>\n  ",
                        styles: ["\n    div {\n      width: 20px;\n      text-align: center;\n      color: #999;\n    }\n    .glyphicon-menu-up.glyphicon-menu-down {\n      font-size: 4em;\n      cursor: pointer;\n    }\n    .votes {\n      margin-left: 0.1em;\n      font-size: 1.2em;\n    }\n    .highlighted {\n      font-weight: bold;\n      color: orange;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.components.js.map