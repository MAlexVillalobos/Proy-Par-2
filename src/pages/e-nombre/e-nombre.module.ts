import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ENombrePage } from './e-nombre';

@NgModule({
  declarations: [
    ENombrePage,
  ],
  imports: [
    IonicPageModule.forChild(ENombrePage),
  ],
})
export class ENombrePageModule {}
