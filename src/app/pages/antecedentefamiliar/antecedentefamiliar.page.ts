import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-antecedentefamiliar',
  templateUrl: './antecedentefamiliar.page.html',
  styleUrls: ['./antecedentefamiliar.page.scss'],
})
export class AntecedentefamiliarPage implements OnInit {
  condicionPersona = {
    arritmia_corazon:false,
    ataque_corazon:false,
    operacion_corazon:false,
    enfermedad_corazon:false,
    presion_corazon:false,
    diabete_corazon:false,
    muerte_prematura:false,
    ninguna:false
  }
  habilitar:boolean=true


  constructor(private ruta: NavController,private cdRef:ChangeDetectorRef,private usuarioservicio:UsuarioService,
              private ApiService:ApiFitechService) { }

  ngOnInit() {
  }

  avanzar(){ 
    if(!this.condicionPersona.arritmia_corazon && !this.condicionPersona.ataque_corazon && !this.condicionPersona.diabete_corazon &&
      !this.condicionPersona.enfermedad_corazon &&!this.condicionPersona.muerte_prematura && !this.condicionPersona.ninguna &&
      !this.condicionPersona.operacion_corazon &&!this.condicionPersona.presion_corazon){
        this.habilitar = false
      }else{
        this.usuarioservicio.condicionCorazon(this.condicionPersona)
        this.evaluar()
      }
  }

 historialcorazon(datos){
    console.log(this.habilitar)

    if(datos == 'option'){
      this.condicionPersona.ninguna = false;
      this.habilitar = false
      this.cdRef.detectChanges();
    }

    if(datos == 'none'){
      this.condicionPersona.arritmia_corazon=false;
      this.condicionPersona.ataque_corazon=false;
      this.condicionPersona.operacion_corazon=false;
      this.condicionPersona.enfermedad_corazon=false;
      this.condicionPersona.presion_corazon=false;
      this.condicionPersona.diabete_corazon=false;
      this.condicionPersona.muerte_prematura=false;
        if(this.condicionPersona.ninguna){
          this.habilitar = false
        }else{
          this.habilitar = true
        }
      this.cdRef.detectChanges();
    }


 }


 async evaluar(){
  
  const valido = await this.ApiService.Antecedentefamiliar(this.usuarioservicio.condicionPersona)
  if(valido){
    this.ruta.navigateRoot(['/tabs'])
  }else{
    return
  }
  
}

}
