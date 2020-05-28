import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})
export class IndicadoresPage implements OnInit {
    dato:any
  constructor(private ruta: NavController) { }

  ngOnInit() {
    this.dato = "254"
  }

  atras(){
    this.ruta.pop();
  }

  goTo(){
    this.ruta.navigateForward(['/bateria-alimento'])
  }

}
