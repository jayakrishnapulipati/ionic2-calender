import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Observable} from 'rxjs/Observable';


@Component({
  templateUrl: `benefits.email.html`
})


export class EmailBenefits {

checkItems:Array<any>;
buttonStatus:boolean;

constructor(params: NavParams,public toastCtrl: ToastController) {
this.buttonStatus = false;
this.checkItems = [
   {title:'Health Card', isChecked:false},
   {title:'Dental Card', isChecked:false},
   {title:'Insurence Card', isChecked:false},];
}

 sendEmail() {
    let toast = this.toastCtrl.create({
      message: 'Email Sent Successfully',
      duration: 2000,
      position: 'top'
    });

    toast.present(toast);
  }

  checkedForEmail(){
      var status = this.checkItems.find(a => a.isChecked === true);
      if(status){
      this.buttonStatus = true;
      }
      else{
        this.buttonStatus = false;
      }

  }

}