import {Http,Headers,RequestOptions} from '@angular/http';
import { Facebook, NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChooseInterestPage } from '../choose-interest/choose-interest';

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
  public user:any;
  public auth_user:any;
  // public auth_user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', age:24,mutual_friends:40, followers:68, following:195 , interests: 'Food, Sports..', occupation: 'Analyst at..' , activity_count:42, about: 'Foodie and Movie Buff. I love playing soccer and tennis. Netflix and chill?', activities: [{name: 'Activity1', description: 'Misc',id: 1, creator: {id: 22}},{name: 'Activity2', description: 'Misc',id: 2,creator: {id: 23}}]}
  public interests=[]
  public my_profile=false;
  public loaded=false;
  public not_my_profile=true;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.fixUser(this.navParams);
  }


  fixUser(params) {
    if(!params.get('auth_user')){
      this.user=this.auth_user;
      this.my_profile=true;
      this.not_my_profile=false;
    }
    else{
      this.auth_user=params.get('auth_user');
    }
  }

  ionViewDidLoad() {
    NativeStorage.getItem('auth_user').then(data=>{
      this.auth_user=data;
      for (let interest in this.auth_user.interests){
        // console.log(this.user.interests[interest]['userInterested']);
        if(this.auth_user.interests[interest]['userInterest']){
           this.interests.push(this.auth_user.interests[interest]['name']);
        }
      }      
      this.loaded=true;
      console.log("here");
    });
  }

  back(){
    this.navCtrl.pop();
  }

  interestPage(){
    this.navCtrl.push(ChooseInterestPage,{
      auth_user: this.auth_user
    });
  }

doFbLogout(){
    let nav = this.navCtrl;
    Facebook.logout()
    .then(function(response) {
        console.log("logged out v1");
      //user logged out so we will remove him from the NativeStorage
      NativeStorage.remove('auth_user').then(()=>{
        console.log("logged out");
        window.location.reload();
      });
      // nav.setRoot(LoginPage);
    }, function(error){
      console.log(error);
    });
  }

deleteAccount(){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify(this.auth_user);

    this.http.post('http://192.168.58.47:5000/delete_account',params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        this.doFbLogout();
      });         
  }  
}