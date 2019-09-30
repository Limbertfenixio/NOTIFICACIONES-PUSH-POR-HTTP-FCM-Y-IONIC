import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';
//Importamos la libreria de FirebaseCloudMessaging
import { FCM } from '@ionic-native/fcm/ngx';
//Importamos la libreria de HttpClient
import { HttpClientModule } from '@angular/common/http';

var firebaseConfig = {
  apiKey: "AIzaSyA7_ZucYugaKrje0b4F94fG17z9pF-uYpI",
  authDomain: "chatfirebase1-f45a1.firebaseapp.com",
  databaseURL: "https://chatfirebase1-f45a1.firebaseio.com",
  projectId: "chatfirebase1-f45a1",
  storageBucket: "chatfirebase1-f45a1.appspot.com",
  messagingSenderId: "1067459201561",
  appId: "1:1067459201561:web:3a8bc5a17575e65d"
};

// Inicializamos Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
