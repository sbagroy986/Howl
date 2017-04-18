import {Http,Headers,RequestOptions} from '@angular/http';
import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the ActivityDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html'
})
export class ActivityDetailsPage {
  public description:any;
  public interest:any;
  public date:any;
  public time:any;
  public loc:any;
  public title:any;
  public details:any;
  public activity={};
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
  	this.loc=this.navParams.get('loc');
	  this.title=this.navParams.get('title');

    this.activity['interest']=this.interest;
    this.activity['date']=this.date;
    this.activity['time']=this.time;
    this.activity['loc']=this.loc;  
    this.activity['title']=this.title;    
  }

  ionViewDidLoad(){
	let n=(<HTMLInputElement>document.getElementById("finish_button"));
	n.style.display="none";	
	document.getElementById("desc_input").addEventListener("keyup", function() {
		let button=(<HTMLInputElement>document.getElementById("desc_input"));
		if (button.value.length == 0){
			let next=(<HTMLInputElement>document.getElementById("finish_button"));
			next.style.display="none";
		}
		else{
			let next=(<HTMLInputElement>document.getElementById("finish_button"));
			next.style.display="inline";			
		}
       }, false);

  }
  close(){
  	this.navCtrl.pop();
  }

  finish(){
    NativeStorage.getItem('auth_user').then(data=>{
      this.activity['details']=this.details;
      console.log(this.activity);
      this.createActivity(data,this.activity);
    });
  }

  createActivity(user,activity){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({user: user, activity: activity} );

    this.http.post('http://192.168.1.6:5000/create_activity',params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        NativeStorage.setItem('auth_user',data).then(d=>{
          this.navCtrl.setRoot(TabsPage);
        });
      });         
  }  
}
