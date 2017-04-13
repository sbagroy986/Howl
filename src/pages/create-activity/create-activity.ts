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
    this.interests=[ 
    {name: 'Food', description: 'Restaurants, Cafes, Bars...' },
    {name: 'Sports', description: 'Cricket, Football, Basketball...' }, 
    {name: 'Comics', description: 'Discussions, Comic Con, Cosplay...' } ,
    {name: 'Photos', description: 'Shoots, Exhibitions, Photo Walks...' },
    {name: 'Books', description: 'Biography, Fantasy, Fiction...' } ,
    {name: 'Party', description: 'Clubs, House party...' } ,
    {name: 'Fashion', description: 'Dresses, Design, Makeup...' } ,
    {name: 'Dance', description: 'Freestyle, Traditional, Salsa...' } ,
    {name: 'Arts', description: 'Painting, Sculpting, Architecture...' } ,
    {name: 'LGBTQ', description: 'Discussions, Meetups...' } ,
    {name: 'Movies', description: 'Bollywood, Hollywood, Tollywood..' } ,
    {name: 'Career', description: 'Prospects, Counselling, Discussion.. ' } ,
    {name: 'Pets', description: 'Adopt, Care, Shows...' } ,
    {name: 'Writing', description: 'Novels, Poems, Plays...' } ,
    {name: 'Music', description: 'Singing, Instruments, Jamming..' } ,
    {name: 'Technology', description: 'Science, Inventions, Apps..' } ,
    {name: 'Adventure', description: 'Parks, Hiking, Camping..' } ,
    {name: 'Travel', description: 'Vacations, Explore...' } ,
    {name: 'Language', description: 'Learn, Discuss, Teach..' } ,
    {name: 'Health', description: 'Fitness, Exercise, Diet..' } ,
    {name: 'Theatre', description: 'Dramas, Street Plays, Mime...' } ,
    {name: 'Gaming', description: 'Console, Video games, Steam...' } 
    ]
  }

  next(interest){
  	this.navCtrl.push(ActivityWhenPage,{
  		interest:interest['name']
  	});
  }

  close(){
    this.view.dismiss()
  }
}
