import { Component,ElementRef,AfterViewChecked  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Holiday page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-holiday',
  templateUrl: 'holiday.html',
})
export class Holiday implements AfterViewChecked {
  public date:any=[];
  currentDate:Date;
  count : number = 0;
  holidays: Array<{ day: string, date: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private elementRef: ElementRef) {
    this.holidays = [
      { "day": "New Year Day", "date": "Jan 1,2017" },
      { "day": "Martin Luther King,Jr.Day", "date": "Jan 29,2017" },
      { "day": "Presidents Day", "date": "Feb 16,2017" },
      { "day": "Memorial Day", "date": "May 25,2017" },
      { "day": "Independance Day", "date": "Jul 04,2017" },
      { "day": "Labor Day", "date": "Sep 7,2017" },
      { "day": "Thanksgiving Day", "date": "Nov 26,2017" },
      { "day": "Day After Thanksgiving", "date": "Nov 27,2017" },
      { "day": "Christmas", "date": "Dec 25,2017" },
    ]

  }

 ngAfterViewChecked() {
    this.checkTwoDates( "May 25,2017","Jan 1,2017");
   console.log( this.date,"date");
  /* if(this.count < 1 ){
       this.count++;
       var val =  this.getColserdate()
       var ele = document.getElementById('item'+ val);
       ele.classList.add("chgBackground");
    }*/
  }

 /*getColserdate(){
   var dates = [];
    this.currentDate = new Date("May 25,2017");

    console.log( this.currentDate);
   for (var i in this.holidays) {
     var checkDate = new Date(this.holidays[i].date);
     if(this.currentDate < checkDate){
       return i;
     }
    }
 }
*/


  checkTwoDates(date1, date2) { // YYYY MM DD should be in this format to compare.
  date1 = date1.split('-');
  date2 = date2.split('-');
  console.log(date1,"date1");
    console.log(date2,"date2");
  date1 = new Date(parseInt(date1[0], 10), (parseInt(date1[1], 10) - 1), date1[2]);
  date2 = new Date(parseInt(date2[0], 10), (parseInt(date2[1], 10) - 1), date2[2]);
  return date1 > date2;
}


}
