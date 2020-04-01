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
  timeLeft: number;
  contador
  ejercipro
  descanso
  tiemposegundo
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {

    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.contador = parseInt(this.dataRecibida) + 1
    this.ejercipro =  this.ApiService.rutina[this.contador]
    this.timeLeft = this.ApiService.rest

      this.startTimer()

      
        console.log("guardando energia - redirigir")
  }



  startTimer() {

    this.tiemposegundo = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.redirigir()
      }
    },1000)

  }

  redirigir(){
    clearInterval(this.tiemposegundo)
    this.ruta.navigateByUrl(`bateriarutinahome/${this.contador}`)
  }


}
