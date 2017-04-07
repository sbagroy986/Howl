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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  }

  close(){
  	this.navCtrl.pop();
  }

  next(time){
  	this.navCtrl.push(ActivityWherePage, {
  		interest:this.interest,
  		date:this.date,
  		time:time
  	})
  }  
}
