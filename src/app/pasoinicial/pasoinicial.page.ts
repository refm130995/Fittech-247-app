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

  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true)
  }

  cambiar(valor){
    this.slides.lockSwipes(false)
    this.slides.slideTo(valor)
    this.contador +=1
    this.progresar()
    this.slides.lockSwipes(true)
  }

  progresar(){
    if(this.contador ===3){
      this.progreso+=2
    }else{
      this.progreso +=3
    }
  }



}
