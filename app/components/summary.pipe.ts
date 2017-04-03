import {Pipe, PipeTransform} from 'angular2/core'; // PipeTransform is an interface

@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
  transform(value: string, args: string[]) {
    var limit = (args && args[0]) ? parseInt(args[0]) : 50;
    if (value)
      return value.substr(0, limit) + '...';
  } // method of PipeTransform interface
}