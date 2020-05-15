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
    // this.usuarioservicio.nivel(valor)
    console.log(valor)
     this.ruta.navigateRoot(['/porcentajegrasa'])
  }

  atras(){
    this.ruta.navigateRoot(['/tabs/dashboard'])
  }

  mostrar(valor){
      this.info = !valor;
  }
   
  cerrar(){
    this.info = false;
  }


}