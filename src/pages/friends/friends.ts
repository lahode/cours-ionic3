import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

/**
 * Generated class for the FriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  private contactsfound: Array<any> = [];
  private error: string;

  constructor(private readonly platform: Platform,
              private readonly contacts: Contacts) {}

  ionViewDidEnter() {
    this.findFriends();
  }

  async findFriends() {

    await this.platform.ready();

    try {
      await this.contacts.find(['*']).then((contacts) => {
        contacts.forEach( (c)=> {
          if (c.name.givenName && c.phoneNumbers) {
            this.contactsfound.push({name: c.name.givenName, phone: c.phoneNumbers[0].value}); // grab only the properties you need avoiding birthday (ios bug on date formating) http://stackoverflow.com/questions/36798316/ionic-cordova-contacts-plugin-returns-invalid-date-on-ios-after-upgrade-to-ionic
          }
        });
      }, (error) => this.error = error);
    }
    catch(e) {
      this.error = e;
    }

  }


}
