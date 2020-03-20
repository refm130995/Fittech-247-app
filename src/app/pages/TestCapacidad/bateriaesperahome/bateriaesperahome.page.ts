import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bateriaesperahome',
  templateUrl: './bateriaesperahome.page.html',
  styleUrls: ['./bateriaesperahome.page.scss'],
})
export class BateriaesperahomePage implements OnInit {
  dataRecibida:any
  contador
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }
  

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
      this.contador = parseInt(this.dataRecibida) + 1
       

      console.log(this.dataRecibida)
      
    setTimeout(()=>{
      console.log("guardando energia - redirigir")
      this.ruta.navigateByUrl(`bateriahome/${this.contador}`)
    },5000)

  }

}
