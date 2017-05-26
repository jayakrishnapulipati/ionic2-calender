import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService{
    constructor(private http:Http){

    }

    UsersList :any;
    getUsersList(){
        return this.UsersList ={
          "Profile": [
            {
              department: "Crop-Property Mgmt",
              reportsTo: "Brown,Belden",
              emplType: "Full Time",
              compBasis: "Annual",
              compRate: "$90,450.00"
            }],
          "Contact": [
            {
              phone: "949-263-3455",
              email: "vwhite@passco.com",
              address1: "2050 Main St",
              address2: "Suite 650",
              address3: "Irvain, CA 92614",
            }],
          "Service": [
            {
              noYears: "11 years 1 month",
              startDate: "Jun 1, 2014",

            }],
    };
    }
}
