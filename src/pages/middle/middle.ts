import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import {Http,Headers,RequestOptions} from '@angular/http';
import { ChooseInterestPage } from '../choose-interest/choose-interest';
import { TabsPage } from '../tabs/tabs';
import 'rxjs/Rx';
import { NativeStorage } from 'ionic-native';

/*
  Generated class for the Middle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-middle',
  templateUrl: 'middle.html'
})
export class MiddlePage {
  @ViewChild(Nav) nav: Nav;

	public user:any;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    NativeStorage.getItem('user').then(data=>{
    	console.log(data);
	    this.findUser(data);
	},error=>{console.log(error);});
  }

findUser(user){
	let env=this;
	let headers: Headers = new Headers({'Content-Type': 'application/json'});
	let options = new RequestOptions({ headers: headers });
	let params= JSON.stringify(user);
	this.http.post('http://192.168.58.47:5000/user_login',
      params, {
          headers: headers
      })
	  .map(res => res.json()).subscribe(data =>{
	  	console.log(data);
	  	if (data['new_user']){
	  		this.navCtrl.setRoot(ChooseInterestPage,{auth_user: data});
	  	}
	  	else{
	  		NativeStorage.setItem('auth_user',data).then(function(){
	          env.navCtrl.setRoot(TabsPage);
	  		});
	  	}
	  });
  }
}
