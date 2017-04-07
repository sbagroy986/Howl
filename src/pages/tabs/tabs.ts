import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';
import { MyActivitiesPage } from '../my-activities/my-activities';
import { CreateActivityPage } from '../create-activity/create-activity';
import { UserProfilesPage } from '../user-profiles/user-profiles';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MyActivitiesPage;
  tab3Root: any = CreateActivityPage;
  tab4Root: any = NotificationsPage;
  tab5Root: any = UserProfilesPage;

  constructor(public modalCtrl: ModalController) {

  }

  createActivity(){
    console.log("here");
    let addModal = this.modalCtrl.create(CreateActivityPage);
    addModal.present();    
  }
}
