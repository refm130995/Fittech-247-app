import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from '../services/api-fitech.service';
import { ModalController } from '@ionic/angular';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.page.html',
  styleUrls: ['./modal-email.page.scss'],
})
export class ModalEmailPage implements OnInit {
  registrar = {
    nombre:null,
    email:null,
    contra:null
  }
  constructor(private usuarioService:UsuarioService,public modalController: ModalController ,
              private apiService:ApiFitechService,  private mensajeservice:MensajesService) { }

  ngOnInit() {
  }

  acceder(){
    console.log("Entrar" + this.registrar.nombre + "  " + this.registrar.email  + this.registrar.contra)
    if(this.registrar.nombre.length > 2 &&  this.registrar.email.length > 2 &&  this.registrar.contra.length > 2){
        this.usuarioService.registrarEmail(this.registrar)
        this.modalController.dismiss({
          salir:true
        });
    }else{
      return
    }

  }

  async Email(valor:any){

    const valido = await this.apiService.validarEmail(valor.target.value)
    if(valido){
      this.mensajeservice.alertaInformatica('el correo ya existe en nuestra base de datos')
      this.registrar.email = null
    }else{
      console.log("aprobado email")
    }

  }

}
