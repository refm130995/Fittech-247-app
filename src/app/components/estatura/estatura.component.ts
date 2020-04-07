import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estatura',
  templateUrl: './estatura.component.html',
  styleUrls: ['./estatura.component.scss'],
})
export class EstaturaComponent implements OnInit {
  numero:any  
  numero2:any
  habilitar = true
  habilitar2 = true
  pasar = true
  mensaje = "Cm"
  mensaje2 = "Kg"


  constructor(private usuarioservicio:UsuarioService) { }
  @Output() cambiarPantalla = new EventEmitter();

  ngOnInit() {
    
  }
  
    valor(numero){
     if(!isNaN(numero.target.value) && numero.target.value.length > 2){
        if( numero.target.value > 250 ){
          this.habilitar = true
          this.mensaje = "El valor maximo es 250 Cm"
        }else{
          this.numero = numero.target.value
          this.habilitar = false
          this.mensaje = "Cm"
          this.habilitarboton()
        }
     }else{
       this.habilitar = true
       this.mensaje = "introduzca un valor correcto"
     }


    }

    valor2(numero){
      if(!isNaN(numero.target.value) && numero.target.value.length > 1){
        if( numero.target.value > 200 ){
          this.habilitar2 = true
          this.mensaje2 = "El valor maximo es 200 kg"
        }else {
          this.numero2 = numero.target.value
          this.mensaje2 = "Kg"
          this.habilitar2 = false    
          this.habilitarboton()
        }  
  
     }else{
       this.habilitar2 = true
       this.mensaje2 = "introduzca un valor correcto"    
     }

    }

    habilitarboton(){
      if(this.habilitar === false && this.habilitar2 === false){
        this.pasar = false  
      }
    }
 
  
  avanzar(){
    this.usuarioservicio.estatura(this.numero)
    this.usuarioservicio.peso(this.numero2)
    this.cambiarPantalla.emit(2)
  }

  atras(){
    this.cambiarPantalla.emit(0)
  }

}
