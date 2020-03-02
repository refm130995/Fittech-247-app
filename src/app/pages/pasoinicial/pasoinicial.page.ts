import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-pasoinicial',
  templateUrl: './pasoinicial.page.html',
  styleUrls: ['./pasoinicial.page.scss'],
})
export class PasoinicialPage implements OnInit {
  @ViewChild('slide' , {static: true} ) slides: IonSlides;
  contador:number = 1
  progreso:number = 1
  progresoReversa:number
  contadordos:number
  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true)
  }

  cambiar(valor){
      
      if(valor==0){
        this.slides.lockSwipes(false)
        this.slides.slideTo(0)
        this.contador = 1
        if(valor < 2){
          this.restarprogreso(3)
        }else{
          this.progresar(3)
          this.progresoReversa = this.contador
        }
      }
      if(valor==1){
        document.getElementById("slide2").classList.add('animacion','fadeInRight')
        this.slides.lockSwipes(false)
        this.slides.slideTo(1)
        this.contador = 2
        if(this.progresoReversa >= 3){
          this.restarprogreso(3)
        }else{
          this.progresar(3)
        }
        this.progresoReversa = this.contador
      }
      if(valor==2){
        document.getElementById("slide3").classList.add('animacion','fadeInRight')
        this.slides.lockSwipes(false)
        this.slides.slideTo(2)
        this.contador = 3
        this.progresoReversa = this.contador
        if(this.progresoReversa == 4){
          this.restarprogreso(3)
        }else{
          this.progresar(3)
        }
        
      }
      if(valor==3){
        document.getElementById("slide4").classList.add('animacion','fadeInRight')
        this.slides.lockSwipes(false)
        this.slides.slideTo(3)
        this.contador = 4
        this.progresoReversa = this.contador
        this.progresar(2)
        this.contadordos = 5
      }
      if(valor==4){
        this.slides.lockSwipes(false)
        this.slides.slideTo(2)
        this.contador = 3
        this.progresoReversa = this.contador
        this.restarprogreso(2)
      }
        
  }

  progresar(valor){
    this.progreso +=valor
  }

  restarprogreso(valor){
    this.progreso -=valor
  }
 
}
