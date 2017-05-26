import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Menu } from '../menu/menu';
import {FormBuilder, Validators} from "@angular/forms";


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  private user:any={};
  private userList:any;
 
  constructor(public formBuilder: FormBuilder,private nav: NavController,private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  this.userList = this.auth.getusers();
 
  } 
  login(user){
  
    for(var i=0;i<this.userList.length; i++){
      if(this.userList[i].empId == user.empId && this.userList[i].password == user.password){
         console.log(user);

         this.nav.push(Menu);
         break;
      }
     else{
         this.presentAlert();
         
      } 
    }
  }
   presentAlert(){
          let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: 'Invalid Credentials',
          buttons: ['OK']
          });
        alert.present();
      }
}
