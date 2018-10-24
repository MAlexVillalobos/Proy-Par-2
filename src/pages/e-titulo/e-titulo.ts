import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ETituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e-titulo',
  templateUrl: 'e-titulo.html',
})
export class ETituloPage {

  canciones = ['Blackened','And Justice For All','Eye Of The Beholder','One','The Shortest Straw','Harvester Of Sorrow','The Frayed Ends Of Sanity','To Live Is To Die','Dyers Eve']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ETituloPage');
  }

}
