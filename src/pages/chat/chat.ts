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
  	this.messages=
    [
      {user:
        {
          name: "User3", id: 5,
          me: false,
          picture: "./assets/img/img (11).jpg"
        },
          text: "Hi, I was planning to go to this new place called Panda Express."
      },
      {
        user:
        {
          name: "User1", id: 6,
          me: true,
          picture: "./assets/img/img (11).png"
        },
          text: "Yeah sure! What time do you want to go?"
      },
      {
        user:
          {
            name: "User2", id: 6,
          me: false,
            picture: "./assets/img/img (11).jpg"
          },
          text: "Let's go around 2PM. We can meet at the metro station."
      }

    ]
  }
}
