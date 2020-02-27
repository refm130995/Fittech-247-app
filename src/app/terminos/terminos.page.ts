import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {
  datosCargados

  constructor(private usuarioService:UsuarioService , private ApiService:ApiFitechService,
    private ruta: NavController) {
    this.datosCargados = this.usuarioService.datosPersonales
   }

  ngOnInit() {
  }

  
  async registrar(){
    const valido = await this.ApiService.Registrar(this.usuarioService.datosPersonales)
    if(valido){
      this.ruta.navigateRoot(['/corazon'])
    }else{
      console.log("fail en el Registrado")
    }
  }

}
  