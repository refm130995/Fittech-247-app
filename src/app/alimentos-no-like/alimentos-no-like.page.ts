import { Component, OnInit } from '@angular/core';
import { NutricionService } from '../services/nutricion.service';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-alimentos-no-like',
  templateUrl: './alimentos-no-like.page.html',
  styleUrls: ['./alimentos-no-like.page.scss'],
})
export class AlimentosNoLikePage implements OnInit {
  alimentos: unknown;

  constructor(private service: NutricionService,
              private utilities: MensajesService) { }

  ngOnInit() {
    this.getFoods();
  }

    async getFoods(){
       const valor = await this.service.getFoods()
         console.log(valor)
      // await this.service.getFoods().then((res)=>{
      //   this.alimentos = res;
      // },
      // (err)=>{
      //   this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      // })
    }

}
