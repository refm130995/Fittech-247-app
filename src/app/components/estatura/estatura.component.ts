import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estatura',
  templateUrl: './estatura.component.html',
  styleUrls: ['./estatura.component.scss'],
})
export class EstaturaComponent implements OnInit {
  numero:any  
  habilitar = true
  mensaje = "Cm"

  constructor(private usuarioservicio:UsuarioService) { }
  @Output() cambiarPantalla = new EventEmitter();

  ngOnInit() {}
  
  valor(numero){
     if(!isNaN(numero.target.value) && numero.target.value.length > 2){
        this.numero = numero.target.value
        this.habilitar = false
        this.mensaje = "Cm"
     }else{
       this.habilitar = true
       this.mensaje = "introduzca un valor correcto"
     }
    }
 
  
  avanzar(){
    this.usuarioservicio.estatura(this.numero)
    this.cambiarPantalla.emit(2)
  }

  atras(){
    this.cambiarPantalla.emit(0)
  }

}
