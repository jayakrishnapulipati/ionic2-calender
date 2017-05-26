import {Component,Output,EventEmitter} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ProfilePage} from "./profilePage/profilePage";
import {ContactPage} from "./contact/contact";
import {ServicePage} from "./service/service";
import {Profile} from "../profile";


@Component({
  selector: 'page-profilePic',
  templateUrl: 'profilePic.html',
})
export class ProfilePic {
  public image:any;
  private base64textString:String="";
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController

  ){}

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= 'data:image/png;base64,'+ btoa(binaryString);
  }

  dismiss() {
    this.viewCtrl.dismiss();
    localStorage.setItem('Image',JSON.stringify(this.base64textString));
    console.log(Image);
    /*this.navCtrl.push(Profile, {image: this.base64textString})*/
  }


}
