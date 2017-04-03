System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent() {
                    this.post = {
                        title: 'Angular Tutorial for Beginners',
                        body: "\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales ipsum velit, vitae vulputate orci eleifend vel. Sed eleifend massa sit amet mauris facilisis, non ullamcorper diam accumsan. Donec et arcu interdum, posuere erat sed, cursus justo.\n    "
                    };
                }
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        template: "\n    {{ post.title }}\n    <br/>\n    {{ post.body | summary:'100' }}\n  ",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.components.js.map