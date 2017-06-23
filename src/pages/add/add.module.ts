import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './add';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';

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
  ]
})
export class AddPageModule {}
