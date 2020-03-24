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

  constructor(private capturar:ActivatedRoute, private ruta:Router, private apiService:ApiFitechService, private notificacion:MensajesService) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')

    this.contador = parseInt(this.dataRecibida) + 1
      console.log(this.contador)

  }

  async finalizar(){

    const validar = await this.apiService.TestHome(this.contador)
    if(validar){
      document.getElementById("capacidad").classList.add('ocultar')
      this.ruta.navigateByUrl("tabs")
      this.notificacion.notificacionUsuario("Gracias por realizar el test","danger")
    }else{
      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
    }

  }

}
