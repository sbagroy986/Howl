import { Http,Headers,RequestOptions} from '@angular/http';
import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProfilesPage } from '../user-profiles/user-profiles'
import { ChatPage } from '../chat/chat'
import { ActivityRequestsPage } from '../activity-requests/activity-requests';

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
  public my_activity=false;
  public interested_users=[];
  public going_users_visible=[];
  public left_going:any;
  public more_going:any;
  public auth_user:any;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  	this.setActivity(this.navParams);
  }

  setActivity(params){
  	this.activity=params.get('activity');
    this.going_users=this.activity['going'];
    this.more_going = false;
    if(this.going_users){
      if(this.going_users.length>3)
      {
        this.more_going = true; 
        for(var i=0;i<3;i++)
        {
          this.going_users_visible.push(this.going_users[i])
        }
        this.left_going = this.activity.going.length - 3;
      }
      else if(this.going_users)
      {
        this.going_users_visible = this.activity.going;
      }
    }
  }

  close(){
  	this.navCtrl.pop();
  }

  viewUser(user){
  	this.navCtrl.push(UserProfilesPage, {
  		user: user
  	});
  }

  ionViewWillEnter(){
    this.clearData(); 
  }

  clearData(){
    this.interested_users=[];
    this.auth_user=[];
    NativeStorage.getItem('auth_user').then(data=>{
      console.log("got auth");
      this.auth_user=data;
      this.getData();
    }); 
  }

  getData(){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({'user':this.auth_user, 'activity':this.activity});
    this.http.post('http://192.168.1.6:5000/activity_users',
        params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        console.log(data);
        this.going_users=data['going'];
        if(this.activity['user_id']==this.auth_user['user_id']){
          this.my_activity=true;
        }
        this.interested_users=data['interested'];
      });    
  }

  viewRequests(){
    this.navCtrl.push(ActivityRequestsPage,{
      activity: this.activity,
      interested_users: this.interested_users
    })    
  }
 
  chat(activity){
  	this.navCtrl.push(ChatPage,{
  		activity: activity
  	})
  }

}
