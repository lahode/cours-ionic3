import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { Observable } from "rxjs";

import { User } from '../../models/user';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string = 'PlacesPage';
  tab2Root: string = 'AddPage';
  tab3Root: string = 'AroundPage';
  tab4Root: string = 'FriendsPage';

  user$:Observable<User>;

  constructor(public navCtrl: NavController,
              private auth:AuthProvider) {

    this.user$ = this.auth.user$;

  }

  logout() {
    this.auth.logout();
  }

}
