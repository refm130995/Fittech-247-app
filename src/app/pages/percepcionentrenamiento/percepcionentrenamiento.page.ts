import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-percepcionentrenamiento',
  templateUrl: './percepcionentrenamiento.page.html',
  styleUrls: ['./percepcionentrenamiento.page.scss'],
})
export class PercepcionentrenamientoPage implements OnInit {
  comentario
  puntaje
  constructor( private ruta:Router , private mensajeservice:MensajesService , private apiService:ApiFitechService,
    private notificacion:MensajesService) { }

  ngOnInit() {
  }

  puntuacion(valor){
    console.log(this.comentario)
    console.log("valor de la puntuacion" , valor)
    this.puntaje = valor
  }

  async final(){
      if(this.puntaje == null){
        this.mensajeservice.alertaInformatica('Debes clasificar la rutina')
      }else{
        const validar = await this.apiService.finalizarRutinaHome(this.puntaje)
          if(validar){
            this.ruta.navigateByUrl("tabs/dashboard")
          }else{
            this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
          }
      }
  }

}
