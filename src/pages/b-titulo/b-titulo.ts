import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BTituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b-titulo',
  templateUrl: 'b-titulo.html',
})
export class BTituloPage {

  canciones = ['Still Of The Night','Here I Go Again','Is This Love','Love Aint No Stranger','Looking For Love','Now Youre Gone','Slide It In','Slow And Easy','Judgement Day','The Deeper The Love','Crying in the Rain','Fool For Loving you','Youre Gonna Break My Heart Again','Sweet Lady Luck']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BTituloPage');
  }

}
