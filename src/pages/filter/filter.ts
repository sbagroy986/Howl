import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Filter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  public gender={checked:false};
  public interests={checked:false};
  public following={checked:false};
  
  setFilters(filters){
  	if (filters.gender==true){
  		this.gender.checked=true;
  	}
  	else{
  		this.gender.checked=false;
  	}

  	if (filters.interests==true){
  		this.interests.checked=true;
  	}
  	else{
  		this.interests.checked=false;
  	}

  	if (filters.following==true){
  		this.following.checked=true;
  	}
  	else{
  		this.following.checked=false;
  	}
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  	let filters=this.navParams.get('filters');
  	this.setFilters(filters);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  close(){
  	this.view.dismiss();
  }

  apply(){
    let return_filters={gender: this.gender.checked, interests: this.interests.checked, following: this.following.checked};
    this.view.dismiss(return_filters);
  }
}
