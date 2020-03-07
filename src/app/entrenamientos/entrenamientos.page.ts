import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  comenzar(){
    return
  }

  bateria(){
    this.ruta.navigateByUrl("bateria/1")
  }

}
