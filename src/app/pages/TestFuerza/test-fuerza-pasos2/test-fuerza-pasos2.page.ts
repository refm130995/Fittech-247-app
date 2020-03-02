import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-fuerza-pasos2',
  templateUrl: './test-fuerza-pasos2.page.html',
  styleUrls: ['./test-fuerza-pasos2.page.scss'],
})
export class TestFuerzaPasos2Page implements OnInit {

  constructor(private ruta:NavController) { }

  ngOnInit() {
  }

  siguiente(){
    this.ruta.navigateForward('test-fuerza-pasos3')
  }

}
