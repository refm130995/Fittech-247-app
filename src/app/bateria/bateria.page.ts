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
   
  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    console.log(this.dataRecibida)
      
    this.nombre = this.ApiService.demostracionEjercicio.nombre
    this.repeticion   = this.ApiService.demostracionEjercicio.repeticion

  }

  atras(){
    this.ruta.navigateByUrl("entrenamientos")
  }

  pauseVideo(){
    this.mostrar = true
    this.txtVideo.nativeElement.pause()
    
  }
  playVideo(){
    this.mostrar = false
    this.txtVideo.nativeElement.play()
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
  }





}
