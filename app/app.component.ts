import {Component} from 'angular2/core';
/* first project code */
//import {CoursesComponent} from './components/courses.components'; // import the component first to make it visible in directives
//import {AuthorsComponent} from './components/authors.components';
import {FavoriteComponent} from './components/favorite.components';
import {LikeComponent} from './components/like.components';
import {VoterComponent} from './components/voter.components';
import {TweetComponent} from './components/tweet.components';
import {TweetService} from './services/tweet.service';

@Component({
    selector: 'my-app',
    /* first project code */
    // template: `
    //             <h1>Hello Angular</h1>
    //             <courses></courses>
    //             <authors></authors>
    //           `,
    // directives: [CoursesComponent, AuthorsComponent] // any directives or components used inside this current component

    templateUrl: 'app/templates/app.template.html',
    styles: [`
      .my-app {
        margin-top: 5em;
        margin-left: 5em;
      }
    `],
    providers: [TweetService],
    directives: [FavoriteComponent, LikeComponent, VoterComponent, TweetComponent]
})
export class AppComponent {
  tweets: any[];

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

  title = 'Angular App';
  imageUrl = 'http://lorempixel.com/400/200/';

  isActive = true;

  onDivClick() {
    console.log("Handled by Div");
    
  }

  onClick($event) {
    // to prevent bubbling up event to parent element, call stopPropagation()
    $event.stopPropagation();
    console.log('Clicked', $event);
  }

  post = {
    title: "Title",
    isFavorite: true,
    isLiked: false,
    numLikes: 10
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  onLikeChange($event) {
    this.post.numLikes += $event.newValue;
  }
 }