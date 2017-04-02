import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'like',
  template: `
    <i
      class="glyphicon glyphicon-heart"
      [class.highlighted]="isLiked"
      (click)="onClick()">
    </i>
    <span> {{likes}} </span>
  `,
  styles: [`
    .glyphicon-heart {
      color: #ccc;
      cursor: pointer;
    }

    .highlighted {
      color: deeppink;
    }
  `]
  // templateUrl: 'app/templates/like.template.html'
})
export class LikeComponent {
  @Input() isLiked = false;
  @Input() likes = 0;

  @Output() change = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.likes += this.isLiked ? 1 : -1;
    this.change.emit({newValue: this.likes});
  }
}