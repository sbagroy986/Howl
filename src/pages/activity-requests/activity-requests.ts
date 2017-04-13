import { Http,Headers,RequestOptions} from '@angular/http';
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

  

  back(){
  	this.navCtrl.pop();
  }


}
