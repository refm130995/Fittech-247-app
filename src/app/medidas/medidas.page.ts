import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {

  constructor(private ruta: NavController) { }

  ngOnInit() {
  }

  goTo(url:string){
    this.ruta.navigateForward(url);
  }

  atras(){
    this.ruta.pop();
  }

}
