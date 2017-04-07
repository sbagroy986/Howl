import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { FilterPage } from '../pages/filter/filter';

import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyActivitiesPage } from '../pages/my-activities/my-activities';
import { CreateActivityPage } from '../pages/create-activity/create-activity';
import { ActivityPage } from '../pages/activity/activity';
import { ChatPage } from '../pages/chat/chat';
import { UserProfilesPage } from '../pages/user-profiles/user-profiles';

import { ActivityTimePage } from '../pages/activity-time/activity-time';
import { ActivityTitlePage } from '../pages/activity-title/activity-title';
import { ActivityWhatPage } from '../pages/activity-what/activity-what';
import { ActivityWhenPage } from '../pages/activity-when/activity-when';
import { ActivityResultsPage } from '../pages/activity-results/activity-results';
import { ActivityWherePage } from '../pages/activity-where/activity-where';
import { ActivityDetailsPage } from '../pages/activity-details/activity-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // ContactPage,
    HomePage,
    TabsPage,
    FilterPage,
    UserProfilesPage,
    SettingsPage,
    NotificationsPage,
    MyActivitiesPage,
    CreateActivityPage,
    ActivityPage,
    ChatPage,
    ActivityTimePage,
    ActivityTitlePage,
    ActivityWhatPage,
    ActivityWhenPage,
    ActivityResultsPage,
    ActivityWherePage,
    ActivityDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // ContactPage,
    HomePage,
    TabsPage,
    FilterPage,
    UserProfilesPage,
    SettingsPage,
    NotificationsPage,
    MyActivitiesPage,
    CreateActivityPage,
    ActivityPage,
    ChatPage,
    ActivityTimePage,
    ActivityTitlePage,
    ActivityWhatPage,
    ActivityWhenPage,
    ActivityResultsPage,
    ActivityWherePage,
    ActivityDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
