import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   Bienvenido:any

  constructor(public usuarioservicio:UsuarioService,
     private apiService:ApiFitechService,
     private ruta:NavController,
     private notificacion:MensajesService) {
   
   }

  ionViewWillEnter(){
    this.apiService.obtenerUsuario()
    
  }

 ngOnInit() {
    console.log(this.apiService.usuario)
  }


  Fuerza(){
    this.ruta.navigateForward('test-fuerza-info')
  }

  Resistencia(){
    this.ruta.navigateForward('test-resistencia')
  }
  
  async rutinas(){
    this.ruta.navigateForward('entrenamientos')

    /*
    const validar = await this.apiService.obtenerRutina() 
    if(validar){
      this.ruta.navigateForward('entrenamientos')
    }else{
      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
    }

    */
  }

}
