import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ActivityPage } from '../activity/activity';
import { NativeStorage } from 'ionic-native';

/*
  Generated class for the UserProfiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-profiles',
  templateUrl: 'user-profiles.html'
})
export class UserProfilesPage {
  public user:any;
  public auth_user:any;
  public my_profile=true;
  public age_string:any;
  public loaded=false;
  public interests=[];
  public activity_count:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loaded=false;
    this.fixUser(this.navParams);
    console.log("done fixing");
  }

  fixUser(params) {
    this.user=params.get('user');
  }

  openSettings(){
    this.navCtrl.push(SettingsPage,{
        auth_user: this.auth_user
        // auth_user:{"_id" : ObjectId("58ee8fb0b264581444445169"),"interests" : [ {"userInterest" : false,"name" : "Food"}, {"userInterest" : false,"name" : "Photography"}, {"userInterest" : true,"name" : "Books"}, {"userInterest" : true,"name" : "Party"}, {"userInterest" : false,"name" : "Comics"}, {"userInterest" : true,"name" : "Sports"}, {"userInterest" : true,"name" : "Fashion"}, {"userInterest" : true,"name" : "Dance"}, {"userInterest" : false,"name" : "Arts"}, {"userInterest" : false,"name" : "LGBTQ"}, {"userInterest" : false,"name" : "Movies"}, {"userInterest" : false,"name" : "Career"}, {"userInterest" : false,"name" : "Pets"}, {"userInterest" : false,"name" : "Writing"}, {"userInterest" : false,"name" : "Music"}, {"userInterest" : false,"name" : "Technology"}, {"userInterest" : false,"name" : "Adventure"}, {"userInterest" : false,"name" : "Travel"}, {"userInterest" : false,"name" : "Language"}, {"userInterest" : false,"name" : "Health"}, {"userInterest" : false,"name" : "Theatre"}, {"userInterest" : false,"name" : "Gaming"}],"picture" : "https://graph.facebook.com/1325876177458941/picture?type=large","age_range" : {"min" : 21},"user_id" : "1325876177458941","name" : "Divyansh Agarwal","activities" : [    1],"new_user" : false,"gender" : "male"}});
  }

  ionViewDidLoad() {
    this.loaded=false;
    NativeStorage.getItem('auth_user').then(data=>{
      this.auth_user=data;
      console.log(data);
      if (this.user == null || (this.user!=null && (this.auth_user['user_id']==this.user['user_id']))) this.user=this.auth_user;this.my_profile=true;
      this.loadInterests();
      this.loaded=true;
    });
  }

  loadInterests(){
    this.interests=[];
    for (let interest in this.user.interests){
      if(this.user.interests[interest]['userInterest'])
        this.interests.push(this.user.interests[interest]['name']);
    }
    let age_range = this.user.age_range;
    if ('max' in age_range){
      this.age_string= "Between " + age_range['min'] + " and " + age_range['max'] + " years old";
    }
    else if('min' in age_range){
      this.age_string= "At least " + age_range['min'] + " years old";
    }
    else{
      this.age_string= "Age unavailable";
    }
    this.user['gender']=this.user['gender'].charAt(0).toUpperCase() + this.user['gender'].substr(1).toLowerCase();
    this.activity_count=this.user['activities'].length;
  }

  viewActivity(activity){
    this.navCtrl.push(ActivityPage,{
      activity: activity
    });
  }

  back(){
    this.navCtrl.pop();
  }

  clearData(){
    console.log("CLEAR");
    this.loaded=false;
    this.ionViewDidLoad();
  }

  ionViewWillEnter(){
    this.clearData(); 
  }

}
