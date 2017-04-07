import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityTimePage } from '../activity-time/activity-time';

/*
  Generated class for the ActivityWhen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-when',
  templateUrl: 'activity-when.html'
})
export class ActivityWhenPage {
  public interest:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  }

  close(){
  	this.navCtrl.pop();
  }

  next(date){
  	this.navCtrl.push(ActivityTimePage, {
  		interest:this.interest,
  		date:date
  	})
  }
}
