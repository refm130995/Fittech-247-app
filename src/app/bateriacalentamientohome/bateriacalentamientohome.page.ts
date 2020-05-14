import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutinasService } from '../rutinas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bateriacalentamientohome',
  templateUrl: './bateriacalentamientohome.page.html',
  styleUrls: ['./bateriacalentamientohome.page.scss'],
})
export class BateriacalentamientohomePage  {
  @ViewChild('myVideo', {static: false}) txtVideo: ElementRef;
  rutinas: any = [];
  status = 'rutina';
  secuencia = 1;
  actual = 0;
  total: number;
  video: string;
  video2: string;
  btn: boolean;
  tiemposegundo: NodeJS.Timeout;
  timeLeft: number;
  zero: number;
  mostrar: boolean = true;
  audio: HTMLAudioElement;
  sonido = "../../../assets/sonido/reloj.mp3";
  imagen: string;
  data: any = [];
  final: any;
  stages: number;
  ready: boolean;
  
  constructor(private service: RutinasService, private navCtrl: NavController) {

   }

   async ngOnInit() {
    this.data = await this.service.getCalentamiento();
    this.setValues();
    this.startVideo();
  }

  setValues() {

    this.final = this.data['ejercicios Calentamiento'].length;
    this.total = this.data['ejercicios Calentamiento'].length;
  }

  async startVideo() {
    this.ready = false;
    this.setValues();
    this.video = `http://fittech247.com/fittech/videos/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].url}`
    this.mostrar = true;
    this.timeLeft = 30;
    var b = setInterval(() => {
      console.log(this.txtVideo.nativeElement.readyState)
      if (this.txtVideo.nativeElement.readyState === 4) {
        this.txtVideo.nativeElement.play();
        this.ready = true;
        //cronometro
        clearInterval(b);
        this.startTimer();
      }
    }, 500);
  }

  startTimer() {
    this.btn = true;
    this.zero = null;
    this.tiemposegundo = setInterval(() => {

      if (this.timeLeft <= 10) {
        console.log("activate")
        this.zero = 0
      }

      if (this.timeLeft >= 1 && this.timeLeft < 10) {
        // this.playSonido()
      }

      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.siguiente();
        this.txtVideo.nativeElement.pause()
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.tiemposegundo);
    this.mostrar = false
    this.txtVideo.nativeElement.pause()
  }

  playTimer() {
    this.startTimer()
    this.mostrar = true
    this.txtVideo.nativeElement.play()
  }

  playSonido() {
    this.audio = new Audio();
    this.audio.src = this.sonido;
    this.audio.load();
    this.audio.play();
  }



  siguiente() {

    if (this.actual == this.total) {
      this.actual = 0;
      this.secuencia++;
      clearInterval(this.tiemposegundo);
      this.timerDescanse();
      this.status = 'descanso';
    } else {
      this.actual++;
      console.log('Actual', this.actual);
      console.log('total', this.total);
      console.log('Rutina', this.data);
      if(this.actual == 4){
        clearInterval(this.tiemposegundo);
        this.navCtrl.navigateRoot('/bateriacalentamientofinalizar')
      }else if (this.actual == this.total) {
        this.secuencia++;
        this.actual = 0;
        this.setValues();
        clearInterval(this.tiemposegundo);
        this.timerDescanse();
        this.status = 'descanso';
      } else{
        clearInterval(this.tiemposegundo);
        this.timerDescanse();
        this.status = 'descanso';
      }
    }

  }

  atras() {
    if (this.actual < 1) {
      clearInterval(this.tiemposegundo);
      this.navCtrl.pop();
    } else {
      clearInterval(this.tiemposegundo);
      this.actual = this.actual - 1
      this.timerDescanse();
      this.status = 'descanso';
    }
  }

  async timerDescanse() {
    // this.imagen = `http://fittech247.com/fittech/imagenes/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].id}.jpg`;
    this.video2 = `http://fittech247.com/fittech/videos/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].url}`;
    this.timeLeft = 5;
    this.tiemposegundo = setInterval(() => {


      if (this.timeLeft >= 1 && this.timeLeft < 10) {
        this.playSonido()
      }
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.siguiente_();
      }
    }, 1000)
  }


  atras_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }



  siguiente_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }

  

  
}
