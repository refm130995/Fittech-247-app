import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-capacidad-info',
  templateUrl: './test-capacidad-info.page.html',
  styleUrls: ['./test-capacidad-info.page.scss'],
})
export class TestCapacidadInfoPage implements OnInit {

  constructor(private ruta:NavController) { }

  ngOnInit() {
  }

  test(){
    this.ruta.navigateForward('bateriahome/0')
  }

}
