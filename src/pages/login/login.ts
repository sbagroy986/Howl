import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { TabsPage } from '../tabs/tabs';
import { MiddlePage } from '../middle/middle';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public posts=[];

  FB_APP_ID: number = 306887826380765;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    Facebook.browserInit(this.FB_APP_ID, "v2.8");
    // this.findUser();
  }

  doFbLogin(){
    let permissions = new Array();
    let nav = this.navCtrl;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    Facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array();
        

      //Getting name and gender properties
      Facebook.api("/me?fields=name,gender", params)
      .then(function(user) {

        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture,
          user_id: userId
        }).then(function(){
          nav.setRoot(MiddlePage);
        });
      })  
   });
 }

}
