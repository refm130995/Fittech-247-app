import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';
import { ApiFitechService } from '../services/api-fitech.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-relacioncadera',
  templateUrl: './relacioncadera.page.html',
  styleUrls: ['./relacioncadera.page.scss'],
})
export class RelacioncaderaPage implements OnInit {

  medidasCorporales = {
    max_cintura:null,
    cadera:null,
  }

  elementoValidar = {
    elemenUno:false,
    elemenDos:false,
  }

  constructor(private mensajeservice:MensajesService,private ApiService:ApiFitechService,private ruta: NavController) { }

  ngOnInit() {
  }

  async finalizar(){
    if(this.elementoValidar.elemenUno && this.elementoValidar.elemenDos){
       console.log(this.elementoValidar)

      /* 
      const valido = await this.ApiService.cinturacadera(this.medidasCorporales)
      if(valido){
       this.ruta.navigateRoot(['/tabs'])
      }else{
        return
      }
      */

      }else{
        this.mensajeservice.alertaInformatica('Todo los campos deben ser obligatorio, y su valor mayor a 0 y menor a 4 digitos')
      }

  }

  validar(valor,asignacion){

    if(valor.target.value  <= 0 ||  valor.target.value.length <= 1 ||  valor.target.value.length > 4   ){
      console.log("error ")
      this.asignarValidacionErronea(asignacion)
      console.log(this.elementoValidar)
    }else{
      this.asignarValidacion(asignacion)
    }

  }

  asignarValidacion(asignacion){
    if(asignacion == 1){
      this.elementoValidar.elemenUno  = true
    }
    if(asignacion == 2){
      this.elementoValidar.elemenDos  = true
    }

  }

  asignarValidacionErronea(asignacion){
    if(asignacion == 1){
      this.elementoValidar.elemenUno  = false
    }
    if(asignacion == 2){
      this.elementoValidar.elemenDos  = false
    }

  }



}
