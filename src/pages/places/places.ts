import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places';

/**
 * Generated class for the PlacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  items:any = [];

  constructor(public navCtrl: NavController, private places:PlacesProvider) {
    this.places.load().then((data)=>{
      this.items = data;
    })
  }

  selectItem(id){
    this.navCtrl.push('PlacePage', {id:id});
  }

}
