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
  public date="";
  public days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public today:any;
  public tomorrow:any;
  public day_after:any;
  public today_string:any;
  public tomorrow_string:any;
  public day_after_string:any;
  public months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  }

  ionViewDidLoad(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();
    var day=today.getDay();
    this.today=(mm+1)+"/"+dd+"/"+yyyy;
    this.tomorrow=(mm+1)+"/"+(dd+1)+"/"+yyyy;
    this.day_after=(mm+1)+"/"+(dd+2)+"/"+yyyy;
    this.today_string="Today"//, "+this.days[day]+", "+dd+" "+this.months[mm];
    this.tomorrow_string="Tomorrow"//, "+this.days[(day+1)%7]+", "+(dd+1)+" "+this.months[mm];
    this.day_after_string="Day After Tomorrow"//, "+this.days[(day+2)%7]+", "+(dd+2)+" "+this.months[mm];
  }

  close(){
  	this.navCtrl.pop();
  }

  ionViewWillEnter() {
    this.date="";
  }
  
  next(date){
    if (date==="picker"){
      date=this.date;
    }
    console.log(date);
  	this.navCtrl.push(ActivityTimePage, {
  		interest:this.interest,
  		date:date
  	})
  }
}
