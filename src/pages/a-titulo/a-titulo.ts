import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ATituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-titulo',
  templateUrl: 'a-titulo.html',
})
export class ATituloPage {
  
  canciones = ['Lift Me Up','Watch You Bleed','You','Wrong Side of Heaven','Burn MF','I.M.Sin','Anywhere But Here','Dot Your Eyes','M.I.N.E','Mama Said Knock You Out','Diary of a Dead Man']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ATituloPage');
  }

}
