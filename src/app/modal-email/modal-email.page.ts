import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalController } from '@ionic/angular';

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
  constructor(private usuarioService:UsuarioService,public modalController: ModalController) { }

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

}
