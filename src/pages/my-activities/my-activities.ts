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
  public my_activities=[];
  public auth_user:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fetchMyActivities(this.auth_user);
  }

  fetchMyActivities(user){
  	//query server/DB to get active activities(user);
  	this.my_activities=[{name: "Filler title 1", picture: "https://health.gov/images/pag_07.jpg", creator: {name: "Chandu", id: 1}, going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}];

    this.auth_user={id: 1};
  }

  openActivity(activity){
  	this.navCtrl.push(ActivityPage, {
  		activity: activity
  	});
  }

}
