import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.page.html',
  styleUrls: ['./bateria.page.scss'],
})
export class BateriaPage implements OnInit {

  constructor(private capturar:ActivatedRoute,private ruta:Router) { }
   dataRecibida:any
  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    console.log(this.dataRecibida)
  }

  atras(){
    this.ruta.navigateByUrl("entrenamientos")
  }

}
