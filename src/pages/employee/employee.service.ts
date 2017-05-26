/**
 * Created by Sravani on 4/13/2017.
 */
import{Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
  export class EmployeeService {
  constructor(private http: Http) {

  }

  employeeDetails: any = {};

  getEmployeeList() {
    return this.employeeDetails = {
      'phone': '510.248.3368',
      'resedencyno': '323.240.522',
      'mail': 'mario.chlmers@abbco.com',
      'address': '123 main street,San Francisico,Ca,90210'
    };
  }
}
