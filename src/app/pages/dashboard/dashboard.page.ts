import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, AlertController } from '@ionic/angular';
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
     private notificacion:MensajesService,
     public alertController: AlertController) {
   }


   async ionViewDidEnter(){
    /* Este paso sere restructurado mas adelante */
    const token = await this.apiService.cargarToken()
    this.apiService.asignarToken(token)
   /* Este paso sere restructurado mas adelante */


    this.week = await this.apiService.obtenerUsuario()

   }
   async ngOnInit() {
 
    const valor = await this.apiService.cargarNombreUsuario()
      console.log("corazon ", valor.heart_rate)

    // SACAR DE LA APP NO ES VALIDO
    if(valor.heart_rate === 1){
      this.apiService.desconectarUsuario()
      this.presentAlert()
      this.ruta.navigateRoot(['/'])
    }

    if(valor.heart_rate === 0){
      this.apiService.desconectarUsuario()
      this.presentAlert()
      this.ruta.navigateRoot(['/'])
    }





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



      // mensaje del corazon

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Fittech',
        subHeader: 'Usted no está apto para realizar actividades',
        message: 'le hemos enviado una guia a su correo.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    

}
