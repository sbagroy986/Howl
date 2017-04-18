import { Http,Headers,RequestOptions} from '@angular/http';
import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../activity/activity'

/*
  Generated class for the MyActivities page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-activities',
  templateUrl: 'my-activities.html'
})
export class MyActivitiesPage {
  public activities=[];
  public auth_user:any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  clearData(){
    this.activities=[];
    NativeStorage.getItem('auth_user').then(data=>{
      this.auth_user=data;
      this.getActivities(data);
    });    
  }

  ionViewWillEnter(){
    this.clearData(); 
  }

  openActivity(activity){
  	this.navCtrl.push(ActivityPage, {
  		activity: activity
  	});
  }

  getActivities(user){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({'user':user});
    this.http.post('http://192.168.1.6:5000/my_activities',
        params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        this.activities=data['activities'];
        console.log("here1");
        console.log(this.activities);
        console.log("here2");
      });
  }

}
