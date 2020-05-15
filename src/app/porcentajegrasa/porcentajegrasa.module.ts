import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorcentajegrasaPageRoutingModule } from './porcentajegrasa-routing.module';

import { PorcentajegrasaPage } from './porcentajegrasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorcentajegrasaPageRoutingModule
  ],
  declarations: [PorcentajegrasaPage]
})
export class PorcentajegrasaPageModule {}
