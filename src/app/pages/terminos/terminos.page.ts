import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { NavController, LoadingController } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {


  datosCargados


  constructor(private usuarioService:UsuarioService , private ApiService:ApiFitechService,
    private ruta: NavController,public loadingController: LoadingController,
    private mensajeservice:MensajesService,
    ) {
    this.datosCargados = this.usuarioService.datosPersonales
   }

  ngOnInit() {
  }

  
  async registrar(){
      this.presentLoading();
      const valido = await this.ApiService.Registrar(this.usuarioService.datosPersonales)
      if(valido){
        this.loadingController.dismiss()
        this.ruta.navigateRoot(['/corazon'])
      }else{
        console.log("fail en el Registrado")
      }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
    });
    await loading.present();
  }


}
  