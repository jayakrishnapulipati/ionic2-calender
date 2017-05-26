/**
 * Created by Sravani on 5/24/2017.
 */
import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef, Input, OnInit} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { NavController, NavParams} from 'ionic-angular';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {ModalService} from "../../providers/ModalService";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'ex.html'
})
export class DemoComponent implements OnInit{
  empId;
  list;
  compId;
  companyId;
  companyDesc;
  /*companyId;*/
  companyName;
  @Input() payGroupCompany:string;
  headers;
  resData;
  payGroupData;
  payGroupName;
  company;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  ngOnInit() {
    this.getList();
  }

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];


  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,private http: Http, private nav: NavController,public navParams: NavParams,private modalservice:ModalService) {}




  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }

  getList(){
    this.headers = new Headers();
    var x=localStorage.getItem("token");
    this.headers.append('user_token',x);
    

    this.http.get("http://183.82.48.194:8689/api-payroll/v1/api/timesheetPayroll/userCompanies",{headers:this.headers}).subscribe(
      res=>{
        this.list=res.json().data;
        this.companyName =this.list.map((item)=>{
          return item.orgDesc;
        })
        this.companyDesc= this.companyName[0];

        this.selectCompany(this.companyDesc);
      }
    );


  }


  checkExists(date) {
    this.payGroupData.filter(function (obj) {
       // compare if exists a color else another color
    })
    return colors.red;
  }

  selectCompany(companyDesc) {
    this.events = [];
    this.compId = this.list.filter((obj,index)=> {
      if(obj.orgDesc === companyDesc){
        return obj.orgId;
      }
    });
    this.companyId=this.compId[0].orgId;

    localStorage.setItem("companyId", this.companyId);
    let headers = new Headers();
    var x = localStorage.getItem("token");
    headers.append('user_token', x);
    this.http.get("http://183.82.48.194:8689/api-payroll/v1/api/payroll/paygroups/" + this.companyId + "/2017-01-29/2017-01-29", { headers: headers }).subscribe(
      res => {

        this.resData = res.json();
        this.payGroupData = this.resData.data;
        console.log(this.payGroupData, 'this.payGroupData');
        console.log(this.events, 'events');
        var _that = this;
        this.payGroupData.map(function (obj) {
          _that.events.push({
            start: new Date(obj.payBeginDate),
            title: obj.payGroup+"(payGroup)"+"<br>"+obj.payrollStatusDesc+obj.payEndDate+"<br>"+obj.payGroupDesc,
            color: colors.red,
            actions: _that.actions
          });

          _that.events.push({
            start: new Date(obj.payEndDate),
            end: new Date(obj.payEndDate),
            title: obj.payGroup+"(payGroup)"+"<br>"+obj.payrollStatusDesc+obj.payEndDate+"<br>"+obj.payGroupDesc,
            color: colors.red,
            actions: _that.actions
          })
        });

        this.refresh.next();
        console.log(this.events, 'eventsssssss');
        for (var i = 0; i < this.payGroupData.length; i++) {
          this.payGroupCompany = this.payGroupData[i].payGroupDesc;
          localStorage.setItem("payGroupComapnyName",  this.payGroupCompany );
          this.payGroupName = this.payGroupData[i].payGroup;
          this.modalservice.setPayGroupComapanyName(this.payGroupCompany);
          this.modalservice.setPayGroupId(this.payGroupName);
          this.company = this.payGroupCompany;
        }
      }
    );
  }

}
