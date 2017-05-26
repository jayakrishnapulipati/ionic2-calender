import { Component } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Benefits } from '../benefits/benefits';
import { Contact } from '../contact/contact';
import { Notifications } from '../notifications/notifications';
import { Profile } from '../profile/profile';
import { DashboardComponent } from '../dashboard/dashboard';
import { Holiday } from '../holiday/holiday';
import { Employee } from '../employee/employee';
import { WorkProfileComponent} from '../workProfile/workprofile';
import { Settings } from '../settings/settings';
import { Login} from '../login/login';
import {DemoComponent} from "../ex/ex";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  @ViewChild(Nav) nav: Nav;
   rootPage: any = DashboardComponent;
   activePage:any;
  isShowMenu;
   menuCtrl;
   pages: Array<{title: string, component: any, icon:string}>;
   icons: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
      this.isShowMenu = this.navParams.get('menuClass');
      this.initializeApp();
       this.pages = [
      { title: 'Dashboard', component: DashboardComponent, icon:'home' },
      { title: 'Benefits', component: Benefits,icon:'briefcase' },
      { title: 'Profile', component:Profile,icon:'person' },
      { title: 'Notifications', component: Notifications,icon:'mail-open' },
      { title: 'Contact TriNet', component:Contact,icon:'call'  },
      { title: 'Holiday Calendar', component:Holiday,icon:'calendar'  },
      { title: 'Employee', component:Employee,icon:'contact'  },
      { title: 'workProfile', component:WorkProfileComponent,icon:'book'},
      { title: 'Settings', component:DemoComponent,icon:'settings'}

    ];
    this.activePage= this.pages[0];
  }


   initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    this.activePage=page;
  }
  checkActive(page){
    return page==this.activePage;
  }
  logout(){
    this.navCtrl.pop(Login);
  }
}
