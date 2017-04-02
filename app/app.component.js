System.register(['angular2/core', './components/favorite.components', './components/like.components', './components/voter.components', './components/tweet.components', './services/tweet.service'], function(exports_1, context_1) {
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
    var core_1, favorite_components_1, like_components_1, voter_components_1, tweet_components_1, tweet_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_components_1_1) {
                favorite_components_1 = favorite_components_1_1;
            },
            function (like_components_1_1) {
                like_components_1 = like_components_1_1;
            },
            function (voter_components_1_1) {
                voter_components_1 = voter_components_1_1;
            },
            function (tweet_components_1_1) {
                tweet_components_1 = tweet_components_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.title = 'Angular App';
                    this.imageUrl = 'http://lorempixel.com/400/200/';
                    this.isActive = true;
                    this.post = {
                        title: "Title",
                        isFavorite: true,
                        isLiked: false,
                        numLikes: 10
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by Div");
                };
                AppComponent.prototype.onClick = function ($event) {
                    // to prevent bubbling up event to parent element, call stopPropagation()
                    $event.stopPropagation();
                    console.log('Clicked', $event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikeChange = function ($event) {
                    this.post.numLikes += $event.newValue;
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
                        templateUrl: 'app/templates/app.template.html',
                        styles: ["\n      .my-app {\n        margin-top: 5em;\n        margin-left: 5em;\n      }\n    "],
                        providers: [tweet_service_1.TweetService],
                        directives: [favorite_components_1.FavoriteComponent, like_components_1.LikeComponent, voter_components_1.VoterComponent, tweet_components_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map