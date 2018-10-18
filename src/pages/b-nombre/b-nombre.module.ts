import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BNombrePage } from './b-nombre';

@NgModule({
  declarations: [
    BNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(BNombrePage),
  ],
})
export class BNombrePageModule {}
