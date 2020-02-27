import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from 'src/app/modal-info/modal-info.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {
  habilitar = true
  constructor(public modalController: ModalController , private ruta: NavController) { }

  ngOnInit() {}

  async abrirmodal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
    })
     await modal.present();
     const {data} = await modal.onDidDismiss()
       if(data){
         this.habilitar = false
       }
  }

  navegar(){
    this.ruta.navigateRoot(['/registrar-info'])
  }


}
