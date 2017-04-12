import {Http,Headers,RequestOptions} from '@angular/http';
import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityResultsPage } from '../activity-results/activity-results';

/*
  Generated class for the ActivityTitle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-title',
  templateUrl: 'activity-title.html'
})
export class ActivityTitlePage {
  public interest:any;
  public date:any;
  public time:any;
  public loc:any;
  public title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
  	this.loc=this.navParams.get('loc');
  }

  ionViewDidLoad(){
	let n=(<HTMLInputElement>document.getElementById("next_n_button"));
	n.style.display="none";	
	document.getElementById("title_input").addEventListener("keyup", function() {
		let button=(<HTMLInputElement>document.getElementById("title_input"));
		if (button.value.length == 0){
			let next=(<HTMLInputElement>document.getElementById("next_n_button"));
			next.style.display="none";
		}
		else{
			let next=(<HTMLInputElement>document.getElementById("next_n_button"));
			next.style.display="inline";			
		}
       }, false);

  }
  close(){
  	this.navCtrl.pop();
  }

  next(){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({'interest':this.interest,'date':this.date,'time':this.time,'location': this.loc,'title':this.title,});

    this.http.post('http://192.168.58.47:5000/search_activities',params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
          this.navCtrl.push(ActivityResultsPage, {
        interest:this.interest,
        date:this.date,
        time:this.time,
        location: this.loc,
        title:this.title,
        sim_activities:data['sim_activities']
    })
      });          

  }

}
