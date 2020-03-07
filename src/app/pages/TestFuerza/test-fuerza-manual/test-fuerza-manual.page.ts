import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-fuerza-manual',
  templateUrl: './test-fuerza-manual.page.html',
  styleUrls: ['./test-fuerza-manual.page.scss'],
})
export class TestFuerzaManualPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  empuje(){
    this.ruta.navigateByUrl("test-fuerza-manual-pasos")
  }

  atraccion(){
    this.ruta.navigateByUrl("test-fuerza-manual-pasos")
  }
  
  inferior(){
    this.ruta.navigateByUrl("test-fuerza-manual-pasos")
  }


}
