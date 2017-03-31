import {Component} from 'angular2/core';
/* first project code */
//import {CoursesComponent} from './components/courses.components'; // import the component first to make it visible in directives
//import {AuthorsComponent} from './components/authors.components';

@Component({
    selector: 'my-app',
    /* first project code */
    // template: `
    //             <h1>Hello Angular</h1>
    //             <courses></courses>
    //             <authors></authors>
    //           `,
    // directives: [CoursesComponent, AuthorsComponent] // any directives or components used inside this current component

    template: `
                <h1> {{ title }} </h1> <!-- interpolation -->
                <h1 [textContent] = "title"></h1> <!-- square equivalent -->

                <img src="{{ imgageUrl }}" />
                <img [src]="imageUrl" />
                <img bind-src="imageUrl" class="bind-src" />
                <!-- all of the above are property binding -->
                <br/>
                <p> ---------------------------------------- </p>
                <br/>
                <button class="btn btn-primary" [class.active]="isActive"> Class Binding </button> <!-- class binding, ps: bootstrap styling not working -->
                <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'"> Style Binding </button>
                <br/>
                <p> ---------------------------------------- </p>
                <br/>
                <button (click)="onClick()"> Event Binding </button>
                <button on-click="onClick()"> Event Binding </button>

              `
})
export class AppComponent { 
  title = 'Angular App';
  imageUrl = 'http://lorempixel.com/400/200/';

  isActive = true;

  onClick() {
    console.log('Clicked');
  }
 }