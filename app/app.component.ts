import {Component} from 'angular2/core';
/* first project code */
//import {CoursesComponent} from './components/courses.components'; // import the component first to make it visible in directives
//import {AuthorsComponent} from './components/authors.components';
import {StarComponent} from './components/star.components';

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
                <div (click) = "onDivClick()">
                  <button (click)="onClick($event)"> Event Binding </button> <!-- $event is a DOM object -->
                </div>
                <button on-click="onClick($event)"> Event Binding </button>
                <br/>
                <p> ---------------------------------------- </p>
                <br/>
                <input type="text" [value]="title" (input)="title = $event.target.value" /> <!-- bad practice -->
                <input type="text" [(ngModel)]="title" /> <!-- [()] property && event binding -->
                <input type="text" bindon-ngModel="title" /> <!-- equivalent -->

                <input type="button" (click) = "title = ''" value="Clear"/>
                Preview: {{title}}
                <br/><br/>
                <star style="margin-left: 10em;"></star>
              `,
    directives: [StarComponent]
})
export class AppComponent { 
  title = 'Angular App';
  imageUrl = 'http://lorempixel.com/400/200/';

  isActive = true;

  onDivClick() {
    console.log("Handled by Div");
    
  }

  onClick($event) {
    // to prevent bubbling up event to parent element, call stopPropagation()
    $event.stopPropagation();
    console.log('Clicked', $event);
  }
 }