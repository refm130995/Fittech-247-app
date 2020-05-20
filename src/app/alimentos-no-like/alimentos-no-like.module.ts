import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosNoLikePageRoutingModule } from './alimentos-no-like-routing.module';

import { AlimentosNoLikePage } from './alimentos-no-like.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosNoLikePageRoutingModule
  ],
  declarations: [AlimentosNoLikePage]
})
export class AlimentosNoLikePageModule {}
