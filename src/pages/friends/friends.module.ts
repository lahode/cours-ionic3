import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

import { FriendsPage } from './friends';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsPage),
    HeaderContentComponentModule,
    PipesModule
  ],
  exports: [
    FriendsPage
  ],
  providers: [
    Contacts
  ]
})
export class FriendsPageModule {}
