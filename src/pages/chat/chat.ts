import { Component, ViewChild, NgZone } from '@angular/core';
import * as io from 'socket.io-client';
import { NavController, Content, NavParams } from 'ionic-angular';

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
  public activity:any;
  @ViewChild(Content) content: Content;
  messages:any=[];
  socketHost: string = "http://192.168.55.22:3000";
  socket:any;
  chat:any;
  username:string;
  zone:any;
  name:any;
  public user={name: 'LolUser', id:2, picture:"http://www.studiobthebeach.com/wp-content/uploads/2011/06/joncone1.png"};  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.activity=this.navParams.get('activity');
    console.log(this.activity);
    console.log(this.activity.id);
  	this.fetchMessages(this.activity);
    this.name="User1";
    this.socket = io.connect(this.socketHost);
    this.zone = new NgZone({enableLongStackTrace: false});
    this.socket.on("chat message", (msg) =>{
      this.zone.run(() =>{
        if (msg.activity==this.activity.id){
          this.messages.push(msg);
          this.content.scrollToBottom();          
        }
      });
    });

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
          message: "Hi, I was planning to go to this new place called Panda Express.",
          activity:{
            id: 1
          }
      },
      {
        user:
        {
          name: "User1", id: 6,
          me: true,
          picture: "./assets/img/img (11).png"
        },
          message: "Yeah sure! What time do you want to go?",
          activity:{
            id: 2
          }
      },
      {
        user:
          {
            name: "User2", id: 6,
          me: false,
            picture: "./assets/img/img (11).jpg"
          },
          message: "Let's go around 2PM. We can meet at the metro station.",
          activity:{
            id: 3
          }
      }

    ]
  }

  chatSend(v){
    let data = {
      activity:this.activity.id,
      user:this.user,
      message: v.chatText
    }
    this.socket.emit('new message', data);
    this.chat = '';
  } 
}
