import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import {ProfilePic} from "./profilePic/profilePic";
import {ProfileService} from "./profile.service";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[ProfileService]
})
export class Profile {
  prof: string = "profile";
  userList: any;
  profile: any;
  service: any;
  contact: any;
  imageSrc: any;
  constructor(public ProfileService: ProfileService, public modalCtrl: ModalController, public params: NavParams) {
    this.userList = ProfileService.getUsersList();
    this.profile=this.userList.Profile[0];
    this.service=this.userList.Service[0];
    this.contact=this.userList.Contact[0];
   /* this.imageSrc=JSON.parse(localStorage.getItem('Image'));
    console.log(localStorage.getItem('Image'));
    console.log(JSON.parse(localStorage.getItem('Image')));*/

    this.imageSrc = !JSON.parse(localStorage.getItem('Image')) ? '' :JSON.parse(localStorage.getItem('Image'));
  }

  openModal() {

    let modal = this.modalCtrl.create(ProfilePic);
    modal.present();
  }

}
