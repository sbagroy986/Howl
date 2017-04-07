import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityWherePage } from '../activity-where/activity-where';

/*
  Generated class for the ActivityTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-time',
  templateUrl: 'activity-time.html'
})
export class ActivityTimePage {
  public interest:any;
  public date:any;
  public time:any;
  
  public tenam:any;
  public fourpm:any;
  public sixpm:any;
  public eightpm:any;

  public tenam_string:any;
  public fourpm_string:any;
  public sixpm_string:any;
  public eightpm_string:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');

    this.tenam="10:00";
    this.fourpm="16:00";
    this.sixpm="18:00";
    this.eightpm="20:00";
    this.tenam_string="10 am";
    this.fourpm_string="4 pm";
    this.sixpm_string="6 pm";
    this.eightpm_string="8 pm";
  }

  close(){
  	this.navCtrl.pop();
  }

  ionViewWillEnter() {
    this.time="";
  }  

  next(time){
    if(time === 'picker'){
      time=this.time;
    }
  	this.navCtrl.push(ActivityWherePage, {
  		interest:this.interest,
  		date:this.date,
  		time:time
  	})
  }  
}
