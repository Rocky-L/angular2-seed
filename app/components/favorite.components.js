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
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.isFavorite = true; // no need to put inputs in @Component
                    // starClass = 'glyphicon-star';
                    this.change = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.onClick = function () {
                    // this.starClass = this.starClass == 'glyphicon-star' ? 'glyphicon-star-empty' : 'glyphicon-star';
                    this.isFavorite = !this.isFavorite;
                    this.change.emit({ newValue: this.isFavorite }); // publish change event
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "isFavorite", void 0);
                __decorate([
                    // no need to put inputs in @Component
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "change", void 0);
                FavoriteComponent = __decorate([
                    // EventEmitter is a class we use to publish event
                    core_1.Component({
                        selector: 'favorite',
                        templateUrl: 'app/templates/favorite.template.html',
                        // inputs: ['isFavorite: is-favorite'], // pros: can add all input properties in one place; cons: need to change the name if the property name is changed
                        // outputs: ['change']
                        styles: ["\n    .glyphicon-star {\n      color: orange;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.components.js.map