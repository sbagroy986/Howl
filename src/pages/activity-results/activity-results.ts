import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { ActivityDetailsPage } from '../activity-details/activity-details';

/*
  Generated class for the ActivityResults page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-results',
  templateUrl: 'activity-results.html'
})
export class ActivityResultsPage {
  public activities=[]
  public interest:any;
  public date:any;
  public time:any;
  public loc:any;
  public title:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
  	this.loc=this.navParams.get('loc');
	this.title=this.navParams.get('title');
	this.findActivities();
  }

  findActivities(){
  	//API call to DB to get activities
  	this.activities=[{name: "Lunch at Epicuria", picture: "../assets/img/food.jpg", creator: {name: "Ramit Shah", id: 1}, 
    going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, 
    {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]},
    {name: "Party at HKV!", picture: "../assets/img/party.jpg", creator: {name: "Rhea Chawla", id: 2}, 
    going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, 
    {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"},
    {name: "Person3", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, 
    {name: "Person4", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}];
  }

  viewActivity(activity){
    this.navCtrl.push(ActivityPage, {
      activity: activity
    });
  }

  createActivity(){
  	 this.navCtrl.push(ActivityDetailsPage,{
      interest:this.interest,
      date:this.date,
      time:this.time,
      location: this.loc,
      title:this.title       
     })
  }  
}
