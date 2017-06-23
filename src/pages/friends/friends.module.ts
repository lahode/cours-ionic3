import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsPage } from './friends';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    FriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsPage),
    HeaderContentComponentModule,
  ],
  exports: [
    FriendsPage
  ]
})
export class FriendsPageModule {}
