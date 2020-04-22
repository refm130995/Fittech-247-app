import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor( private apiService:ApiFitechService,private ruta:NavController) { }

  ngOnInit() {
  }

  desconectar(){
    // LLAMO ALA RUTA PARA DESCONECTAR Y LO FUERZO A REDIRECIONAR AL LOGIN
    this.apiService.desconectarUsuario()
    this.ruta.navigateRoot(["/"])
  }

}
