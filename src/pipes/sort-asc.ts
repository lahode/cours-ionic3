import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortAscPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'sortAsc',
})
export class SortAscPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<any>, property:string="name") {
    return value.sort((a, b)=>{
        if(a[property] < b[property]) return -1;
        if(a[property] > b[property]) return 1;
        return 0;
    });
  }
}
