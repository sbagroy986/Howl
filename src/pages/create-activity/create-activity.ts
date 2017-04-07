import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ActivityWhenPage } from '../activity-when/activity-when';

/*
  Generated class for the CreateActivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-activity',
  templateUrl: 'create-activity.html'
})
export class CreateActivityPage {
  public what:any;
  public interests=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.setInterests();
  }

  setInterests(){
    //API call to get interests
    this.interests=[ {name: 'Food', description: 'Restaurants, Cafes, Bars etc.' },{name: 'Sports', description: 'Cricket, Football, Basketball etc.' }, {name: 'Comics', description: 'Discussion groups, Comic Con, Cosplay' } ,{name: 'Photography', description: 'Shoots, Exhibitions, Photo Walks etc.' } ]
  }

  next(interest){
  	this.navCtrl.push(ActivityWhenPage,{
  		interest:interest
  	});
  }

  close(){
    this.view.dismiss()
  }
}
