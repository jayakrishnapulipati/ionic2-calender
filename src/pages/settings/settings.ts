import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {settingsLegal} from "./settingsLegal";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Polices',
        'description': 'The use of the mobile app is subject to the Polices Agreement for Trinet Passport that you approved when you first logged on',

      },
      {
        'title': 'TRUSTe',
        'description': 'The use of the mobile app is subject to the TRUSTe Agreement for Trinet Passport that you approved when you first logged on',

      },
      {
        'title': 'Terms And Conditions',
        'description': 'The use of the mobile app is subject to the Terms And Conditions Agreement for Trinet Passport that you approved when you first logged on',
      },

    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(settingsLegal, { item: item });
  }

}
