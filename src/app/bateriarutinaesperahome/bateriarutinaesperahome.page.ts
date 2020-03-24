import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-bateriarutinaesperahome',
  templateUrl: './bateriarutinaesperahome.page.html',
  styleUrls: ['./bateriarutinaesperahome.page.scss'],
})
export class BateriarutinaesperahomePage implements OnInit {
  dataRecibida:any
  tiempo:any
  timeLeft: number = 5;
  contador
  ejercipro

  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {

    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.contador = parseInt(this.dataRecibida) + 1
    this.ejercipro =  this.ApiService.rutina[this.contador]


      this.startTimer()

      this.tiempo = setTimeout(()=>{
        console.log("guardando energia - redirigir")
        this.ruta.navigateByUrl(`bateriarutinahome/${this.contador}`)
      },5000)

  }



  startTimer() {

    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)

  }


}
