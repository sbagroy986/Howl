import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../activity/activity'

/*
  Generated class for the Notifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  public notifications= [];
  public user= {name: 'Sam Cone',picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM', mutual_friends:40};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.getNotifications();
  }

  getNotifications() {
  //add call to server to fetch notifications(user);
  	this.notifications=[{type: 'request', activity: {name: 'Activity1', description: 'Misc',id: 1,creator: {id: 22}}, users: [{name: 'Babu', picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {name: 'Ballu'}]},{type: 'accept', activity: {creator: {id: 22},name: 'Activity2', description: 'Misc',id: 2}, users: [{name: 'Chalu', picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}]}];
  }

  openActivity(activity){
    this.navCtrl.push(ActivityPage, {
      activity: activity
    });
  }

}
