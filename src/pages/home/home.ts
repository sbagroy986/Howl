import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter'
import { ActivityPage } from '../activity/activity'
import { UserProfilesPage } from '../user-profiles/user-profiles'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public auth_user:any;
  public activities=[];
  public filters={gender: false, following: false, interests: false};
  user: any;
  activity:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams) {

  	this.initActivities(this.navParams);
  }

  viewUser(user){
    this.navCtrl.push(UserProfilesPage, {
      user: user
    });
  }

  viewActivity(activity){
    this.navCtrl.push(ActivityPage, {
      activity: activity
    });
  }

  initActivities(params){
  	if (!params.get('activities')){
  		this.fetchAllActivities();
  	}
  	else {
  		this.activities=params.get('activities');
  	}
  }

  filterData(activities,filter){
    //add code for filtering
  }

  interested(activity_id){
    //add code for send interested in activity call(activity_id,this.user);
    let button=(<HTMLInputElement>document.getElementById(activity_id));
    if (button.innerText === "Interested"){
      //add code for removing interests in call(activity_if,this.user)
      button.style.background='#b89981';
      button.innerText="Interested";
    }
    else{
      button.style.background='grey';
      button.innerText="Interested";
    }
  }

  fetchAllActivities(){
  	this.user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', age:24,mutual_friends:40, followers:68, following:195 , interests: 'Food, Sports, Photography, Books', occupation: 'Analyst at GenCorp Inc.' , activity_count:42, about: 'Foodie and Movie Buff. I love playing soccer and tennis. Netflix and chill?', activities: [{name: 'Activity1', description: 'Misc',id: 5, creator: {id: 22}},{name: 'Activity2', description: 'Misc',id: 2,creator: {id: 23}}]}
  	this.activity= {creator: {name: "Chandu", id: 1}, id: 1, name: "Looking to play Tennis!", description: "Need one amateur player to practice against on Friday evening, in the IIIT-D courts!", user: this.user, picture: "https://health.gov/images/pag_07.jpg",going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}
  	this.activities.push(this.activity);

  	this.user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', age:24,mutual_friends:40, followers:68, following:195 , interests: 'Food, Sports, Photography, Books', occupation: 'Analyst at GenCorp Inc.' , activity_count:42, about: 'Foodie and Movie Buff. I love playing soccer and tennis. Netflix and chill?', activities: [{name: 'Activity1', description: 'Misc',id: 8, creator: {id: 22}},{name: 'Activity2', description: 'Misc',id: 2,creator: {id: 23}}]}
  	this.activity= {creator: {name: "Chandu", id: 1}, id: 2, name: "Looking to play Lacrosse!", description: "Looking for 3 people to play lacrosse over the weekend!", user: this.user, picture: "https://health.gov/images/pag_07.jpg",going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}
  	this.activities.push(this.activity);
  }

  openFilter(filters){
  	let param={filters: filters}
  	let addModal = this.modalCtrl.create(FilterPage,param);
    addModal.onDidDismiss((filters_selected) => {
          if(filters_selected){
          	this.filterData(this.activities,filters_selected);
          }
    });
    addModal.present();
  }

}
