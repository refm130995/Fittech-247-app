import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calentamientodos',
  templateUrl: './calentamientodos.page.html',
  styleUrls: ['./calentamientodos.page.scss'],
})
export class CalentamientodosPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  atras(){
    this.ruta.navigateByUrl("calentamiento")
  }

  siguiente(){
    this.ruta.navigateByUrl("bateriarutina")
  }

}
