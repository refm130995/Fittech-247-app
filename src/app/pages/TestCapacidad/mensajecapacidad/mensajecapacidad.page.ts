import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajecapacidad',
  templateUrl: './mensajecapacidad.page.html',
  styleUrls: ['./mensajecapacidad.page.scss'],
})
export class MensajecapacidadPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  finalizar(){
    this.ruta.navigateByUrl("tabs")
  }

}
