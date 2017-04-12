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
        {name:'Food',userInterest:false, imageUrl:"../assets/img/img (14).png"}, 
        {name:'Photography',userInterest:false, imageUrl:"../assets/img/img (10).png"},
        {name:'History',userInterest:false, imageUrl:"../assets/img/img (4).png"},
        {name:'Books',userInterest:false, imageUrl:"../assets/img/img (8).png"},
        {name:'Party',userInterest:false, imageUrl:"../assets/img/img (7).png"},
        {name:'Comics',userInterest:false, imageUrl:"../assets/img/img (12).png"}
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

    this.http.post('http://192.168.58.47:5000/save_interests',
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
