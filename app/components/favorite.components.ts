import {Component, Input, EventEmitter, Output} from 'angular2/core'; // EventEmitter is a class we use to publish event

@Component({
  selector: 'favorite',
  templateUrl: 'app/templates/favorite.template.html', // template url starts from project root
  // inputs: ['isFavorite: is-favorite'], // pros: can add all input properties in one place; cons: need to change the name if the property name is changed
  // outputs: ['change']
  styles: [`
    .glyphicon-star {
      color: orange;
    }
  `]
  // styleUrls: []
})
export class FavoriteComponent {
  @Input() isFavorite = true; // no need to put inputs in @Component
  // starClass = 'glyphicon-star';

  @Output() change = new EventEmitter();

  onClick() {
    // this.starClass = this.starClass == 'glyphicon-star' ? 'glyphicon-star-empty' : 'glyphicon-star';
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite}); // publish change event
  }
}