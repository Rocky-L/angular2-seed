import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';

@Component({
  selector: 'post',
  template: `
    {{ post.title }}
    <br/>
    {{ post.body | summary:'100' }}
  `,
  pipes: [SummaryPipe]
})
export class PostComponent {
  post = {
    title: 'Angular Tutorial for Beginners',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales ipsum velit, vitae vulputate orci eleifend vel. Sed eleifend massa sit amet mauris facilisis, non ullamcorper diam accumsan. Donec et arcu interdum, posuere erat sed, cursus justo.
    `
  };
}