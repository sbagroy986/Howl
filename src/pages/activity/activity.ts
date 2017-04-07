import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProfilesPage } from '../user-profiles/user-profiles'
import { ChatPage } from '../chat/chat'

/*
  Generated class for the Activity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  public activity:any;
  public going_users=[];
  public interested_users=[];
  public auth_user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.setActivity(this.navParams);
  }

  setActivity(params){
  	this.activity=params.get('activity');
  	this.going_users=this.activity.going;
  	this.auth_user={id: 1};
  	this.interested_users=[{id:3,name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {id:4,name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}];
  }

  close(){
  	this.navCtrl.pop();
  }

  viewUser(user){
  	this.navCtrl.push(UserProfilesPage, {
  		user: user
  	});
  }

  hide_user(user){
  let button=(<HTMLInputElement>document.getElementById(user.id));
  button.style.visibility="hidden";
  }

  accept(user){
  	//DB request to accept(user,activity);
  	this.hide_user(user);
  }

  reject(user){
  	//DB request to reject(user,activity);
  	this.hide_user(user);  
  }

  chat(activity){
  	this.navCtrl.push(ChatPage,{
  		activity: activity
  	})
  }
}
