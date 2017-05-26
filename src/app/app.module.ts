import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Benefits } from '../pages/benefits/benefits';
import { Contact } from '../pages/contact/contact';
import { DashboardComponent } from '../pages/dashboard/dashboard';
import { Employee } from '../pages/employee/employee';
import { Holiday } from '../pages/holiday/holiday';
import { Login } from '../pages/login/login';
import { Menu } from '../pages/menu/menu';
import { Notifications } from '../pages/notifications/notifications';
import { Profile } from '../pages/profile/profile';
import { Settings } from '../pages/settings/settings';
import { settingsLegal} from '../pages/settings/settingsLegal';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService}from '../providers/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { ContactsService} from '../pages/contact/contact.service';
import { EmployeeInfo } from '../pages/contact/employee-info';
import { RoundProgressModule} from  "angular-svg-round-progressbar";
import { AdditionalBenefits} from '../pages/benefits/benefits.additional';
import { CalendarModule } from 'angular-calendar';
import { ProfileService} from "../pages/profile/profile.service";
import { ProfilePic} from "../pages/profile/profilePic/profilePic";
import { EmailBenefits} from "../pages/benefits/benefits.email";
import { PopoverPage } from '../pages/benefits/benefits';
import { HttpModule } from '@angular/http';
import { EmployeeService} from '../pages/employee/employee.service';
import { WorkProfileComponent} from '../pages/workProfile/workprofile';
import { WorkProfileService} from '../pages/workProfile/workprofileservice';
import { ModalContentPage} from '../pages/notifications/notifications';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DemoComponent} from "../pages/ex/ex";
import {ModalService} from "../providers/ModalService";
@NgModule({
  declarations: [
    MyApp, Benefits,Contact,DashboardComponent,Employee,Holiday,Login,Notifications,Profile,Settings,Menu,EmployeeInfo,AdditionalBenefits,
    ProfilePic,EmailBenefits,PopoverPage,WorkProfileComponent,settingsLegal,ModalContentPage,DemoComponent
  ],
  imports: [
    BrowserModule,RoundProgressModule,HttpModule, FormsModule,BrowserAnimationsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    NgbModule.forRoot(),
    CalendarModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   Benefits,Contact,DashboardComponent,Employee,Holiday,Login,Notifications,Profile,Settings,Menu,EmployeeInfo,AdditionalBenefits,
   ProfilePic,EmailBenefits,PopoverPage,WorkProfileComponent,settingsLegal,ModalContentPage,DemoComponent

  ],
  providers: [  AuthService,ContactsService,ProfileService,EmployeeService,WorkProfileService,
    StatusBar,
    SplashScreen,Geolocation,ModalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
