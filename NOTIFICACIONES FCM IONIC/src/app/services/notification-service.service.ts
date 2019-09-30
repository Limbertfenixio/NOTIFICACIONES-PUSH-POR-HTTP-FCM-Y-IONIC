import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(public http:HttpClient) { }

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
}
