import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {WelcomePage} from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav)
  nav: Nav;
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  goWelcome(){
    this.nav.setRoot(WelcomePage);
  }
}
