import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineanutricionalPageRoutingModule } from './lineanutricional-routing.module';

import { LineanutricionalPage } from './lineanutricional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineanutricionalPageRoutingModule
  ],
  declarations: [LineanutricionalPage]
})
export class LineanutricionalPageModule {}
