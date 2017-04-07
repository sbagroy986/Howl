import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityTitlePage } from '../activity-title/activity-title'
import { ActivityPage } from '../activity/activity'

/*
  Generated class for the ActivityWhat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-what',
  templateUrl: 'activity-what.html'
})
export class ActivityWhatPage {
  public what:any;
  public activities=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.what=this.navParams.get('what');
    console.log(this.what);
  	this.findActivities();
  }

  findActivities(){
  	//query db to find similar_activities(this.what);
  	let user= {name: 'Sam Cone',picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM', mutual_friends:40}
  	let activity= {creator: {name: "Chandu", id: 1}, id: 1, name: "Looking to play Tennis!", description: "His palms are sweaty, knees weak, arms are heavy. There's vomit on his sweater already, mom's spaghetti", user: user, picture: "https://health.gov/images/pag_07.jpg",going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}
  	this.activities.push(activity);  

  	user= {name: 'Joe Cone',picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM', mutual_friends:40}
  	activity= {creator: {name: "Chandu", id: 1}, id: 2, name: "Looking to play Lacrosse!", description: "Generic Eminem song lyrics here", user: user, picture: "https://health.gov/images/pag_07.jpg",going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}
  	this.activities.push(activity);  
	}

	back(){
		this.navCtrl.pop();
	}

	newActivity(){
		this.navCtrl.push(ActivityTitlePage, {
			title:this.what
		});
	}

  viewActivity(activity){
    this.navCtrl.push(ActivityPage, {
      activity: activity
    });
  }
}
