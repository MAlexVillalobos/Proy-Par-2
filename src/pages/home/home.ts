import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ACaratulaPage } from '../a-caratula/a-caratula';
import { ANombrePage } from '../a-nombre/a-nombre';
import { ATituloPage } from '../a-titulo/a-titulo';
import { AValoracionPage } from '../a-valoracion/a-valoracion';
import { BCaratulaPage } from '../b-caratula/b-caratula';
import { BTituloPage } from '../b-titulo/b-titulo';
import { BValoracionPage } from '../b-valoracion/b-valoracion';
import { CCaratulaPage } from '../c-caratula/c-caratula';
import { CNombrePage } from '../c-nombre/c-nombre';
import { CTituloPage } from '../c-titulo/c-titulo';
import { CValoracionPage } from '../c-valoracion/c-valoracion';
import { DCaratulaPage } from '../d-caratula/d-caratula';
import { DNombrePage } from '../d-nombre/d-nombre';
import { DTituloPage } from '../d-titulo/d-titulo';
import { DValoracionPage } from '../d-valoracion/d-valoracion';
import { ECaratulaPage } from '../e-caratula/e-caratula';
import { ENombrePage } from '../e-nombre/e-nombre';
import { ETituloPage } from '../e-titulo/e-titulo';
import { EValoracionPage } from '../e-valoracion/e-valoracion';
import { BNombrePage } from '../b-nombre/b-nombre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  AC = ACaratulaPage;
  AN = ANombrePage;
  AT = ATituloPage;
  AV = AValoracionPage;

  BC = BCaratulaPage;
  BN = BNombrePage;
  BT = BTituloPage;
  BV = BValoracionPage;

  CC = CCaratulaPage;
  CN = CNombrePage;
  CT = CTituloPage;
  CV = CValoracionPage;

  DC = DCaratulaPage;
  DN = DNombrePage;
  DT = DTituloPage;
  DV = DValoracionPage;

  EC = ECaratulaPage;
  EN = ENombrePage;
  ET = ETituloPage;
  EV = EValoracionPage;

  constructor(public navCtrl: NavController) {

  }
  // FFDP
  A_Caratula(){
    this.navCtrl.push(this.AC);
  }
  A_Nombre(){
    this.navCtrl.push(this.AN);
  }
  A_Titulo(){
    this.navCtrl.push(this.AT);
  }
  A_Valoraciones(){
    this.navCtrl.push(this.AV);
  }
  // WHITESNAKE
  B_Caratula(){
    this.navCtrl.push(this.BC);
  }
  B_Nombre(){
    this.navCtrl.push(this.BN);
  }
  B_Titulo(){
    this.navCtrl.push(this.BT);
  }
  B_Valoraciones(){
    this.navCtrl.push(this.BV);
  }
  // SCORPIONS
  C_Caratula(){
    this.navCtrl.push(this.CC);
  }
  C_Nombre(){
    this.navCtrl.push(this.CN);
  }
  C_Titulo(){
    this.navCtrl.push(this.CT);
  }
  C_Valoraciones(){
    this.navCtrl.push(this.CV);
  }
  // GUNSNROSES
  D_Caratula(){
    this.navCtrl.push(this.DC);
  }
  D_Nombre(){
    this.navCtrl.push(this.DN);
  }
  D_Titulo(){
    this.navCtrl.push(this.DT);
  }
  D_Valoraciones(){
    this.navCtrl.push(this.DV);
  }
  // METALLICA
  E_Caratula(){
    this.navCtrl.push(this.EC);
  }
  E_Nombre(){
    this.navCtrl.push(this.EN);
  }
  E_Titulo(){
    this.navCtrl.push(this.ET);
  }
  E_Valoraciones(){
    this.navCtrl.push(this.EV);
  }
  
}
