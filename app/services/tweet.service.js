System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            name: 'Windward',
                            twitterHandle: '@windwardstudios',
                            tweet: 'Looking for a better company reporting or docgen app?',
                            profilePhoto: 'http://lorempixel.com/100/100/people?1',
                            likes: 0,
                            isLiked: false
                        },
                        {
                            name: 'AngularJS News',
                            twitterHandle: '@angularjs_news',
                            tweet: 'Right Relevance: Infuencers, Articles and Conversations',
                            profilePhoto: 'http://lorempixel.com/100/100/people?2',
                            likes: 5,
                            isLiked: true
                        },
                        {
                            name: 'UX & Bootstrap',
                            twitterHandle: '@3rdwave',
                            tweet: '10 Reasons Why Web Projects Fail',
                            profilePhoto: 'http://lorempixel.com/100/100/people?3',
                            likes: 1,
                            isLiked: true
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map