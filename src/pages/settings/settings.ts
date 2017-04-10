import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChooseInterestPage } from '../choose-interest/choose-interest';
import { Facebook, NativeStorage } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
    user: any;
    userReady: boolean = false;
    public auth_user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', age:24,mutual_friends:40, followers:68, following:195 , interests: 'Food, Sports..', occupation: 'Analyst at..' , activity_count:42, about: 'Foodie and Movie Buff. I love playing soccer and tennis. Netflix and chill?', activities: [{name: 'Activity1', description: 'Misc',id: 1, creator: {id: 22}},{name: 'Activity2', description: 'Misc',id: 2,creator: {id: 23}}]}

    public my_profile=false;
  public not_my_profile=true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fixUser(this.navParams);
  }

  fixUser(params) {
    if(!params.get('user')){
      this.user=this.auth_user;
      this.my_profile=true;
      this.not_my_profile=false;
    }
    else{
      this.user=params.get('user');
    }
  }

  ionViewDidLoad() {
  }

  back(){
  	this.navCtrl.pop();
  }
  interestPage(){
    this.navCtrl.push(ChooseInterestPage,{
      user_interests: ["Food","Photography","Comics"]
    });
  }

  ionViewCanEnter(){
    let env = this;
    NativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }

  doFbLogout(){
    var nav = this.navCtrl;
    Facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      NativeStorage.remove('user');
      nav.push(LoginPage);
    }, function(error){
      console.log(error);
    });
  }
}
