import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, PopoverController } from '@ionic/angular';
import { PopmensajeComponent } from 'src/app/components/popmensaje/popmensaje.component';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  constructor(private usuarioservicio:UsuarioService,private ruta:NavController,
              private popoverController: PopoverController) { }

  ngOnInit() {
  }

  nivel(valor){
    this.usuarioservicio.nivel(valor)
    this.ruta.navigateRoot(['/pasoinicial'])
  }


  atras(){
    this.ruta.navigateRoot(['/lugar-ejercicios'])
  }

  async mostrarPop(evento: any , dato:any) {
    const popover = await this.popoverController.create({
      component: PopmensajeComponent,
      event: evento,
      mode:'ios',
      showBackdrop:false,
      componentProps: { value: dato},
      cssClass: 'myPopoverStyle'
    });
    console.log(dato)
    return await popover.present();
  }


}
