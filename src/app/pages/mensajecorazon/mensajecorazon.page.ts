import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-mensajecorazon',
  templateUrl: './mensajecorazon.page.html',
  styleUrls: ['./mensajecorazon.page.scss'],
})
export class MensajecorazonPage implements OnInit {
    titulo:any
    mensaje:any

  constructor(private ruta:NavController,private ApiService:ApiFitechService,public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.ApiService.latidocorazon)
    
    if(this.ApiService.latidocorazon === 6){
      this.titulo = "Excelente",
      this.mensaje ="¡Felicitaciones!,tu frecuencia cardiaca está entre las mejores de acuerdo a tu edad y género."
    }

    if(this.ApiService.latidocorazon === 5){
      this.titulo = "Buena",
      this.mensaje ="¡Estupendo! tu frecuencia cardiaca está entre las buenas de acuerdo a tu edad y género."
    }

    if(this.ApiService.latidocorazon === 4){
      this.titulo = "Por encima de la media",
      this.mensaje ="¡Muy bien!, tú frecuencia cardiaca está por encima del promedio de acuerdo a tu edad y género."
    }

    if(this.ApiService.latidocorazon === 3){
      this.titulo = "Media",
      this.mensaje ="¡Muy bien!, tú frecuencia cardiaca está en promedio de acuerdo a tu edad y género."
    }

    if(this.ApiService.latidocorazon === 2){
      this.titulo = "Por de bajo de la media",
      this.mensaje ="¡No hay problema!, Vamos a mejorar! tu frecuencia cardiaca está por debajo del promedio de acuerdo a tu edad y género."
    }

    if(this.ApiService.latidocorazon === 1){
      this.titulo = "Mala",
      this.mensaje = "Con esfuerzo todo se puede, ¡A trabajar!, tu frecuencia cardiaca es malo de acuerdo a tu edad y género."
    }

    if(this.ApiService.latidocorazon === 0){
      this.titulo = "Muy mala",
      this.mensaje = "Deberías ir al médico, tu frecuencia cardiaca es muy malo de acuerdo a tu edad y género."
    }


  }

  siguiente(){
    if(this.ApiService.latidocorazon === 6){
      this.ruta.navigateRoot(['/tabs/dashboard'])
    }

    if(this.ApiService.latidocorazon === 5){
      this.ruta.navigateRoot(['/tabs/dashboard'])
    }

    if(this.ApiService.latidocorazon === 4){
      this.ruta.navigateRoot(['/tabs/dashboard'])
    }

    if(this.ApiService.latidocorazon === 3){
      this.ruta.navigateRoot(['/tabs/dashboard'])
    }

    if(this.ApiService.latidocorazon === 2){
      this.ruta.navigateRoot(['/tabs/dashboard'])
    }

    if(this.ApiService.latidocorazon === 1){
      this.ApiService.desconectarUsuario()
      this.presentAlert()
      this.ruta.navigateRoot(['/'])
    }

    if(this.ApiService.latidocorazon === 0){
      this.ApiService.desconectarUsuario()
      this.presentAlert()
      this.ruta.navigateRoot(['/'])
    }
  }


    // mensaje del corazon

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Fittech',
        subHeader: 'Usted no está apto para realizar actividades',
        message: 'le hemos enviado una guia a su correo.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

}
