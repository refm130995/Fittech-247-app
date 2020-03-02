import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-fuerza-menu',
  templateUrl: './test-fuerza-menu.page.html',
  styleUrls: ['./test-fuerza-menu.page.scss'],
})
export class TestFuerzaMenuPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  pressbanca(){
    console.log("pres banca")
    this.ruta.navigateByUrl('/test-fuerza-pasos4/banca');
  }
  
  squat(){
    console.log("squat")
    this.ruta.navigateByUrl('/test-fuerza-pasos4/squat');


  }
  legcurl(){
    console.log("leg curl")
    this.ruta.navigateByUrl('/test-fuerza-pasos4/curl');

  }
  legextension(){
    console.log("leg extension")
    this.ruta.navigateByUrl('/test-fuerza-pasos4/extension');
  }

  tutorial(){
    this.ruta.navigateByUrl('/test-fuerza-pasos1');
  }

  termina(){
    this.ruta.navigateByUrl('/dashboard');
  }

}
