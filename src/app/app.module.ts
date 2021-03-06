import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocationListPage } from '../pages/location-list/location-list';
import { Locations } from '../mocks/providers/locations';
import { Contacts } from '../mocks/providers/contacts';
import { Api } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Locations,
    Contacts,
    Api
  ]
})
export class AppModule {}
