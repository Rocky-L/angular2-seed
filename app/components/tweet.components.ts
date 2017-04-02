import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.components';

@Component({
  selector: 'tweet',
  templateUrl: 'app/templates/tweet.template.html',
  styleUrls: ['app/styles/tweet.style.css'],
  directives: [LikeComponent]
})

export class TweetComponent {
  @Input() tweet;
  constructor() {
  }
}