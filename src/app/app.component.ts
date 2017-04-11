import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen, NativeStorage } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      let env = this;
      NativeStorage.getItem('userzz')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        env.nav.setRoot(TabsPage);
        Splashscreen.hide();
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        env.nav.setRoot(LoginPage);
        Splashscreen.hide();
      });

      StatusBar.styleDefault();
    });
  }
}