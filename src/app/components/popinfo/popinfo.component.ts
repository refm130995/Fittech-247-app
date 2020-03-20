import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
      evaluar

  constructor(private ruta:Router , public popoverController: PopoverController,private ApiService:ApiFitechService) { }

   ngOnInit() {
   this.evaluar = this.ApiService.verificarEntrenamiento
  }



  bateria(){
    this.popoverController.dismiss()
    this.ruta.navigateByUrl("bateria/1")
  }

  async remplazar(){
    this.popoverController.dismiss()
      
    if(this.ApiService.contador >= 2 ){

       const valor = await this.ApiService.listadoEjercicioRemplazar()
       if(valor){
        this.ruta.navigateByUrl("listaejercicioremplazar")
       }else{
         console.log("error de conexion")
       }

    }else{
     const valor = await this.ApiService.cambiarEjercicio()
       if(valor){
        this.ruta.navigateByUrl("cambiarejercicio")
       }else{
         console.log("error de conexion")
       }
    }

  }

}
