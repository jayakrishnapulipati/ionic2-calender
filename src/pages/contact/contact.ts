import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactsService} from './contact.service';
import {EmployeeInfo} from './employee-info';


/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  private data:any;
  private employeeData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private contactService:ContactsService) {
      this.data=this.contactService.getcontactData();
      this.employeeData=this.contactService.getEmployeeData();
      console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }
  employeeInfo(){
    this.navCtrl.push(EmployeeInfo);
  }

}
