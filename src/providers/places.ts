import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
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

  constructor(private authHttp: AuthHttp,
              private endpoints: EndpointsProvider) {
  }

  getPlaces():Observable<any>  {
    return this.authHttp.get(this.endpoints.getPlaces())
      .map(res => res.json())
      .catch(err => Observable.throw(this.handleErrors(err)));
  }

  private handleErrors(err: any): any {
    if (!err.ok && err.statusText == '') {
      err.statusText = 'Erreur de connexion avec le serveur';
    }
    return err;
  }

}
