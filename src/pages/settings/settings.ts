import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChooseInterestPage } from '../choose-interest/choose-interest';
import { Facebook, NativeStorage } from 'ionic-native';
import { LoginPage } from '../login/login';
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
    auth_user:any;
    userReady: boolean = false;

    public my_profile=false;
    public not_my_profile=true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    NativeStorage.getItem('auth_user').then(data => {
      this.auth_user=data;
    });

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
      user: this.auth_user
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
      window.location.reload();
      // nav.setRoot(LoginPage);
    }, function(error){
      console.log(error);
    });
  }
}