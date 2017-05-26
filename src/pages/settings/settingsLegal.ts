import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          {{ item.title }}
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      {{ item.description }}
    </ion-content>
  `
})


export class settingsLegal {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }

}
