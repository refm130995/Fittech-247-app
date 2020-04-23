import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PopoverController, NavController, NavParams } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
      evaluar

  constructor(private ruta:NavController , 
              public popoverController: PopoverController,
              private ApiService:ApiFitechService,
              public navParams: NavParams) { }

   ngOnInit() {
   this.evaluar = this.ApiService.verificarEntrenamiento
  }



  bateria(){
    this.popoverController.dismiss()
    let demostracionEjercicio = {
      name: this.navParams.get('name'),
      repeticion:this.navParams.get('repeticion'),
      id:this.navParams.get('id')
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: JSON.stringify(demostracionEjercicio)
      }
    }
    this.ruta.navigateForward("bateria/1", navigationExtras)
  }

  async remplazar(){
    this.popoverController.dismiss()
      
    if(this.ApiService.contador >= 2 ){

       const valor = await this.ApiService.listadoEjercicioRemplazar()
       if(valor){
        this.ruta.navigateForward("listaejercicioremplazar")
       }else{
         console.log("error de conexion")
       }

    }else{
     const valor = await this.ApiService.cambiarEjercicio()
       if(valor){
        this.ruta.navigateForward("cambiarejercicio")
       }else{
         console.log("error de conexion")
       }
    }

  }

}
