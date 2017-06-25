import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { EndpointsProvider } from './endpoints';

/*
  Generated class for the PlacesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlacesProvider {

  data: any;

  constructor(private authHttp: AuthHttp,
              private endpoints: EndpointsProvider) {
    this.data = null;
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.authHttp.get(this.endpoints.getPlaces())
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPlaceById(id){
    let selected = null
    this.data.map((place)=>{
        if(place.id==id) selected = place; return selected;
    })
    return selected
  }

}
