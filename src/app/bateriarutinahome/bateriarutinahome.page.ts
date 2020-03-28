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

 

  constructor(private capturar:ActivatedRoute, private ApiService:ApiFitechService, private ruta:Router) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.numero = parseInt(this.dataRecibida) + 1
    this.final =  this.ApiService.rutina
    this.final = this.final.length
    this.nombre =  this.ApiService.rutina[this.dataRecibida]
    this.path = 'file:///storage/emulated/0/fittech_downloads/'+ this.nombre.name +'.mp4'
    console.log("Reproducir",this.path)
    this.video = this.win.Ionic.WebView.convertFileSrc(this.path)



    // this.URL = `http://fittech247.com/videos/home/${this.nombre.cod}/${URL}.mp4`
    
      this.startTimer()

  }


  //SE OBTIENE LA DURACION DEL VIDEO
  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('duration: ', e.target.duration);
    console.log("Valor obtenido" , parseInt(e.target.duration))
    this.timeLeft = parseInt(e.target.duration)
  }

  // SE LANZA ALA PANTALLA CORRESPONDIENTE 
  redirigir(){

    if(this.numero >= this.final){
      this.tiempo = setTimeout(()=>{
        this.ruta.navigateByUrl("percepcionentrenamiento")
      },1000)

    }else{
      this.tiempo = setTimeout(()=>{
        this.ruta.navigateByUrl(`bateriarutinaesperahome/${this.dataRecibida}`)
      },1000)
    }

  }
  
  //CONOMETRO
  startTimer() {
    this.tiemposegundo = setInterval(() => {
       if(this.timeLeft > 0) {
         this.timeLeft--;
       } else {
         this.timeLeft = 0;
       }
     },1000)
   }
   
   //SE FINALIZA EL VIDEO LLAMA A REDIRIGIR
   videoEnd(){
    this.redirigir()
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
