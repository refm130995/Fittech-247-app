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
  info: boolean;
 

  ngOnInit() {
    this.info = false;
  }

  nivel(valor){
    this.usuarioservicio.nivel(valor)
    this.ruta.navigateRoot(['/pasoinicial'])
  }

  atras(){
    this.ruta.navigateRoot(['/lugar-ejercicios'])
  }

  mostrar(valor){
      this.info = !valor;
  }
   
  


}