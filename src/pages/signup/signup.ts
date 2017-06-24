import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

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
              public viewCtrl: ViewController,
              private auth:AuthProvider) {
  }

  signup() {
    this.auth
      .signup({email:this.email,password:this.password })
      .subscribe(
       (jwt) => this.close(),
       err =>   this.error = err.statusText);
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
