import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
  }
  goHome(){
    this.navCtrl.push(TabsPage);
  }
}
