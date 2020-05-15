import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidasPageRoutingModule } from './medidas-routing.module';

import { MedidasPage } from './medidas.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedidasPage]
})
export class MedidasPageModule {}
