/**
 * Created by Sravani on 4/11/2017.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RoundProgressEase} from "angular-svg-round-progressbar";
import {NavController} from "ionic-angular";
import {MenuComponent} from "../menu/menuComponent";
import {Menu} from "../menu/menu";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

  current: number = 93;
  max: number = 120;
  stroke: number = 5;
  radius: number =50;
  semicircle: boolean = false;
  rounded: boolean = true;
  responsive: boolean = true;
  clockwise: boolean = true;
  color: string = "dodgerblue";
  background: string = '#eaeaea';
  duration: number = 700;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  earned:number=144;
  realCurrent: number = 0;
  taken:number=51;
  actual:number=48;
  accural:number=144;
  isShowMenu = false;
  constructor(private _ease:RoundProgressEase,public navCtrl:NavController) {
    // Kinda hacky way to get all of the easing functions at run-time, because it can
    // technically fetch something from up the prototype chain.
    for (let prop in _ease) {
      if (prop.toLowerCase().indexOf('ease') > -1) {
        this.animations.push(prop);
      };
    }
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
    this.navCtrl.push(Menu, {menuClass: this.isShowMenu});
  }

  increment(amount = 1) {
    this.current += amount;
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': 25 + 'px'
    };

  }
};
