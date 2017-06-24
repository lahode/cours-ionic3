import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string;
  error:string;

  constructor(public readonly navCtrl: NavController,
              private readonly auth:AuthProvider,
              private readonly modalCtrl: ModalController,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController) {
  }

  openSignup(){
    let modal = this.modalCtrl.create('SignupPage');
    modal.present();
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.auth
      .login({email:this.email, password:this.password })
      .finally(() => loading.dismiss())
      .subscribe(
        () => {},
        err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string = `${error.statusText}`;

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}
