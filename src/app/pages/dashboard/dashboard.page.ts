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


   async ngOnInit() {
      
    const valor = await this.apiService.cargarNombreUsuario()
    this.Bienvenido = this.apiService.usuario  
    this.Bienvenido = valor['name']

    const resistencia = await this.apiService.cargarExamenResistencia()

     if( resistencia == null || undefined){
      console.log("se ejecuta 1")
     }else{
      document.getElementById("resistencia").classList.add('ocultar')
        this.apiService.pruebaRealizada(true)
       console.log("se ejecuta 2")
     }

     const fuerza = await this.apiService.cargarExamenFuerza()

     if( fuerza == null || undefined){
      console.log("se ejecuta 1")
     }else{
      document.getElementById("fuerza").classList.add('ocultar')
      this.apiService.pruebaRealizada(true)
       console.log("se ejecuta 2")
     }
    
     if(document.getElementById("fuerza").classList.contains("ocultar") && document.getElementById("resistencia").classList.contains("ocultar")){
      document.getElementById("tablaexamen").classList.add('ocultar')
     }
    
  }


  Fuerza(){
    this.ruta.navigateForward('test-fuerza-info')
  }

  Resistencia(){
    this.ruta.navigateForward('test-resistencia')
  }
  
  async rutinas(){
    //this.ruta.navigateForward('entrenamientos')

    
    const validar = await this.apiService.obtenerRutina() 
    if(validar){
      this.ruta.navigateForward('entrenamientos')
    }else{
      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
    }
    

  }


}
