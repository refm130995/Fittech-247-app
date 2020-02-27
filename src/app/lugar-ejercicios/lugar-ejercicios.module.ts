import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarEjerciciosPageRoutingModule } from './lugar-ejercicios-routing.module';

import { LugarEjerciciosPage } from './lugar-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarEjerciciosPageRoutingModule
  ],
  declarations: [LugarEjerciciosPage]
})
export class LugarEjerciciosPageModule {}
