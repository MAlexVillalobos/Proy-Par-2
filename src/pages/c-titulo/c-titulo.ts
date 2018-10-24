import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CTituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c-titulo',
  templateUrl: 'c-titulo.html',
})
export class CTituloPage {

  canciones = ['Tease Me Please Me','Dont Believe Her','To Be With You In Heaven','Restless Night','Kicks After Six','Crazy World','Send Me An Angel']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CTituloPage');
  }

}
