import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
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


export class AdditionalBenefits {
item;

constructor(params: NavParams) {
    this.item = params.data.item;
}

}