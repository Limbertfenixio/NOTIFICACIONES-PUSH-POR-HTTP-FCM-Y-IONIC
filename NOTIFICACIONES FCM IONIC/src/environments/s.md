--Instalamos el plugin de Firebase Cloud Messaging para obtener un token
cordova plugin add cordova-plugin-fcm-with-dependecy-updated
FCMPlugin.onTokenRefresh(function(token){
    alert( token );
});
FCMPlugin.getToken(function(token){
    alert(token);
});

verificar la version de ionic-core en las dependencias e instalar los plugins de cordova 
segun la version para evitar problemas de compatibilidad

npm install --save @ionic-native/firebase@5.0.0-beta.14

Despues instalarmos la libreria de angularFire2 

npm install --save angularfire2 firebase

Despues instalamos el servicio nativo de FCM
npm install @ionic-native/fcm

Registrar la app en el config.xml con el archivo google-services.json

en el archivo app.module.ts 

importamos las librerias
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';
//Importamos la libreria de FirebaseCloudMessaging
import { FCM } from '@ionic-native/fcm/ngx';
//Importamos la libreria de HttpClient
import { HttpClientModule } from '@angular/common/http';

Declaramos la api key de la app
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

en imports[HttpClientModule] declaramos la importaciones para http y firebase
en providers[FCM] declaramos el proveedor FCM


Creamos el servicio de firebaseNotifi con ionic g service services/firebaseNotifi --spec=false

//Importamos las librerias HttpClient y HttHeaders para poder hacer peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http;

/**
   * Funcion que se encarga de realizar una peticion http al servidor de FCM y enviar una notificacion al usuario
   * @param dataToSend datos a ser enviados en la peticion al servidor puede ser en formato JSON
   * @return Retorna la respuesta del servidor al cual se hizo la peticion http
   */
  saveData(dataToSend){
    //Url del servidor ha realizar la peticion http
    var url = "https://fcm.googleapis.com/fcm/send";
    //Enviamos la peticion de tipo Post por http el cual necesita los siguientes parametros
    //url: Direccion url al cual va dirigida la peticion http
    //dataToSend: Datos que seran enviados al servidor
    //Headers: Especifica de que tipo de contenido tendra la peticion y la autorizacion que necesita para realizar la peticion esto se debe obtener del proveedor de firebase que es una clave unica secreta de proyecto en la parte de Firebase Cloud Messaging 
    return this.http.post(url,dataToSend,{
      headers:new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization":"key=AAAA-ImGyhk:APA91bFo80r-1bxQcEJwHNyoIWhKfeohUeJKHmf3G5HO8tujD6za4mWr6g6ZBqMZ4Z2kA2Do3ld6MpOW_i_a4NJY5uPN3hineP8osTrX3vKSwU0ayA9adugcFHTKQozWGRtXk7MzfbCC"
      })
    });
  }

  en el archivo home.page.ts
import { FirebaseNotifiService } from './../services/firebase-notifi.service';
import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';

constructor(private fcm: FCM, public notifiService:FirebaseNotifiService) {}

  ngOnInit(){
    
    this.fcm.getToken().then(token => {
      console.log('hola mundo')
      console.log(token)
    });
  }

  send(){
    var dataToSend = {
      "notification": {
        "title" : "Notificacion ChaTION LIMBERT",
        "body" : "Nuevo Mensaje en la app ChatION",
        "sound" : "default"
      },
      "to": "sY_SUBs:APA91bGiHiWW0EOVfOJzRKf5G6KaC10Z7BcG7hCzJorLK7ucKH3qChZSr768-gQzk2urIf93SvRLRFJ8c_BoPHrkjfytdGbeHd9y6x7kFra_lsde0nau1D767UJ7YL2k4ox4OzefVh75"
    };
    this.notifiService.saveData(dataToSend).subscribe((dataReturn) => {

    })
  }