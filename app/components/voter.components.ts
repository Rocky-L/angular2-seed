import {Component, Input} from 'angular2/core';

@Component({
  selector: 'vote',
  template: `
    <div>
      <i 
          class="glyphicon glyphicon-menu-up"
          [class.highlighted] = "voted == 1"
          (click)="vote()">
      </i>
      <br />
      <span class="votes"> {{votes}} </span>
      <br />
      <i
          class="glyphicon glyphicon-menu-down"
          [class.highlighted] = "voted == -1"
          (click)="devote()">
      </i>
    </div>
  `,
  styles: [`
    div {
      width: 20px;
      text-align: center;
      color: #999;
    }
    .glyphicon-menu-up.glyphicon-menu-down {
      font-size: 4em;
      cursor: pointer;
    }
    .votes {
      margin-left: 0.1em;
      font-size: 1.2em;
    }
    .highlighted {
      font-weight: bold;
      color: orange;
    }
  `]
})

export class VoterComponent {
  @Input() votes = 10;
  @Input() voted = 0;

  vote() {
    this.votes += this.voted <= 0 ? 1 : 0;
    this.voted += this.voted < 1 ? 1: 0; 
  }

  devote() {
    this.votes -= this.voted >= 0 ? 1 : 0;
    this.voted -= this.voted > -1 ? 1: 0; 
  }
}