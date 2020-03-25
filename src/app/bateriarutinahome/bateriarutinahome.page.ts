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
  timeLeft: number = 10;
  mostrar:boolean = true
  numero:any
  final:any

  constructor(private capturar:ActivatedRoute, private ApiService:ApiFitechService, private ruta:Router) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.numero = parseInt(this.dataRecibida) + 1
    this.final =  this.ApiService.rutina
    this.final = this.final.length

    this.nombre =  this.ApiService.rutina[this.dataRecibida]

      this.startTimer()

      this.redirigir()


  }




  redirigir(){

    if(this.numero >= this.final){
      this.tiempo = setTimeout(()=>{
        this.ruta.navigateByUrl("percepcionentrenamiento")
      },50000)

    }else{
      this.tiempo = setTimeout(()=>{
        this.ruta.navigateByUrl(`bateriarutinaesperahome/${this.dataRecibida}`)
      },10000)
    }

  }

  startTimer() {
    this.tiemposegundo = setInterval(() => {
       if(this.timeLeft > 0) {
         this.timeLeft--;
       } else {
         this.timeLeft = 0;
       }
     },1000)
   }
 
   pauseTimer() {
     clearInterval(this.tiempo)  ;
     clearInterval(this.tiemposegundo)  ;
     this.mostrar = false
     this.txtVideo.nativeElement.pause()
   }

  playTimer(){
    this.startTimer()
    this.redirigir()
    this.mostrar = true
    this.txtVideo.nativeElement.play()
  }

}
