import { Component,ElementRef,ViewChild} from '@angular/core';
import {  NavController, NavParams,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
  selector: 'page-employee-info',
  templateUrl: 'employee-info.html',
})
export class EmployeeInfo {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private geolocation:Geolocation,private platform:Platform) {
     this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  
  ionViewDidLoad() {
    
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      console.log("Success");
      console.log("lat"+position.coords.latitude+"log"+position.coords.longitude);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      console.log(position.coords.latitude+""+position.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    }); 
  }
}
