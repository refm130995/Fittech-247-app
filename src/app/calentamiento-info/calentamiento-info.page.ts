import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calentamiento-info',
  templateUrl: './calentamiento-info.page.html',
  styleUrls: ['./calentamiento-info.page.scss'],
})
export class CalentamientoInfoPage implements OnInit {

  constructor( private avanzar:NavController) { }

  ngOnInit() {

  }

  continuar(){
    this.avanzar.navigateRoot(["/bateriacalentamientohome/0"])
  }

  saltarCalentamiento(){
    this.avanzar.navigateRoot(["/bateriarutinahome/0"])
  }


}
