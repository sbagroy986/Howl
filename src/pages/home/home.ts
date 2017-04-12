import {Http,Headers,RequestOptions} from '@angular/http';
import { NativeStorage } from 'ionic-native';
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
  public filters={gender_male: false,gender_female: false,interests_only: true};
  public myDate=new Date().toISOString()
  user: any;
  activity:any;

  constructor(public http: Http,public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams) {
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
  	this.user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', mutual_friends:10}
  	this.activity= {creator: {name: "Chandu", id: 1}, id: 1, name: "Looking to play Tennis!", description: "His palms are sweaty, knees weak, arms are heavy. There's vomit on his sweater already, mom's spaghetti", user: this.user, picture: "https://health.gov/images/pag_07.jpg",going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}
  	this.activities.push(this.activity);

  	this.user= {name: 'Ramit Shah',picture: 'https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468', mutual_friends:15}
  	this.activity= {creator: {name: "Chandu", id: 1}, id: 2, name: "Looking to play Lacrosse!", description: "Generic Eminem song lyrics here", user: this.user, picture: "https://health.gov/images/pag_07.jpg",going:[{name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}
  	this.activities.push(this.activity);
  }

  openFilter(filters){
  	let param={filters: filters}
  	let addModal = this.modalCtrl.create(FilterPage,param);
    addModal.onDidDismiss((filters_selected) => {
    });
    addModal.present();
  }

  clearData(){
    this.activities=[];
    NativeStorage.getItem('auth_user').then(data=>{
      this.getFeed(data);
    });    
  }


  ionViewWillEnter(){
    this.clearData(); 
  }

 getFeed(user){
  let headers: Headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers });
  let params= JSON.stringify(user);
  this.http.post('http://192.168.58.47:5000/get_feed',
      params, {
          headers: headers
      })
    .map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.activities=data['feed'];
    });
  }

}
