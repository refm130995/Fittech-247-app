import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   Bienvenido:any
    
  constructor(public usuarioservicio:UsuarioService   ,public apiService:ApiFitechService,private ruta:NavController) {
   
   }


 ngOnInit() {

  }


  Fuerza(){
    this.ruta.navigateForward('test-fuerza-info')
  }

  Resistencia(){
    this.ruta.navigateForward('test-resistencia')
  }
  
  rutinas(){
    this.ruta.navigateForward('entrenamientos')
  }

}
