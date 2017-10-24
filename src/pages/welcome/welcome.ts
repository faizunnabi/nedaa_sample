import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }
}
