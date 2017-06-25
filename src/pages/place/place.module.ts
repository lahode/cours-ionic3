import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacePage } from './place';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';
import { MapComponentModule } from '../../components/map/map.module';

@NgModule({
  declarations: [
    PlacePage,
  ],
  imports: [
    IonicPageModule.forChild(PlacePage),
    HeaderContentComponentModule,
    MapComponentModule
  ],
  exports: [
    PlacePage
  ]
})
export class PlacePageModule {}
