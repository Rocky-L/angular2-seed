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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /* first project code */
            //import {CoursesComponent} from './components/courses.components'; // import the component first to make it visible in directives
            //import {AuthorsComponent} from './components/authors.components';
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular App';
                    this.imageUrl = 'http://lorempixel.com/400/200/';
                    this.isActive = true;
                }
                AppComponent.prototype.onClick = function () {
                    console.log('Clicked');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        /* first project code */
                        // template: `
                        //             <h1>Hello Angular</h1>
                        //             <courses></courses>
                        //             <authors></authors>
                        //           `,
                        // directives: [CoursesComponent, AuthorsComponent] // any directives or components used inside this current component
                        template: "\n                <h1> {{ title }} </h1> <!-- interpolation -->\n                <h1 [textContent] = \"title\"></h1> <!-- square equivalent -->\n\n                <img src=\"{{ imgageUrl }}\" />\n                <img [src]=\"imageUrl\" />\n                <img bind-src=\"imageUrl\" class=\"bind-src\" />\n                <!-- all of the above are property binding -->\n                <br/>\n                <p> ---------------------------------------- </p>\n                <br/>\n                <button class=\"btn btn-primary\" [class.active]=\"isActive\"> Class Binding </button> <!-- class binding, ps: bootstrap styling not working -->\n                <button class=\"btn btn-primary\" [style.backgroundColor]=\"isActive ? 'blue' : 'gray'\"> Style Binding </button>\n                <br/>\n                <p> ---------------------------------------- </p>\n                <br/>\n                <button (click)=\"onClick()\"> Event Binding </button>\n                <button on-click=\"onClick()\"> Event Binding </button>\n\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map