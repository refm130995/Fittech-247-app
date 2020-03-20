import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bateriahome',
  templateUrl: './bateriahome.page.html',
  styleUrls: ['./bateriahome.page.scss'],
})
export class BateriahomePage implements OnInit {
   nombre
   dataRecibida:any
    tiempo:any
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    

    if(this.ApiService.genero == 1){
     this.Hombre()
    }

    if(this.ApiService.genero == 0){
      this.Mujer()
     }

    if(this.dataRecibida == '15'){
      return
    }

    this.tiempo = setTimeout(()=>{
      this.ruta.navigateByUrl(`bateriaesperahome/${this.dataRecibida}`)
    },40000)
    
  }


  Hombre(){
    this.nombre = this.ApiService.rutinaTestCasaHombre[this.dataRecibida]['name']
  }

  Mujer(){
    this.nombre = this.ApiService.rutinaTestCasaMujer[this.dataRecibida]['name']
  }


  finalizar(){
    clearTimeout(this.tiempo)
    this.ruta.navigateByUrl("mensajecapacidad")
  }


}
