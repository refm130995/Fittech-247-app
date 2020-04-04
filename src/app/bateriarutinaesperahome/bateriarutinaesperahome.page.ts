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
  //sonido
  sonido = "../../../assets/sonido/reloj.mp3"
  sonido2 = "../../../assets/sonido/final.mp3"
  audio:any
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {

    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.contador = parseInt(this.dataRecibida) + 1
    this.ejercipro =  this.ApiService.rutina[this.contador]
    this.timeLeft = this.ApiService.rest

      this.startTimer()

      

  }



  startTimer() {

    this.tiemposegundo = setInterval(() => {

      if(this.timeLeft >= 1 && this.timeLeft < 10) {
          this.playSonido()
      }

      // if(this.timeLeft === 1) {
      //     this.playSonidoFinal()
      // }


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
    this.pauseSonido()
  }


   playSonido(){
  this.audio = new Audio();
  this.audio.src = this.sonido;
  this.audio.load();
  this.audio.play();
  }

  // playSonidoFinal(){
  // this.audio = new Audio();
  // this.audio.src = this.sonido2;
  // this.audio.load();
  // this.audio.play();
  // }
  
  pauseSonido(){
   this.audio.pause()
  }


}
