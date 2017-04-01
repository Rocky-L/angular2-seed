import {Component} from 'angular2/core';

@Component({
  selector: 'star',
  template: `
              <!-- <i class="glyphicon {{starClass}}" style="font-size: 4em;" (click)="onClick()"></i>  --> <!-- my solution -->

              <i
                  class="glyphicon" <!-- base class -->
                  [class.glyphicon-star-empty]="!isFavorite" <!-- class binding -->
                  [class.glyphicon-star]="isFavorite"
                  (click)="onClick()"
                  style="font-size: 4em;">
              </i>
            `
})
export class StarComponent {
  isFavorite = true;
  // starClass = 'glyphicon-star';
  onClick() {
    // this.starClass = this.starClass == 'glyphicon-star' ? 'glyphicon-star-empty' : 'glyphicon-star';
    this.isFavorite = !this.isFavorite;
  }
}