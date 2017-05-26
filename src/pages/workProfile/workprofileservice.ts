/**
 * Created by Sravani on 4/13/2017.
 */
import{Http} from '@angular/http';
import{Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()

export class WorkProfileService {
  constructor(private http: Http) {

  }

  public workEmployeeDetails: any = {};

  getWorkEmployee() {
    return this.workEmployeeDetails = {
      'phone': '510.248.3368',
      'mail': 'mario.chlmers@abbco.com',
      'address': '123 main street,San Francisico,Ca,90210'
    };
  }
}
