import { Component, ViewChild, NgZone } from '@angular/core';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';
import { NavController, Content, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.activity=this.navParams.get('activity');
  	this.fetchMessages(this.activity);
    this.name="User1";
    this.socket = io.connect(this.socketHost);
    this.http = http;
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
    var url = 'http://192.168.54.173:8000/howl/getChat?query=&activityID=' + encodeURI(this.activity.id);
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
    // http.get("http://192.168.54.173:8000/howl/getChat")
    //     .subscribe(data => {
    //       console.log(data)
    //     }, error => {
    //         console.log(JSON.stringify(error.json()));
    //     });  
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
