import {Component} from 'angular2/core';
import {CoursesComponent} from './components/courses.components'; // import the component first to make it visible in directives
import {AuthorsComponent} from './components/authors.components';

@Component({
    selector: 'my-app',
    template: `
                <h1>Hello Angular</h1>
                <courses></courses>
                <authors></authors>
              `,
    directives: [CoursesComponent, AuthorsComponent] // any directives or components used inside this current component
})
export class AppComponent { }