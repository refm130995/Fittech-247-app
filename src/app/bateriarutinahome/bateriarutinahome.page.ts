import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiFitechService } from '../services/api-fitech.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

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
  sonido = "../../../assets/sonido/reloj.mp3"
  sonido2 = "../../../assets/sonido/final.mp3"
  audio:any
  zero:any
  recuperarRutina:any
  pausarApp:any
  ReanudarAPP:any
  restar:any
  secuencia:number
  serie:any
  sumatorio:any

  constructor(private capturar:ActivatedRoute, private ApiService:ApiFitechService,
              private ruta:NavController, public platform: Platform,
              public alertController: AlertController) {

      // SE SUBCRIBE CUANDO LA RUTINA ES PAUSADA
    this.pausarApp =  this.platform.pause.subscribe(async () => {
         this.pauseTimer()
      });
      // SE SUBCRIBE CUANDO LA RUTINA SE REANUDA
     this.ReanudarAPP =  this.platform.resume.subscribe(async () => {
         this.alerta()
      });
                
  }


  async ngOnInit() {  

    //  aca vas hacer la logica para que no se pierda la referencia de los datos
    console.log(this.ApiService.rutina)
    
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    console.log("valor recibido del parametro", this.dataRecibida)

    //cantidad de ejericio faltante
    this.numero = parseInt(this.dataRecibida) + 1

    // restara
    this.restar = parseInt(this.dataRecibida) - 1


    //comprobar longitud de la serie de ejercicio
    this.final = this.ApiService.rutina
    this.final = this.final.length
   
    //pasar a mostrar los datos
    this.nombre =  this.ApiService.rutina[this.dataRecibida]
    console.log(this.nombre)

    // secuencia del ejercicio
    this.secuencia = this.nombre.stage

    //logica para encontrar la cantidad de ejercicio que pertenecen a dicha secuencia
    this.serie = this.ApiService.rutina
    this.serie = this.serie.filter( value =>  value.stage ===  this.secuencia)
    this.serie = this.serie.length

  

    // los videos
    this.video = `http://fittech247.com/fittech/videos/${this.nombre.cod}/${this.nombre.url}`
    console.log(this.video)

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
    // this.timeLeft =  this.recuperarRutina['ratio_r']
    this.timeLeft = this.ApiService.ratio
  }

  // SE LANZA ALA PANTALLA CORRESPONDIENTE 
  redirigir(){

    if(this.numero >= this.final){
      this.tiempo = setTimeout(()=>{
        clearInterval(this.tiemposegundo)
        this.pauseSonido()
        this.ruta.navigateRoot("percepcionentrenamiento")
      },1000)

    }else{
      clearInterval(this.tiemposegundo) 
      this.pauseSonido()
      this.ruta.navigateRoot([`/bateriarutinaesperahome/${this.dataRecibida}`])
      
    }

  }
  
  //CONOMETRO
  startTimer() {
    this.tiemposegundo = setInterval(() => {

      if(this.timeLeft <= 10){
        console.log("activate")
        this.zero = 0
      } 

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

  // mensaje de reanudar
  async alerta() {
    const alert = await this.alertController.create({
      header: '¿Deseas reanudar el video?',
      message: 'el video comenzara desde cero de nuevo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('no hacer nada, el usuario le dara en play al video');
          }
        }, {
          text: 'Ok',
          handler: () => {
            // reset al contador / matas el contador anterior / llamas uno nuevo
            this.timeLeft = this.ApiService.ratio
            clearInterval(this.tiemposegundo) 
            this.zero = null
            this.playTimer()
          }
        }
      ]
    });

    await alert.present();
  }

  // cierra la subcripcion
  ionViewWillLeave(){
    console.log("cerrar la supcripcion")
    this.ReanudarAPP.unsubscribe();
    this.pausarApp.unsubscribe();
  }
  
  atras(){
    clearInterval(this.tiemposegundo) 
    this.ruta.navigateRoot([`/bateriarutinahome/${this.restar}`])
  }

  siguiente(){
    clearInterval(this.tiemposegundo) 
   this.ruta.navigateRoot([`/bateriarutinahome/${this.numero}`])
  }


}
