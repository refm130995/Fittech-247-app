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

  @Output() cambiarPantalla = new EventEmitter();

  datoEnfermedades = {
    patologiaCardiaca:0,
    enfermedadPulmonar:0,

    hipertensionPulmonar:0,
    pulmonarcronica:0,
    taquicardia:0,
    asma:0,
    bronquiti:0,
    aritmias:0,
    hipertension:0,
    hipotension:0,
    desvanecimiento:0,
    diabete:0,
    infartos:0,
    soplo:0,
    influenza:0,
    dolorPecho:0,
    fatiga:0,
    insuficiencia:0,
    noEnfermedad: false
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

    if(this.datoEnfermedades.asma){
      this.datoEnfermedades.asma = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.enfermedadPulmonar = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.asma = 0
    }

    if(this.datoEnfermedades.bronquiti){
      this.datoEnfermedades.bronquiti = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.enfermedadPulmonar = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.bronquiti = 0
    }

    if(this.datoEnfermedades.aritmias){
      this.datoEnfermedades.aritmias = 1
      this.datoEnfermedades.noEnfermedad = false

      this.datoEnfermedades.patologiaCardiaca = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.aritmias = 0
    }

    if(this.datoEnfermedades.soplo){
      this.datoEnfermedades.soplo = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.patologiaCardiaca = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.soplo = 0
    }

    if(this.datoEnfermedades.influenza){
      this.datoEnfermedades.influenza = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.enfermedadPulmonar = 1
        //habilitar boton
        this.habilitar = false
    }else{
      this.datoEnfermedades.influenza = 0
    }

    if(this.datoEnfermedades.infartos){
      this.datoEnfermedades.infartos = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.patologiaCardiaca = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.infartos = 0
    }

    if(this.datoEnfermedades.insuficiencia){
      this.datoEnfermedades.insuficiencia = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.patologiaCardiaca = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.insuficiencia = 0
    }

    if(this.datoEnfermedades.taquicardia){
      this.datoEnfermedades.taquicardia = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.patologiaCardiaca = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.taquicardia = 0
    }

    if(this.datoEnfermedades.pulmonarcronica){
      this.datoEnfermedades.pulmonarcronica = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.enfermedadPulmonar = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.pulmonarcronica = 0
    }

    if(this.datoEnfermedades.hipertensionPulmonar){
      this.datoEnfermedades.hipertensionPulmonar = 1
      this.datoEnfermedades.noEnfermedad = false
      this.datoEnfermedades.enfermedadPulmonar = 1
        //habilitar boton
        this.habilitar = false

    }else{
      this.datoEnfermedades.hipertensionPulmonar = 0
    }

}

   
  constructor(public modalController: ModalController , private ruta: NavController,private usuarioservicio:UsuarioService) {

  }

  ngOnInit() {

  }

  

 

  avanzar(){

    console.log(this.datoEnfermedades)

    this.usuarioservicio.enfermedades(this.datoEnfermedades)
    this.ruta.navigateRoot(['/registrar-info'])
  }

  atras(){
    this.cambiarPantalla.emit(1)
  }





}
