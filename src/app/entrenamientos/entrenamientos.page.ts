import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {
   serie = {}
   ocultar = false
  constructor(private ruta:Router,private ApiService:ApiFitechService,
    public popoverController: PopoverController) { }

  ngOnInit() {
    
    this.ApiService.refrescarDatos.subscribe(()=>{
      this.serie =  this.ApiService.rutina
    })

    this.serie =  this.ApiService.rutina
      if(Object.keys(this.serie).length === 0){
        this.ocultar = false
      }else{
        this.ocultar = true
      }

    console.log(this.serie)
  }

  comenzar(){
    this.ruta.navigateByUrl("descargar")
  }


  async mostrarpop(evento,nombre,repeticion,id){
 
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      showBackdrop:false,
      event:evento,
    });
    
    console.log("ID VIEJO",id)
    this.ApiService.ejerciciodemostrado(nombre,repeticion,id)

    await popover.present()
  }

  customTB(index, item){
    return item.id
  }


}
