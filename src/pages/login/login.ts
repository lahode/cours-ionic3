import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, ModalController } from 'ionic-angular';

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

    setTimeout(() => {
      loading.dismiss();
      this.handleError('Erreur!');
    }, 500);
  }

  handleError(error: any) {
    let message: string = `${error}`;

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}
