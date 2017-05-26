/**
 * Created by Sravani on 4/13/2017.
 */
import{Component} from '@angular/core';
import {WorkProfileService} from "./workprofileservice";
@Component({
  selector:'workprofile',
  templateUrl:'workprofile.html',
  providers:[WorkProfileService]
})
export class WorkProfileComponent{
  public workemployeedetails:any={};
constructor(private workservice:WorkProfileService){
  this.workemployeedetails=workservice.getWorkEmployee();
  console.log(this.workemployeedetails,"workprofile");
}

}
