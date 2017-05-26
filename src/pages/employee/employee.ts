/**
 * Created by Sravani on 4/13/2017.
 */
import {Component} from '@angular/core';
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'employee',
  templateUrl:'employee.html',
  providers:[EmployeeService]
})
export class Employee{
  public employeedetails:any={};
  constructor(private employeeservice:EmployeeService){

    this.employeedetails = employeeservice.getEmployeeList();
    console.log(this.employeedetails,"empdetails");
    console.log(this.employeedetails.phone);
  }



}
