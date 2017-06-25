import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places';
import { MapComponent } from '../../components/map/map';

/**
 * Generated class for the PlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  @ViewChild(MapComponent)
  private map: MapComponent;

  selectedPlace:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private places:PlacesProvider) {
    const selectedId = navParams.data.id;
    this.selectedPlace = places.getPlaceById(selectedId)
  }

  ionViewDidEnter() {
    const pos = this.selectedPlace;
    this.map.init(pos.lat, pos.long);
  }

  onClickBack(){
    this.navCtrl.pop();
  }

}
