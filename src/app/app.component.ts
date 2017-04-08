import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NativeStorage } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html',
   providers: [NavController]
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(public navCtrl: NavController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let env = this;
      NativeStorage.getItem('user').then(function(data) {
        // user is previously logged and we have his data
        // we will let him access the app
        env.navCtrl.setRoot(TabsPage);
        splashScreen.hide();

      }, function (error) {
        
        //we don't have the user data so we will ask him to log in
        env.navCtrl.push(LoginPage);
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }
}
