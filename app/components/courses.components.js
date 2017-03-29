System.register(['angular2/core', '../services/courses.service'], function(exports_1, context_1) {
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
    var core_1, courses_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = 'The title of courses page'; // title: string = 'The title of courses page';
                    this.courses = courseService.getCourser();
                    // object name: carmel, class, cap
                    // new CourseService(); // bad practice because of coupling, and unit testing
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        // template: '<h2> Courses </h2>' // a HTML template
                        template: "<h2> Courses </h2>\n              {{title}}\n              <ul>\n                <li *ngFor=\"#course of courses\">\n                  {{ course }}\n                </li>\n              </ul>\n            ",
                        // back tick used to break to multiple lines
                        // {{}} interpolation, one-way binding
                        // #course: a way to declare local variable
                        // *ngFor: directive
                        providers: [courses_service_1.CourseService] // dependencise
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.components.js.map