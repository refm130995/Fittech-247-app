import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calentamiento',
  templateUrl: './calentamiento.page.html',
  styleUrls: ['./calentamiento.page.scss'],
})
export class CalentamientoPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  atras(){
    this.ruta.navigateByUrl("entrenamientos")
  }

  siguiente(){
    this.ruta.navigateByUrl("bateriarutinahome/0")
  }


}
