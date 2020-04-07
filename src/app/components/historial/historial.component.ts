import { Component, OnInit, Output,EventEmitter, HostListener, ViewChild, ElementRef} from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { ModalInfoPage } from 'src/app/modal-info/modal-info.page';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {

  habilitar = true
  numbers = []

  @Output() cambiarPantalla = new EventEmitter();


  datoEnfermedades = {
    patologiaCardiaca:null,
    enfermedadPulmonar:null,
    hipertension:0,
    hipotension:0,
    desvanecimiento:0,
    diabete:0,
    dolorPecho:0,
    fatiga:0,
    noEnfermedad:false
  }

   
  constructor(public modalController: ModalController , private ruta: NavController,private usuarioservicio:UsuarioService) {
    for(let i=0; i<200 ; i++){
      this.numbers.push(i)
    }
  }

  ngOnInit() {

  }

  
  historialmedico(datos){
  
    if(datos == 'enfermedad'){
      if(this.datoEnfermedades.noEnfermedad){
        this.datoEnfermedades.patologiaCardiaca = null
        this.datoEnfermedades.enfermedadPulmonar = null
        this.datoEnfermedades.hipertension = 0
        this.datoEnfermedades.hipotension = 0
        this.datoEnfermedades.desvanecimiento = 0
        this.datoEnfermedades.diabete = 0
        this.datoEnfermedades.dolorPecho = 0
        this.datoEnfermedades.fatiga = 0
        //habilitar boton
        this.habilitar = false
      }
      
    }


    if(this.datoEnfermedades.patologiaCardiaca !=null){
      this.datoEnfermedades.noEnfermedad = false
      this.habilitar = false
    }

    if(this.datoEnfermedades.enfermedadPulmonar !=null){
      this.datoEnfermedades.noEnfermedad = false
              //habilitar boton
              this.habilitar = false
    }

    if(this.datoEnfermedades.hipertension){
      this.datoEnfermedades.hipertension = 1
      this.datoEnfermedades.noEnfermedad = false
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.hipertension = 0
    }

    if(this.datoEnfermedades.hipotension){
      this.datoEnfermedades.hipotension = 1
      this.datoEnfermedades.noEnfermedad = false
              //habilitar boton
              this.habilitar = false

    }else{
      this.datoEnfermedades.hipotension = 0
    }

    if(this.datoEnfermedades.desvanecimiento){
      this.datoEnfermedades.desvanecimiento = 1
      this.datoEnfermedades.noEnfermedad = false
              //habilitar boton
              this.habilitar = false

    }else{
      this.datoEnfermedades.desvanecimiento = 0
    }

    if(this.datoEnfermedades.diabete){
      this.datoEnfermedades.diabete = 1
      this.datoEnfermedades.noEnfermedad = false
              //habilitar boton
              this.habilitar = false

    }else{
      this.datoEnfermedades.diabete = 0
    }

    if(this.datoEnfermedades.dolorPecho){
      this.datoEnfermedades.dolorPecho = 1
      this.datoEnfermedades.noEnfermedad = false
              //habilitar boton
              this.habilitar = false

    }else{
      this.datoEnfermedades.dolorPecho = 0
    }

    if(this.datoEnfermedades.fatiga){
      this.datoEnfermedades.fatiga = 1
      this.datoEnfermedades.noEnfermedad = false
              //habilitar boton
              this.habilitar = false

    }else{
      this.datoEnfermedades.fatiga = 0
    }

}
 

  avanzar(){

    if(this.datoEnfermedades.patologiaCardiaca !=null){
      this.datoEnfermedades.patologiaCardiaca = 1
    }else{
      this.datoEnfermedades.patologiaCardiaca = 0
    }
    
    if(this.datoEnfermedades.enfermedadPulmonar !=null){
      this.datoEnfermedades.enfermedadPulmonar = 1
    }else{
      this.datoEnfermedades.patologiaCardiaca = 0
    }

    this.usuarioservicio.enfermedades(this.datoEnfermedades)
    //  console.log(this.datoEnfermedades)
    this.ruta.navigateRoot(['/registrar-info'])
  }

  atras(){
    this.cambiarPantalla.emit(1)
  }





}
