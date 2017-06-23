import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesPage } from './places';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    PlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesPage),
    HeaderContentComponentModule
  ],
  exports: [
    PlacesPage
  ]
})
export class PlacesPageModule {}
