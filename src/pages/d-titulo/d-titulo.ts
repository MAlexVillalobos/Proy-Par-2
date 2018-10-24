import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DTituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-d-titulo',
  templateUrl: 'd-titulo.html',
})
export class DTituloPage {

  canciones = ['Welcome To The Jungle','Its So Easy','Nightrain','Out Ta Get Me','Mr Brownstone','Paradise City','My Michelle','Think About You','Sweet Child o Mine','Youre Crazy','Anything Goes','Rocket Queen']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DTituloPage');
  }

}
