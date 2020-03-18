import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.page.html',
  styleUrls: ['./bateria.page.scss'],
})
export class BateriaPage implements OnInit {

  constructor(private capturar:ActivatedRoute,private ruta:Router , private ApiService:ApiFitechService) { }
   dataRecibida:any
   nombre
   repeticion
   
  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    console.log(this.dataRecibida)
      
    this.nombre = this.ApiService.demostracionEjercicio.nombre
    this.repeticion   = this.ApiService.demostracionEjercicio.repeticion

  }

  atras(){
    this.ruta.navigateByUrl("entrenamientos")
  }

}
