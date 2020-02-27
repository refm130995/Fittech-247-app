import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  constructor(private usuarioservicio:UsuarioService,private ruta:NavController) { }
  comprobar:boolean;

  ngOnInit() {
  }

  nivel(valor){
    this.usuarioservicio.nivel(valor)
    this.comprobar = true
  }

  avanzar(){
    if(this.comprobar){
      this.ruta.navigateRoot(['/pasoinicial'])
    }
    return
  }

  regresar(){
    this.ruta.navigateRoot(['/lugar-ejercicios'])
  }

}
