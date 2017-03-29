import {Component} from 'angular2/core';
import {CourseService} from '../services/courses.service';

@Component({
  selector: 'courses', // when angular sees this selector (in html), it will create an instance/component in host element
  // template: '<h2> Courses </h2>' // a HTML template
  template: `<h2> Courses </h2>
              {{title}}
              <ul>
                <li *ngFor="#course of courses">
                  {{ course }}
                </li>
              </ul>
            `,
            // back tick used to break to multiple lines
            // {{}} interpolation, one-way binding
            // #course: a way to declare local variable
            // *ngFor: directive
  providers: [CourseService] // dependencise
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