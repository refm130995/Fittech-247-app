import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-fuerza-pasos1',
  templateUrl: './test-fuerza-pasos1.page.html',
  styleUrls: ['./test-fuerza-pasos1.page.scss'],
})
export class TestFuerzaPasos1Page implements OnInit {

  constructor(private ruta:NavController) { }

  ngOnInit() {
  }

  siguiente(){
    this.ruta.navigateForward('test-fuerza-pasos2')
  }

}
