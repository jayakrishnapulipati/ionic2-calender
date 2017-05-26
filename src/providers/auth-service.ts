import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

 
@Injectable()
export class AuthService {
 
 

  constructor() {
   
   this.user=[
              
              { "empId":"admin","password":"1234"},
               { "empId":"ptg","password":"1234"}
              
             ]
  
  }
  user=this.user;
  setusers(user){
      this.user=user;
  }
  getusers(){
      return this.user;
  }
 
}
