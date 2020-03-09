import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {
    serie = {}
  constructor(private ruta:Router,private ApiService:ApiFitechService) { }

  ngOnInit() {
      this.serie =  this.ApiService.rutina
      console.log(this.serie)
  }

  comenzar(){
    console.log("hola mundo")
  }

  bateria(){
    this.ruta.navigateByUrl("bateria/1")
  }

}
