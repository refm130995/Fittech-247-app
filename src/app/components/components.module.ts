import { NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

import { CommonModule } from '@angular/common';
import {EdadComponent} from './edad/edad.component'
import {EstaturaComponent} from './estatura/estatura.component'
import {PesoComponent} from './peso/peso.component'
import {HistorialComponent} from './historial/historial.component'
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import {PopinfoComponent} from './popinfo/popinfo.component'


@NgModule({
  entryComponents:[
   ModalInfoPage
  ],
  declarations: [
    EdadComponent,
    EstaturaComponent,
    PesoComponent,
    HistorialComponent,
    PopinfoComponent
  ],
  exports:[
    EdadComponent,
    EstaturaComponent,
    PesoComponent,
    HistorialComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModalInfoPageModule
  ]
})
export class ComponentsModule { }
