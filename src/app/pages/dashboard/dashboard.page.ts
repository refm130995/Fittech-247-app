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
   ExamenCliente:any
   resistencia
   fuerza
   capacidad
   puerta
   week:any = [];

  constructor(public usuarioservicio:UsuarioService,
     private apiService:ApiFitechService,
     private ruta:NavController,
     private notificacion:MensajesService) {
   }


   async ionViewDidEnter(){
    this.week = await this.apiService.obtenerUsuario()
    console.log("valor de la semana del usuario ",this.week.routine_ready_week)
   }
   async ngOnInit() {
 
    const valor = await this.apiService.cargarNombreUsuario()

    /* Este paso sere restructurado mas adelante */
    const token = await this.apiService.cargarToken()
    this.apiService.asignarToken(token)
   /* Este paso sere restructurado mas adelante */

    // ACA LLAMAS AL METODO DESPUES QUE SE CARGA EL TOKEN
    

   
    const comprobar = this.apiService.usuario 
    this.Bienvenido = comprobar ? this.apiService.usuario : valor['name']
    const comprobados = this.apiService.usuario 
    this.ExamenCliente = comprobados ? this.apiService.training : valor['training_place']
    

    this.resistencia = await this.apiService.cargarExamenResistencia()

     if( this.resistencia == null || undefined){
      console.log("resistencia")
     }else{
      document.getElementById("resistencia").classList.add('ocultar')
        this.apiService.pruebaRealizada(true)
       console.log("se ejecuta 2")
     }

     this.fuerza = await this.apiService.cargarExamenFuerza()

     if( this.fuerza == null || undefined){
      console.log("fuerza")
     }else{
      document.getElementById("fuerza").classList.add('ocultar')
      this.apiService.pruebaRealizada(true)
       console.log("se ejecuta 2")
     }

     this.capacidad = await this.apiService.cargarExamenCapacidad()

     if( this.capacidad == null || undefined){
      console.log("capacidad")
     }else{
      document.getElementById("capacidad").classList.add('ocultar')
       console.log("se ejecuta 2")
     }


     if(this.fuerza !== null && this.resistencia !== null){

      if(document.getElementById("fuerza").classList.contains("ocultar") && document.getElementById("resistencia").classList.contains("ocultar")){
        document.getElementById("tablaexamen").classList.add('ocultar')
        }

    }

    
  }


  Fuerza(){
    this.ruta.navigateForward('test-fuerza-info')
  }

  Resistencia(){
    this.ruta.navigateForward('test-resistencia')
  }

  Capacidad(){
    this.ruta.navigateForward('test-capacidad-info')
  }
  
  async rutinas(){

      const valor = await this.apiService.cargarNombreUsuario()
      const comprobados = this.apiService.usuario 
      this.ExamenCliente = comprobados ? this.apiService.training : valor['training_place']
        /*arreglar como la de home*/
        // if(this.ExamenCliente === 0){
        //   const validar = await this.apiService.obtenerRutina() 
        //   if(validar){
        //     this.apiService.verificarLugar(this.ExamenCliente)
        //     this.ruta.navigateForward('entrenamientos')
        //   }else{
        //     this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
        //   }
        // }
  
        if(this.ExamenCliente === 2){
          const validar = await this.apiService.obtenerRutinaHome()

          if(validar == true){
            this.apiService.verificarLugar(this.ExamenCliente)
            this.ruta.navigateForward('entrenamientos')
          }
          
          if(validar == false){
            this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
          }

          if(validar === "examen"){
            this.notificacion.notificacionUsuario("Debes realizar el test para poder empezar tu entrenamiento","danger")
          }

        }

    }

  nutricion(){
    this.ruta.navigateForward('actividad')
  }
    

}
