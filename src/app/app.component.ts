import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  

 rootPage:any = Login;

/*  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

   
    this.pages = [
      { title: 'Login', component: Login }
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
  
    this.nav.setRoot(page.component);
  }*/
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
