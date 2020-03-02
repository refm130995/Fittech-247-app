import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   Bienvenido:any
    
  constructor(private usuarioservicio:UsuarioService) {
    this.Bienvenido = this.usuarioservicio.datosPersonales.nombre
   }

  ngOnInit() {
  }

}
