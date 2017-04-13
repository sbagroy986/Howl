import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { ActivityDetailsPage } from '../activity-details/activity-details';

/*
  Generated class for the ActivityResults page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-results',
  templateUrl: 'activity-results.html'
})
export class ActivityResultsPage {
  public activities=[]
  public interest:any;
  public date:any;
  public time:any;
  public loc:any;
  public title:any;
  public sim_activities:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
  	this.loc=this.navParams.get('loc');
  	this.title=this.navParams.get('title');
    this.sim_activities=this.navParams.get('sim_activities');
    if(this.sim_activities.length === 0){
      this.createActivity();
    }
    console.log("SIM");
    console.log(this.sim_activities[0]);    
  }

  close(){
    this.navCtrl.pop();
  }

  viewActivity(activity){
    NativeStorage.getItem('auth_user').then(data=>{
      this.navCtrl.push(ActivityPage, {
        activity: activity,
        auth_user: data
      });
    });
  }

  createActivity(){
  	 this.navCtrl.push(ActivityDetailsPage,{
      interest:this.interest,
      date:this.date,
      time:this.time,
      loc: this.loc,
      title:this.title       
     })
  }  
}
