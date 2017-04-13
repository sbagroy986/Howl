import { Http,Headers,RequestOptions} from '@angular/http';
import { UserProfilesPage } from '../user-profiles/user-profiles'
import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ActivityRequests page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-requests',
  templateUrl: 'activity-requests.html'
})
export class ActivityRequestsPage {
  public activity:any;
  public going_users=[];
  public interested_users=[];
  public going_users_visible=[];
  public left_going:any;
  public more_going:any;
  public auth_user:any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.activity=this.navParams.get('activity');
    this.interested_users=this.navParams.get('interested_users');
  }

  viewUser(user){
    this.navCtrl.push(UserProfilesPage, {
      user: user
    });
  }

  back(){
  	this.navCtrl.pop();
  }

  accept(user){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({"user":user,"activity":this.activity});

    this.http.post('http://192.168.58.47:5000/accept_request',params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        this.activity=data['activity'];
        this.hideReq(user);
      });         
  }

  reject(user){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({"user":user,"activity":this.activity});

    this.http.post('http://192.168.58.47:5000/reject_request',params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        this.activity=data['activity'];
        this.hideReq(user);
      });             
  }

  hideReq(user){
    let button=(<HTMLInputElement>document.getElementById(user['user_id']));
    button.style.display='none';
  }

}
