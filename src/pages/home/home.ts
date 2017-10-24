import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {

  }

}
