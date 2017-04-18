import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { App,NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import { TabsPage } from '../tabs/tabs';

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
  public user:any;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.user=navParams.get('auth_user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log(this.user);
    if (this.user.new_user) {
      this.initInterests();
    }
    else
    {
      this.interests=this.user.interests;
    }
  }

  initInterests(){
    this.interests = 
      [
        {name:'Food',userInterest:false}, 
        {name:'Photos',userInterest:false},
        {name:'Books',userInterest:false},
        {name:'Party',userInterest:false},
        {name:'Comics',userInterest:false},
        {name:'Sports',userInterest:false},
        {name:'Fashion',userInterest:false},
        {name:'Dance',userInterest:false},
        {name:'Arts',userInterest:false},
        {name:'LGBTQ',userInterest:false},
        {name:'Movies',userInterest:false},
        {name:'Career',userInterest:false},
        {name:'Pets',userInterest:false},
        {name:'Writing',userInterest:false},
        {name:'Music',userInterest:false},
        {name:'Technology',userInterest:false},
        {name:'Adventure',userInterest:false},
        {name:'Travel',userInterest:false},
        {name:'Language',userInterest:false},
        {name:'Health',userInterest:false},
        {name:'Theatre',userInterest:false},
        {name:'Gaming',userInterest:false},
      ]
  }

  saveInterests(){
    let env=this;
    for(let data of this.interests) {
      data.userInterest=(<HTMLInputElement>document.getElementById(data.name)).checked;
      console.log(data);
    }
    console.log(this.interests);

    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let params= JSON.stringify({user:this.user,interests:this.interests});

    this.http.post('http://192.168.1.6:5000/save_interests',
        params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        console.log(this.user);
        if (this.user.new_user){
          NativeStorage.setItem('auth_user',data).then(function(){
            env.navCtrl.setRoot(TabsPage);
        });
        }
        else {
          NativeStorage.setItem('auth_user',data).then(function(){
            console.log(data);
            env.navCtrl.pop();
        });
        }
    });    
  }
}
