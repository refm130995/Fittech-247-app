import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCorazonInfoPage } from '../modal-corazon-info/modal-corazon-info.page';
import { NavController } from '@ionic/angular';
//servicios
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import {  UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-corazon',
  templateUrl: './corazon.page.html',
  styleUrls: ['./corazon.page.scss'],
})
export class CorazonPage implements OnInit {

  constructor(public modalController: ModalController,private ruta:NavController,
    private ApiService:ApiFitechService,private UsuarioService:UsuarioService) { }
    habilitar = true

  ngOnInit() {
  }

  async abrirmodal(valor){
    if(valor == 0) {
      const modal = await this.modalController.create({
        component: ModalCorazonInfoPage,
        componentProps:{
          dato:'cuello'
        }
      });
       await modal.present();
      const {data} = await modal.onDidDismiss()

      if(data.salir){
        const valido = await this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos)
        if(valido){
          this.ruta.navigateRoot(['/mensajecorazon'])
        }
      }else{
        return
      }
    }

    if(valor == 1) {
      const modal = await this.modalController.create({
        component: ModalCorazonInfoPage,
        componentProps:{
          dato:'pulso'
        }
      });
       await modal.present();
      const {data} = await modal.onDidDismiss()
      if(data.salir){
        const valido = await this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos)
        if(valido){
          this.ruta.navigateRoot(['/mensajecorazon'])
        }
      }else{
        return
      }
    }

  }

  async avanzar(){
    // this.ruta.navigateRoot(['/antecedentefamiliar'])

    /* 
    const valido = await this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos)
    if(valido){
     this.ruta.navigateRoot(['/antecedentefamiliar'])
    }else{
      return
    }*/

  }

}
