import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AdditionalBenefits } from './benefits.additional';
import { EmailBenefits } from './benefits.email';


@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html',

})
export class Benefits {

isHealthFlipped:boolean;
isDentalFlipped:boolean;
isInsureFlipped:boolean;
items = [];
emailCards = [];

constructor(public navCtrl: NavController, public navParams: NavParams,private popoverCtrl: PopoverController,) {

this.isHealthFlipped = false;
this.isDentalFlipped = false;
this.isInsureFlipped = false;


this.items = [
      {
        'title': 'Life Time AD & D',
        'description': 'In insurance, accidental death and dismemberment (AD&D) is a policy that pays benefits to the beneficiary if the cause of death is an accident. This is a limited form of life insurance which is generally less expensive.',

      },
      {
        'title': 'Short-Term Disabality',
        'description': 'Short-Term Disability (STD) pays you a portion of your income for a short period of time after you run out of sick leave. Depending on your plan, STD generally will pay you for between 9 and 52 weeks (or 1 year). Long-Term Disability (LTD) pays you a portion of your income after you run out of both sick leave and STD.',

      },
       {
        'title': 'Long-Term Disabality',
        'description': 'Long-term disability insurance (LTD) is an insurance policy that protects an employee from loss of income in the event that he or she is unable to work due to illness, injury, or accident for a long period of time.',
      },

    ]
}

 

flipHealthCard(){
    if(this.isHealthFlipped ){
     this.isHealthFlipped  = false;
    }
    else{
      this.isHealthFlipped  = true;
    }
  }

  flipDentalCard(){
    if(this.isDentalFlipped ){
     this.isDentalFlipped  = false;
    }
    else{
      this.isDentalFlipped  = true;
    }
  }

  flipInsureCard(){
    if(this.isInsureFlipped ){
     this.isInsureFlipped  = false;
    }
    else{
      this.isInsureFlipped  = true;
    }
  }

    presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {

    });

    popover.present({
      ev: ev
    });
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(AdditionalBenefits, { item: item });
  }


}





@Component({
  template: `
   <ion-row>
   <ion-col>
     <button (click)="openEmailCards()" ion-item detail-none class="text-button text-smaller">Mail Cards</button>
        </ion-col>
  </ion-row>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;


  constructor(private navParams: NavParams,private nav: NavController) {

  }

  ngOnInit() {
    if (this.navParams.data) {

    }
  }

  openEmailCards() {
    this.nav.push(EmailBenefits);
  }

}
