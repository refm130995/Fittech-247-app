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
  // este tipo de Datos no permite valores duplicado / es un array de tipo set
  grupoAlimentos = new Set()
  //array comun
  foods:any = []
  constructor(private service: NutricionService,
              private utilities: MensajesService) { }

   ngOnInit() {
    this.getFoods()
  }

  async getFoods(){
    const valor = await this.service.getFoods()
      if(valor == false ){
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
        this.alimentos = valor
        console.log("valor",valor)
      }
  }

  agrupar(status:boolean,id:any){
    // logica
     this.grupoAlimentos.add(id)
  }
  
  finalizar(){
    // destructuracion del array de set a un array normal
    this.foods = [...this.grupoAlimentos]
    console.log("array normal",this.foods)
    this.service.foodNoDeseados(this.foods)
  }

}
