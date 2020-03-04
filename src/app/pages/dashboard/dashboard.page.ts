import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   Bienvenido:any
    
  constructor(private usuarioservicio:UsuarioService,private ruta:NavController) {
    this.Bienvenido = this.usuarioservicio.datosPersonales.nombre
   }

  ngOnInit() {
  }


  Fuerza(){
    this.ruta.navigateForward('test-fuerza-info')
  }

  Resistencia(){
    this.ruta.navigateForward('test-resistencia')
  }

}
