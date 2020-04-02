import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiFitechService } from '../services/api-fitech.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bateriarutinahome',
  templateUrl: './bateriarutinahome.page.html',
  styleUrls: ['./bateriarutinahome.page.scss'],
})
export class BateriarutinahomePage implements OnInit {
  @ViewChild('myVideo',{static:false}) txtVideo:ElementRef
  nombre:any
  dataRecibida:any
  tiempo:any
  tiemposegundo:any
  timeLeft: number;
  mostrar:boolean = true
  numero:any
  final:any
  video
  private win: any = window;
  // URL:any
  path:any

 

  constructor(private capturar:ActivatedRoute, private ApiService:ApiFitechService, private ruta:Router) {
   }



  ngOnInit() {

    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    console.log("valor recibido", this.dataRecibida)

    //cantidad de ejericio faltante
    this.numero = parseInt(this.dataRecibida) + 1

    //comprobar longitud de la serie de ejercicio
    this.final =  this.ApiService.rutina
    this.final = this.final.length
    //pasar a mostrar los datos 
    this.nombre =  this.ApiService.rutina[this.dataRecibida]
    // los videos
    this.video = `http://fittech247.com/fittech/videos/${this.nombre.cod}/${this.nombre.url}`


    var b = setInterval(()=>{
          console.log(this.txtVideo.nativeElement.readyState)
      if(this.txtVideo.nativeElement.readyState === 4){
          console.log(this.txtVideo.nativeElement.readyState)
          //This block of code is triggered when the video is loaded

          //your code goes here
          this.txtVideo.nativeElement.play()
          //cronometro
          this.startTimer()
          //stop checking every half second
          clearInterval(b);

      }    

      },500);


  }




  //SE OBTIENE LA DURACION DEL VIDEO
  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('cargado: ', e.target.readyState);


    // this.timeLeft = parseInt(e.target.duration)
    //tiempo del ejercicio
    this.timeLeft = this.ApiService.ratio
  }

  // SE LANZA ALA PANTALLA CORRESPONDIENTE 
  redirigir(){

    if(this.numero >= this.final){
      this.tiempo = setTimeout(()=>{
        clearInterval(this.tiemposegundo)
        this.ruta.navigateByUrl("percepcionentrenamiento")
      },1000)

    }else{
      clearInterval(this.tiemposegundo) 
      this.ruta.navigateByUrl(`bateriarutinaesperahome/${this.dataRecibida}`)
    }

  }
  
  //CONOMETRO
  startTimer() {
    this.tiemposegundo = setInterval(() => {
       if(this.timeLeft > 0) {
         this.timeLeft--;
       } else {
         this.timeLeft = 0;
         this.redirigir()
         this.txtVideo.nativeElement.pause()
       }
     },1000)
   }
   
  pauseTimer() {
    clearInterval(this.tiemposegundo)  ;
    this.mostrar = false
    this.txtVideo.nativeElement.pause()
  }

  playTimer(){
    this.startTimer()
    this.mostrar = true
    this.txtVideo.nativeElement.play()
  }

}
