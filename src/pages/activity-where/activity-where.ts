import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityTitlePage } from '../activity-title/activity-title';

/*
  Generated class for the ActivityWhere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-where',
  templateUrl: 'activity-where.html'
})
export class ActivityWherePage {
  public interest:any;
  public date:any;
  public time:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
  }

  close(){
  	this.navCtrl.pop();
  }

  next(loc){
  	this.navCtrl.push(ActivityTitlePage, {
  		interest:this.interest,
  		date:this.date,
  		time:this.time,
  		location: loc
  	})
  } 
}
