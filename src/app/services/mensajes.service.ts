import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public alertController: AlertController) { }

  async alertaInformatica(message:string) {
    const alert = await this.alertController.create({
      animated:true,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }


}
