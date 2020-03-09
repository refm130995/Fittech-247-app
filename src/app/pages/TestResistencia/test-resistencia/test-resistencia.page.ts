import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-test-resistencia',
  templateUrl: './test-resistencia.page.html',
  styleUrls: ['./test-resistencia.page.scss'],
})
export class TestResistenciaPage implements OnInit {
    atleta = {
      correr:null
    }

  constructor(private route:Router,
    private ApiService:ApiFitechService , 
    private notificacion:MensajesService,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }


  async test(){
    
    if(this.atleta.correr == null || this.atleta.correr < 0){
     return
    }else{
        this.presentLoading();

       console.log(this.atleta.correr)
       const validar = await this.ApiService.TestResistencia(this.atleta.correr)  

       this.loadingController.dismiss()
       
       if(validar){
        this.notificacion.notificacionUsuario("Gracias por realizar el test!","primary")
       }else{
       this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","danger")
       }

      //this.route.navigateByUrl('/tabs')
    }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
    });
    await loading.present();
  }

}
