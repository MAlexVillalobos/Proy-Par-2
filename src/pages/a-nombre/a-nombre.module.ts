import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ANombrePage } from './a-nombre';

@NgModule({
  declarations: [
    ANombrePage,
  ],
  imports: [
    IonicPageModule.forChild(ANombrePage),
  ],
})
export class ANombrePageModule {}
