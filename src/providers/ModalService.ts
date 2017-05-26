import {Injectable} from "@angular/core";

@Injectable()
export class ModalService {
    private nextValue = true;
    private disableValue = true;
    private formValue;
    private date;
    private PayGroupId;
    private payGroup;
    private company;
    private findStatus;
    private payGroupID;
    constructor() {

    }
    public setNextButton(val) {
        console.log('setting disable next button to'+ val);
        this.nextValue = val;
    }

    public getNextButton() {
        return this.nextValue;
    }
    public setDisableButton(val) {
        console.log('setting disable to'+ val);
        this.disableValue = val;
    }

    public getDisableButton() {
        return this.disableValue;
    }
    public setForm(form){
        this.formValue=form;
    }
    public getForm(){
        return this.formValue;
    }
     public setDate(date){
        this.date=date;
    }
    public getDate(){
        return this.date;
    }




    public setPayGroupId(PayGroupId){
        this.PayGroupId=PayGroupId;
    }
    public getPayGroupId(){
         return this.PayGroupId;
    }
    public setPayGroupComapanyName(payGroupCompany){
        this.payGroup= payGroupCompany;
    }
    public getPayGroupComapanyName(){
        return this.payGroup;
    }
    public setCompany(company){
        this.company=company;
    }
    public getCompany(){
        return this.company;
    }
    public setStatus(findStatus){
        this.findStatus=findStatus;
    }
    public getStatus(){
        return this.findStatus;
    }
    public setpayGroupID(payGroupID){
        this.payGroupID=this.payGroupID;
    }
    public getpayGroupID(){
        return this.payGroupID;
    }

}
