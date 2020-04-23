import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalentamientoInfoPageRoutingModule } from './calentamiento-info-routing.module';

import { CalentamientoInfoPage } from './calentamiento-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalentamientoInfoPageRoutingModule
  ],
  declarations: [CalentamientoInfoPage]
})
export class CalentamientoInfoPageModule {}
