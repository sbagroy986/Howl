import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  public messages=[]
  public activity:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.activity=this.navParams.get('activity');
  	this.fetchMessages(this.activity);
  }

  close(){
  	this.navCtrl.pop();
  }

  fetchMessages(activity){
  	//fetch messages from DB
  	this.messages=[{user: {name: "User1", id: 5, picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, text: "Hello world"},{user: {name: "User2", id: 6, picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, text: "Chup reh"}]
  }
}
