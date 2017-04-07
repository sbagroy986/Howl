import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityWhatPage } from '../activity-what/activity-what';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  next(){
  	this.navCtrl.push(ActivityWhatPage,{
  		what:this.what
  	});
  }
}
