import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router, ActivatedRoute } from '@angular/router';
var lib = require('mugan86-cronometro');
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
  inittimeLeft: number = 10;
  interTime: number = 40;
  fiveSecond: number;
  second:any
  ControllerinterTime:any
  descontador = lib.Descontador;
  descontador2 = lib.Descontador;
  subsd_: any;
  subsd: any;
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) {

    //codigo para videos
   if(this.ApiService.genero == 1){
    this.video =  `http://fittech247.com/fittech/videos/testhome/hombre.mp4`
    }

    if(this.ApiService.genero == 0){
    this.video =  `http://fittech247.com/fittech/videos/testhome/mujer.mp4`
     }


   }

  async ngOnInit() {
    
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    
   this.initialization();

  setTimeout(()=>{

 
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

    },10000);
  })
  }



  finalizar(){
    this.subsd.unsubscribe();
    this.subsd_.unsubscribe();
    this.txtVideo.nativeElement.pause()
    //Como obtener donde finalizo para poder categorizar
    console.log("Tiempo acabado",parseInt(this.txtVideo.nativeElement.currentTime))
    //categorizar
    this.categorizar(parseInt(this.txtVideo.nativeElement.currentTime))

    // finaliza los 5 segundos
/*     clearTimeout(this.second)
    //finaliza el otro contador
    clearTimeout(this.ControllerinterTime)
   //finaliza el tiempo
    clearTimeout(this.tiempo) */
    //lo envias
    this.ruta.navigateByUrl(`mensajecapacidad/${this.nivel}`)

    
  }

  initialization(){
    let tiempo = setInterval(() => {
      if(this.inittimeLeft > 0) {
        this.inittimeLeft--;
        console.log(this.inittimeLeft);
        
      }
      else{
        this.zero = null
        clearInterval(tiempo)
        this.inittimeLeft = 0
      
      }
    },1000)
  }

  startTimer() {
    const d = new this.descontador(40);
 
    this.subsd = d.start().subscribe(data => {
    
     
        if (data === 'FINISH') {
          this.interTime = data;
            this.subsd.unsubscribe();
            this.contador5();
        }else{
          
          this.interTime = data.substr(data.length - 2);
          
        }
    });
    // if(this.timeLeft = 0){
    //   this.minuto--
    //   this.timeLeft = 60
    // }
   
 /*    let tiempo = setInterval(() => {
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
    
    let ControllerinterTime =  setInterval(() => {
      if(this.interTime > 0) {
        this.interTime--;
       console.log(this.interTime);
       
      } else{
        this.fiveSecond = 5;
       let second = setInterval(() => {
          if(this.fiveSecond > 0) {
            this.fiveSecond--;
        console.log( 'fiveSecond',this.fiveSecond);
          }else{
            this.interTime = 40;
          }
        },1000)
      }
    },1000) */
  
  }
  contador5(){
    const d = new this.descontador2(5);
 
   this.subsd_ = d.start().subscribe(data => {
      
        if (data === 'FINISH') {
          this.subsd_.unsubscribe();
                     this.startTimer();
        }else{
          this.fiveSecond = data.substr(data.length - 2);
        }
    });
  }

  videoEnd(){
    this.subsd.unsubscribe();
    this.subsd_.unsubscribe();
    this.ruta.navigateByUrl(`mensajecapacidad/16`)
  }

  categorizar(valor:any){


    //primer nivel Basico
    if(valor <= 240 ){
     this.nivel = 0
    }

    //segundo nivel intermedio
    else if( valor <= 480 ){
      this.nivel = 1

    }

    //tercer nivel avanzado
    else if( valor <= 720 ){
      this.nivel = 2  
    }

    //cuarto nivel pro
    else if(valor > 720 ){
      this.nivel = 3
    }
    
  }

  //SE OBTIENE LA DURACION DEL VIDEO
  onMetadata(e, video) {
    
    console.log('metadata: ', video.currentTime);
    console.log('cargado: ', e.target.readyState);
  }

}
