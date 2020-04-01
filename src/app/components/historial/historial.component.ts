import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from 'src/app/modal-info/modal-info.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {

  mostrar = false
  @Output() cambiarPantalla = new EventEmitter();

  constructor(public modalController: ModalController , private ruta: NavController) {
    console.log("SE HA INICIADO ESTE COMPONENTEss") 
  }

  ngOnInit() {

  }

  // async abrirmodal(){
  //   const modal = await this.modalController.create({
  //     component: ModalInfoPage,
  //   })
  //    await modal.present();
  //    const {data} = await modal.onDidDismiss()
  //      if(data){
  //       this.ruta.navigateRoot(['/registrar-info'])
  //      }
  // }

  navegar(){
    this.ruta.navigateRoot(['/registrar-info'])
  }

  atras(){
    this.cambiarPantalla.emit(1)
  }





}
