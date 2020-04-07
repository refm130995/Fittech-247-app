import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bateriahome',
  templateUrl: './bateriahome.page.html',
  styleUrls: ['./bateriahome.page.scss'],
})
export class BateriahomePage implements OnInit {
   nivel:number
   dataRecibida:any
    tiempo:any
    timeLeft: any = 60;
    minuto:number = 12;
    zero:any
  contador
  video:any
  @ViewChild('myVideo',{static:false}) txtVideo:ElementRef

  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) {

    //codigo para videos
   if(this.ApiService.genero == 1){
    this.video =  `http://fittech247.com/fittech/videos/testhome/hombre.mp4`
    }

    if(this.ApiService.genero == 0){
    this.video =  `http://fittech247.com/fittech/videos/testhome/mujer.mp4`
     }


   }

  ngOnInit() {
    
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    
  

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



  finalizar(){
    console.log("finalizar")
    this.txtVideo.nativeElement.pause()
    //Como obtener donde finalizo para poder categorizar
    console.log("Tiempo acabado",parseInt(this.txtVideo.nativeElement.currentTime))
    //categorizar
    this.categorizar(parseInt(this.txtVideo.nativeElement.currentTime))

    //lo envias
    clearTimeout(this.tiempo)
    this.ruta.navigateByUrl(`mensajecapacidad/${this.nivel}`)
  }

  
  startTimer() {

    // if(this.timeLeft = 0){
    //   this.minuto--
    //   this.timeLeft = 60
    // }

    this.tiempo = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
       

        if(this.timeLeft < 10){
          console.log("activate")
          this.zero = 0
        } 
      } 

      else{
        this.zero = null
        this.timeLeft = 0
        this.minuto--
        this.timeLeft = 60
      }
    },1000)
  
  }

  videoEnd(){
    this.ruta.navigateByUrl(`mensajecapacidad/16`)
  }

  categorizar(valor:any){


    //primer nivel
    if(valor <= 45 ){
     this.nivel = 1
    }

    //segundo nivel
    else if( valor <= 78 ){
      this.nivel = 2

    }

    //tercer nivel
    else if( valor <= 130 ){
      this.nivel = 3
    }

    //cuarto nivel
    else if(valor <= 179 ){
      this.nivel = 4
    }

    //quinto nivel
    else if( valor <= 207 ){
      this.nivel = 5
    }

    //sexto nivel
    else if( valor <= 258 ){
      this.nivel = 6
    }

    //septimo nivel
    else  if(valor <= 309 ){
      this.nivel = 7
    }

    //octavo nivel
    else if(valor <= 333 ){
      this.nivel = 8
    }

    //noveno nivel
    else if(valor <= 384 ){
      this.nivel = 9
    }

    //decimo nivel
    else if(valor <= 435 ){
      this.nivel = 10
    }

    //unceavo nivel
    else if(valor <= 492 ){
      this.nivel = 11
    }

    //doceavo nivel
    else if( valor <= 543 ){
      this.nivel = 12
    }

    //terceavo nivel
    else if(valor <= 570 ){
      this.nivel = 13
    }

    //cartoce nivel
    else if( valor <= 621 ){
      this.nivel = 14
    }

    //quince nivel
    else if(valor <= 672 ){
      this.nivel = 15
    }

    //sexto nivel
    else if(valor > 672 ){
      this.nivel = 16
    }

    
  }

  //SE OBTIENE LA DURACION DEL VIDEO
  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('cargado: ', e.target.readyState);
  }

}
