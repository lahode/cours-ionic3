import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/toArray';

/**
 * Generated class for the GroupByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'groupBy',
  pure: false,
})
export class GroupByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, property: string="name") {
    let results = []
    Observable.from(value).groupBy(
      (item:any)=> { return item[property].substring(0,1); },
      (item:any)=> { return item })
      .flatMap(group => group.toArray())
      .subscribe((data)=>{
        results.push({value:data[0][property].substring(0,1),list:data});
      })
    return results;
  }
}
