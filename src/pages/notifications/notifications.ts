import { Component } from '@angular/core';
import { IonicPage,ModalController,ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Notifications page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class Notifications {

  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
    
  }

}
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios"> Back</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
        <ion-item>
        <h2>{{character.name}}</h2>
        </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{ item.description }}
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
   public navCtrl:NavController,
       public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'E-Mail(client)',
       
        items: [
          { description: 'Hi, Send me current status of the project.' }
        ]
      },
      {
        name: 'E-Mail(office)',
       
        items: [
          
          { description: 'Hi all, This is to inform you that tomorrow client visit is there.So, all should come in formals.' }
        ]
      },
      {
        name: 'Message(client)',
       
        items: [
         
          { description: 'I would like to inform you that you are appriciated for completion of project.' }
        ]
      },
      {
        name: 'Message(office)',
       
        items: [
          { description: 'Hi all, this is to inform you that everyone should work for 9 hrs a day.' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}