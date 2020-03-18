import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popremplazar',
  templateUrl: './popremplazar.component.html',
  styleUrls: ['./popremplazar.component.scss'],
})
export class PopremplazarComponent implements OnInit {

  constructor(public popoverController: PopoverController,private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {}

  async remplazar(){
    this.popoverController.dismiss()

    const valor = await this.ApiService.cambiarListadoEjercicio()
      if(valor){
        await this.ApiService.obtenerRutina() 
        this.ruta.navigateByUrl("entrenamientos")
      }else{
        console.log("error en la conexion")
      }


  }

}
