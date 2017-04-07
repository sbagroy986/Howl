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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
  	this.loc=this.navParams.get('loc');
	this.title=this.navParams.get('title');
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
  	//Call to API to createActivity(this.interest,this.date,this.time,this.loc,this.title);
  	this.navCtrl.setRoot(TabsPage);
  }
}
