import {Component} from 'angular2/core';
import {CourseService} from '../services/courses.service';
import {AutoGrowDirective} from '../directives/auto-grow.directive';

@Component({
  selector: 'courses', // when angular sees this selector (in html), it will create an instance/component in host element
  // template: '<h2> Courses </h2>' // a HTML template
  template: `<h2> Courses </h2>
              {{title}}
              <input type="text" autoGrow />
              <ul>
                <li *ngFor="#course of courses, #i = index">
                  {{ i + 1 }} {{ course }}
                </li>
              </ul>
            `,
            // back tick used to break to multiple lines
            // {{}} interpolation, one-way binding
            // #course: a way to declare local variable
            // *ngFor: directive
  providers: [CourseService], // dependencise
  directives: [AutoGrowDirective] // directives
})
export class CoursesComponent {
  title = 'The title of courses page'; // title: string = 'The title of courses page';
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourser();
    // object name: carmel, class, cap
    // new CourseService(); // bad practice because of coupling, and unit testing
  }
}