import { NotificationServiceService } from './../../services/notification-service.service';
import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-notificion-envio',
  templateUrl: './notificion-envio.page.html',
  styleUrls: ['./notificion-envio.page.scss'],
})
export class NotificionEnvioPage implements OnInit {

  constructor(private fcm: FCM, public notifiService:NotificationServiceService) { }
  title: any;
  body: any;

  ngOnInit() {
    this.fcm.getToken().then(token => {
      console.log(token)
    });
  }

  send(){
    var dataToSend = {
      "notification": {
        "title" : this.title,
        "body" : this.body,
        "sound" : "default"
      },
      "to": "cNBb_IWODWM:APA91bHt4Ih90zhz-WrzbZsl6SU6xbNrguKXo9MfUWBIuBUUfJyCC5EpWpiuzdXMXzOjOmNzj4cgYsm0-MCYplZYOoXIWeECkdtxJWB0RXMnFvMigGzMPLj3Zc6tl4TIyG6G9b6q1WDn"
    };
    this.notifiService.saveData(dataToSend).subscribe((dataReturn) => {

    })
  }
  
  
}
