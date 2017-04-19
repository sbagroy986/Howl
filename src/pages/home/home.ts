import { Http,Headers,RequestOptions} from '@angular/http';
import { NativeStorage } from 'ionic-native';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter'
import { ActivityPage } from '../activity/activity'
import { UserProfilesPage } from '../user-profiles/user-profiles'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public auth_user:any;
  public activities=[];
  public filters={gender_male: false,gender_female: false,interests_only: true};
  public myDate=new Date().toISOString()
  user: any;
  activity:any;

  constructor(public http: Http,public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams) {
  }

  viewUser(user){
    this.navCtrl.push(UserProfilesPage, {
      user: user
    });
  }

  viewActivity(activity){
    this.navCtrl.push(ActivityPage, {
      activity: activity
    });
  }


  interested(activity){
    this.setInterested(activity);
  }

  change_button(activity,resp){
    let button=(<HTMLInputElement>document.getElementById(activity['activity_id']));
    if (resp["interested"])
    {
     console.log("here");
     button.style.background='green';    
   }
    else
    {
      console.log("here2");
      button.style.background='#b89981';
    }

  }

  openFilter(filters){
    let param={filters: filters}
    let addModal = this.modalCtrl.create(FilterPage,param);
    addModal.onDidDismiss((filters_selected) => {
    });
    addModal.present();
  }

  clearData(){
    this.activities=[];
    NativeStorage.getItem('auth_user').then(data=>{
      this.auth_user=data;
      this.refreshData(data);
    });    
  }

  refreshData(user){
      let headers: Headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      let params= JSON.stringify(user);
      this.http.post('http://35.154.250.88:5000/refresh_user',
          params, {
              headers: headers
          })
        .map(res => res.json()).subscribe(data =>{
            this.auth_user=data;
            NativeStorage.setItem('auth_user',data).then(data=>{
              this.getFeed(this.auth_user);
            })
        });

  }

  ionViewWillEnter(){
    this.clearData(); 
  }

  showFeed(){
    for (let i=0; i<this.activities.length;i++){
      if ((this.auth_user['user_id'] === this.activities[i]['user_id']) || (this.auth_user['user_id'] in this.activities[i]['going']))
        {
          this.activities[i]['show']=true;
        }
        else{
          this.activities[i]['show']=false;
        }

    }
  }

 getFeed(user){
  let headers: Headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers });
  let params= JSON.stringify(user);
  this.http.post('http://35.154.250.88:5000/get_feed',
      params, {
          headers: headers
      })
    .map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.activities=data['feed'];
      this.showFeed();
    });
  }

  setInterested(activity){
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(this.auth_user);
    let params= JSON.stringify({'activity':activity,'user':this.auth_user});
    this.http.post('http://35.154.250.88:5000/set_interested',
        params, {
            headers: headers
        })
      .map(res => res.json()).subscribe(data =>{
        console.log("here_ret");
        this.change_button(activity,data);
      });
  }

}
