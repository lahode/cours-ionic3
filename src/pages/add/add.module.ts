import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './add';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
    HeaderContentComponentModule
  ],
  exports: [
    AddPage
  ],
  providers: [
    Camera
  ]
})
export class AddPageModule {}
