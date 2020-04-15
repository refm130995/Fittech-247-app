import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { PopoverController, NavController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {
   serie:any = {}
   stage1 = {}
   stage2 = {}
   stage3 = {}

   a :number
   b:number
   resultado:number
   minutos:number

   ocultar = false
  constructor(private ruta:NavController,private ApiService:ApiFitechService,
    public popoverController: PopoverController,private notificacion:MensajesService) { }

  ngOnInit() {

    //ratio es la duracion de cada ejercicio ratio w
     this.a = this.ApiService.rest
    //  obtener longitud de un objecto
      this.b = Object.keys(this.ApiService.rutina).length
    //  total de duracion
     this.resultado = (this.a * this.b)   
   // conversio de segundo a minutos
     this.minutos = Math.round(this.resultado/60) 




    this.ApiService.refrescarDatos.subscribe(()=>{
      this.serie =  this.ApiService.rutina

    })

    this.serie =  this.ApiService.rutina

    this.stage1 = this.serie.filter(function(value){
      return value.stage === 1
    })
    this.stage2 = this.serie.filter(function(value){
      return value.stage === 2
    })
    this.stage3 = this.serie.filter(function(value){
      return value.stage === 3
    })

    //comprobar si el stage 3 es vacia
    console.log(this.stage3)


      if(Object.keys(this.serie).length === 0){
        this.ocultar = false
      }else{
        this.ocultar = true
      }

    console.log(this.serie)
  }

  comenzar(){
    this.ruta.navigateForward("calentamiento")
  }


  async mostrarpop(evento,nombre,repeticion,id){
 
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      showBackdrop:false,
      event:evento,
    });
    
    console.log("ID VIEJO",id)
    this.ApiService.ejerciciodemostrado(nombre,repeticion,id)

    await popover.present()
  }

  customTB(index, item){
    return item.id
  }


}
