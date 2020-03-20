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

  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')

    console.log(this.dataRecibida)

    this.Hombre()

    if(this.dataRecibida == '15'){
      return
    }

    setTimeout(()=>{
      this.ruta.navigateByUrl(`bateriaesperahome/${this.dataRecibida}`)
    },2000)
    
  }


  Hombre(){
    this.nombre = this.ApiService.rutinaTestCasaHombre[this.dataRecibida]['name']
  }


  finalizar(){
    this.ruta.navigateByUrl("tabs")
  }


}
