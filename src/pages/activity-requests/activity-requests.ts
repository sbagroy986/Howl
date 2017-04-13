import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ActivityRequests page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-requests',
  templateUrl: 'activity-requests.html'
})
export class ActivityRequestsPage {
  public activity:any;
  public going_users=[];
  public interested_users=[];
  public going_users_visible=[];
  public left_going:any;
  public more_going:any;
  public auth_user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.setActivity(this.navParams);
  }

  setActivity(params){
  	this.activity=params.get('activity');
    this.going_users=this.activity.going;
    this.more_going = false;
    if(this.going_users){
      if(this.going_users.length>3)
      {
        this.more_going = true; 
        for(var i=0;i<3;i++)
        {
          this.going_users_visible.push(this.going_users[i])
        }
        this.left_going = this.activity.going.length - 3;
      }
      else if(this.going_users)
      {
        this.going_users_visible = this.activity.going;
      }
    }
    this.auth_user={id: 1};
    this.interested_users=[
      {
        id:3,name: "Person1", picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"}, {id:4,name: "Person2", picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRvcAa7nl4uoVvuBEgV8wYEI1AIai17PXtUbZvyLU3fqAKKT6GpUeWgMM"
      }
    ];
  }
  close(){
  	this.navCtrl.pop();
  }


}
