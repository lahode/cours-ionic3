import { Injectable } from '@angular/core';

/*
  Generated class for the EndpointsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EndpointsProvider {

  API_PATH: string = "http://localhost:4300";

  getAuth(){
    return this.API_PATH + "/api/authenticate";
  }

  getLogin(){
    return this.API_PATH + "/login";
  }

  getSignup(){
    return this.API_PATH + "/signin";
  }

  getPlaces(){
    return this.API_PATH + "/api/places"
  }

}
