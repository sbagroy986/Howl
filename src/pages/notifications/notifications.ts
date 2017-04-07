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

  getNotifications() 
  {
    //add call to server to fetch notifications(user);
  	this.notifications =
    [
      {
        type: 'request', 
        read: 'false',
        activity: 
        {
          name: 'Lunch at Epicuria', description: 'Misc',id: 1,creator: 
          {
            id: 22
          }
        }, 
        users: 
        [
          {
            name: 'Babuw', 
            // picture: "../assets/icon/favicon.ico"
            picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"
          }, 
          {
            name: 'Ballu'
          }
        ]
      },
      {
        type: 'accept', 
        read: 'true',
        activity: 
        {
          creator: {id: 22},
          name: 'Play Tennis at IIITD', description: 'Misc',id: 2
        }, users: 
        [
          { 
            name: 'Ramesh Yadav', 
            picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"
            // picture: "../assets/icon/favicon.ico"
          }
        ]
      }

    ];
  }

  openActivity(activity){
    this.navCtrl.push(ActivityPage, {
      activity: activity
    });
  }

}
