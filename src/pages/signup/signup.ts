import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email:string;
  password:string;
  error:string;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController) {
  }

  signup() {
    this.navCtrl.setRoot('TabsPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
