import {Injectable} from '@angular/core';
@Injectable()
export class ContactsService{
    private data:any={};
    private heading:any={};
    private employeeSolutionCenter:any={};
    constructor(){
        this.data=[
            {
                
                "name":"Perry, Vanessa Lynn",
                "email":"vanessa.perry@trinet.com",
                "headings":"Account Services Consultant"
            },
            {
                "name":"Wong, Lalaine C.",
                "email":"lalaine.wong@trinet.com",
                "headings":"Human Captial Consultant"

            },
            {
                "name":"Ashraf, Amber",
                "email":"amber.ashraf@trinet.com",
                "headings":"Human Captial Director"
            }
            
        ]; 
        this.employeeSolutionCenter=[
              {
                
                "hours":"Monday-Friday 5 A.M. - 6 P.M. Pacific Time",
                "phone":"800-638-0461",
                "email":"employees@trinet.com",
                "headings":"Employee Solution Center"
            }
        ];
    }
    contactdata=this.data
    employeeSolution=this.employeeSolutionCenter
    setContactData(contactData){
        this.data=contactData;
    }
    getcontactData(){
        return this.data;
    }
    setEmployeeData(employeeSolution){
        this.employeeSolutionCenter=employeeSolution;
    }
    getEmployeeData(){
        return this.employeeSolutionCenter;
    }
    
}