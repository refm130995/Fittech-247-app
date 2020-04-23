import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFitechService } from '../services/api-fitech.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bateriacalentamientoesperahome',
  templateUrl: './bateriacalentamientoesperahome.page.html',
  styleUrls: ['./bateriacalentamientoesperahome.page.scss'],
})
export class BateriacalentamientoesperahomePage implements OnInit {

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
  zero:any
  recuperarRutina:any
  imagen
  nombre
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:NavController) { }

  async ngOnInit() {

    //  aca vas hacer la logica para que no se pierda la referencia de los datos

    //  parametros del id
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    console.log("parametro recibido", this.dataRecibida)
    this.contador = parseInt(this.dataRecibida) + 1

    // 
    // this.ejercipro =  this.recuperarRutina['exercises'][this.contador]
    // this.nombre = this.ejercipro.name

    // this.imagen = `http://fittech247.com/fittech/imagenes/${this.ejercipro.cod}/${this.ejercipro.id}.jpg`
    // console.log(this.imagen)


    this.timeLeft =  5

    this.startTimer()

      

  }



  startTimer() {

    this.tiemposegundo = setInterval(() => {

      // if(this.timeLeft <= 10){
      //   console.log("activate")
      //   this.zero = 0
      // } 

      
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
    this.ruta.navigateRoot([`/bateriacalentamientohome/${this.contador}`])
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
