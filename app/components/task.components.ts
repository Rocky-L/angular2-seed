import {Component} from 'angular2/core';

@Component({
  selector: 'task',
  template: `
    <ul>
      <li> Title: {{ task.title }} </li>
      <li> Assigned to: {{ task.assignee?.role?.name }} </li>
    </ul>
  `
})
export class TaskComponent {
  task = {
    title: 'Review applications',
    assignee: {
      name: 'null'
    }
  }
}