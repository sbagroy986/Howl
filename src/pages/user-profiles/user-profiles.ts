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
  public auth_user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', age:24,mutual_friends:40, followers:68, following:195 , interests: 'Food, Sports, Photography, Books', occupation: 'Analyst at GenCorp Inc.' , activity_count:42, about: 'Foodie and Movie Buff. I love playing soccer and tennis. Netflix and chill?', activities: [{name: 'Activity1', description: 'Misc',id: 1, creator: {id: 22}},{name: 'Activity2', description: 'Misc',id: 2,creator: {id: 23}}]}
  public my_profile=true;
  public loaded=false;
  public not_my_profile=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fixUser(this.navParams);
  }

  fixUser(params) {
    this.user=this.auth_user;
  }

  openSettings(){
    NativeStorage.getItem('auth_user').then(data=>{
      this.auth_user=data;
      this.user=data;
      console.log("here");
      this.navCtrl.push(SettingsPage,{auth_user: this.auth_user});
    });
  }

  ionViewDidLoad() {
    NativeStorage.getItem('auth_user').then(data=>{
      this.auth_user=data;
      this.user=data;
      this.loaded=true;
      console.log("here");
    });
  }

  viewActivity(activity){
    this.navCtrl.push(ActivityPage,{
      activity: activity
    });
  }

  close(){
    this.navCtrl.pop();
  }
}
