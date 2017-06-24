import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';

/**
 * Generated class for the AroundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-around',
  templateUrl: 'around.html',
})
export class AroundPage {

  @ViewChild(MapComponent)
  private map: MapComponent;

  ionViewDidEnter() {
    this.map.init(46.2043907, 6.143157699999961);
  }

}
