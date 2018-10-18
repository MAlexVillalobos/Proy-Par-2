import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DNombrePage } from './d-nombre';

@NgModule({
  declarations: [
    DNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(DNombrePage),
  ],
})
export class DNombrePageModule {}
