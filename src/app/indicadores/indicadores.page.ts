import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})
export class IndicadoresPage implements OnInit {
    dato:any
  constructor() { }

  ngOnInit() {
    this.dato = "254"
  }

}
