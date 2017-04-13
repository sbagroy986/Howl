import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityTitlePage } from '../activity-title/activity-title';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
/*
  Generated class for the ActivityWhere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-where',
  templateUrl: 'activity-where.html'
})
export class ActivityWherePage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;  
  
  public interest:any;
  public date:any;
  public time:any;
  public where:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  	this.interest=this.navParams.get('interest');
  	this.date=this.navParams.get('date');
  	this.time=this.navParams.get('time');
    // this.displayGoogleMap();
  }

  close(){
  	this.navCtrl.pop();
  }

  ionViewDidLoad(){
  let n=(<HTMLInputElement>document.getElementById("next_button"));
  n.style.display="none";  
  document.getElementById("where_input").addEventListener("keyup", function() {
    let button=(<HTMLInputElement>document.getElementById("where_input"));
    if (button.value.length == 0){
      let next=(<HTMLInputElement>document.getElementById("next_button"));
      next.style.display="none";
    }
    else{
      let next=(<HTMLInputElement>document.getElementById("next_button"));
      next.style.display="inline";      
    }
       }, false);
  }


  displayGoogleMap() {
    let latLng = new google.maps.LatLng(57.8127004, 14.2106225);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  next(){
    let n=(<HTMLInputElement>document.getElementById("where_input"));
    this.where=n.value;
    console.log(this.where);
    this.navCtrl.push(ActivityTitlePage,{
      interest:this.interest,
      date:this.date,
      time:this.time,
      loc:this.where
    })
  }
}
