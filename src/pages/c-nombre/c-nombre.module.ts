import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CNombrePage } from './c-nombre';

@NgModule({
  declarations: [
    CNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(CNombrePage),
  ],
})
export class CNombrePageModule {}
