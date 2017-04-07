import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ChooseInterest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-interest',
  templateUrl: 'choose-interest.html'
})
export class ChooseInterestPage {
  public user_interests = []
  public interests = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseInterestPage');
    this.fetchInterests();
  	this.getUserInterest();
  }
  fetchInterests(){
    this.interests = 
      [
        {name:'Food',userInterest:0, imageUrl:"../assets/img/img (14).png"}, 
        {name:'Photography',userInterest:0, imageUrl:"../assets/img/img (10).png"},
        {name:'History',userInterest:0, imageUrl:"../assets/img/img (4).png"},
        {name:'Books',userInterest:0, imageUrl:"../assets/img/img (8).png"},
        {name:'Party',userInterest:0, imageUrl:"../assets/img/img (7).png"},
        {name:'Comics',userInterest:0, imageUrl:"../assets/img/img (12).png"}
      ]
  }
  getUserInterest(){
  	this.user_interests = this.navParams.get('user_interests');
    for(var i =0; i<this.interests.length; i++){
      for(var j=0; j<this.user_interests.length; j++){
        if(this.user_interests[j].toString()===this.interests[i].name.toString()){
          this.interests[i].userInterest = 1;
        }
      }
    }
  }

}
