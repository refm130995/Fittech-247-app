import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-fuerza-pasos4',
  templateUrl: './test-fuerza-pasos4.page.html',
  styleUrls: ['./test-fuerza-pasos4.page.scss'],
})
export class TestFuerzaPasos4Page implements OnInit {
  nombre:any
  id:any
  constructor(private ruta:ActivatedRoute , private route:Router) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id')
    if(this.id == 'banca'){
       this.nombre = 'Press banca'
    }
    if(this.id == 'squat'){
      this.nombre = 'Squat'
   }
   if(this.id == 'curl'){
    this.nombre = 'Leg curl'
   }
   if(this.id == 'extension'){
    this.nombre = 'Leg extension'
   }
  }

  siguiente(){
    this.route.navigateByUrl('/test-fuerza-menu');
  }



}
