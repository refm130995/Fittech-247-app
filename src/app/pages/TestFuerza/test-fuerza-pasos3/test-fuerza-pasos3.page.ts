import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-fuerza-pasos3',
  templateUrl: './test-fuerza-pasos3.page.html',
  styleUrls: ['./test-fuerza-pasos3.page.scss'],
})
export class TestFuerzaPasos3Page implements OnInit {

  constructor(private ruta:NavController) { }

  ngOnInit() {
  }

  siguiente(){
    this.ruta.navigateForward('test-fuerza-menu')
  }

}
