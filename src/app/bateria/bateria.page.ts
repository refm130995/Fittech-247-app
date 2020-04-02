import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.page.html',
  styleUrls: ['./bateria.page.scss'],
})
export class BateriaPage implements OnInit {
  @ViewChild('myVideo',{static:false}) txtVideo:ElementRef
  mostrar:boolean = true

  constructor(private capturar:ActivatedRoute,private ruta:Router , private ApiService:ApiFitechService) { }
   dataRecibida:any
   nombre
   repeticion
   timeLeft: number;
   tiemposegundo
   buscador:any
   encontrar:any
   video:any
   
  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
      
    //Carga el nombre del ejercicio 
    this.nombre = this.ApiService.demostracionEjercicio.nombre
    //carga la serie de ejericios
    this.buscador = this.ApiService.rutina
    //haya el ejercicio
   this.encontrar = this.buscador.find( value =>{
      return value.name == this.nombre
    })

    // los videos
    this.video = `http://fittech247.com/fittech/videos/${this.encontrar.cod}/${this.encontrar.url}`
    
    //tiempo del ejericio
    this.timeLeft = this.ApiService.ratio

  }

  atras(){
    this.ruta.navigateByUrl("entrenamientos")
  }

  pauseVideo(){
    this.mostrar = true
    this.txtVideo.nativeElement.pause()
    clearInterval(this.tiemposegundo) 

  }
  playVideo(){
    this.mostrar = false
    this.txtVideo.nativeElement.play()
    this.startTimer()
  }

  fullscreen(){
    if (this.txtVideo.nativeElement.requestFullscreen) {
      this.txtVideo.nativeElement.requestFullscreen();
    } else if (this.txtVideo.nativeElement.mozRequestFullScreen) { /* Firefox */
      this.txtVideo.nativeElement.mozRequestFullScreen();
    } else if (this.txtVideo.nativeElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      this.txtVideo.nativeElement.webkitRequestFullscreen();
    } else if (this.txtVideo.nativeElement.msRequestFullscreen) { /* IE/Edge */
      this.txtVideo.nativeElement.txtVideo.nativeElementm.msRequestFullscreen();
    }
  }

  videoEnd(){
    this.mostrar = true
    // this.txtVideo.nativeElement.currentTime = 1;
    clearInterval(this.tiemposegundo) 
    this.timeLeft = this.repeticion
  }

    //CONOMETRO
  startTimer() {
    this.tiemposegundo =  setInterval(() => {
         if(this.timeLeft > 0) {
           this.timeLeft--;
         } else {
           this.timeLeft = 0;

         }
       },1000)
     }


  //SE OBTIENE LA DURACION DEL VIDEO
  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('cargado: ', e.target.readyState);
    this.repeticion = parseInt(e.target.duration)
    this.timeLeft = parseInt(e.target.duration)
  }


}
