import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajecapacidad',
  templateUrl: './mensajecapacidad.page.html',
  styleUrls: ['./mensajecapacidad.page.scss'],
})
export class MensajecapacidadPage implements OnInit {
  dataRecibida:any
  contador:number
  mensaje:string

  constructor(private capturar:ActivatedRoute, private ruta:Router, private apiService:ApiFitechService, private notificacion:MensajesService) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.contador = parseInt(this.dataRecibida)
    console.log("LO QUE HIZO EL USUARIO",this.contador)

    if(this.contador <= 4){
      this.mensaje ="Felicidades por empezar un nuevo estilo de vida con hábitos saludables, mucho esfuerzo para alcanzar el siguiente nivel."
    }
    else if(this.contador <= 8){
      this.mensaje ="Excelente estás a mitad de la carrera, un poco más de esfuerzo y dedicación para llegar a un nivel envidiable."
    }
    else if(this.contador <= 12){
     this.mensaje ="No estás aquí por casualidad, muchas sesiones de entreno duro has pasado, ahora enfocate en dar tu máximo, solo así llegarás al siguiente nivel."
    }
    else if(this.contador <= 16){
      this.mensaje ="Estás en una minoría privilegiada, que llevan el fitness cómo estilo de vida, admiración, aplausos y solo yendo al límite podrás alcanzar un nivel insuperable."
    }

  }

  async finalizar(){

    const validar = await this.apiService.TestHome(this.contador)
    if(validar){
      document.getElementById("capacidad").classList.add('ocultar')
      this.ruta.navigateByUrl("tabs")
      this.notificacion.notificacionUsuario("Gracias por realizar el test","danger")
    }else{
      this.notificacion.notificacionUsuarioFinalizar("Ocurrio un error, revise su conexión","primary")
    }

  }

}
