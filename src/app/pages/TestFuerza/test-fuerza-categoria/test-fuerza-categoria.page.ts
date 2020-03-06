import { Component, OnInit ,ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-test-fuerza-categoria',
  templateUrl: './test-fuerza-categoria.page.html',
  styleUrls: ['./test-fuerza-categoria.page.scss'],
})
export class TestFuerzaCategoriaPage implements OnInit {

  constructor( private apiservice:ApiFitechService,  private route:Router , private usuarioservicio:UsuarioService , private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.usuarioservicio.selecionTestEjercicio)

    if(this.usuarioservicio.selecionTestEjercicio.pressbanca){
      document.getElementById("banca").classList.add('realizado')
   }

   if(this.usuarioservicio.selecionTestEjercicio.legcurl){
    document.getElementById("curl").classList.add('realizado')
   }

   if(this.usuarioservicio.selecionTestEjercicio.squat || this.usuarioservicio.selecionTestEjercicio.legextension){
    this.cdr.detectChanges();
    document.getElementById("squat").classList.add('realizado')
 }

  }

  empuje(){
    this.usuarioservicio.TestSelecion(1)
    this.route.navigateByUrl('/test-fuerza-pasos1');

  }
  atraccion(){
    this.usuarioservicio.TestSelecion(3)
    this.route.navigateByUrl('/test-fuerza-pasos1');
  }
  
  inferior(){
    this.route.navigateByUrl('/test-fuerza-menu3');
  }

  termina(){

    if(this.usuarioservicio.selecionTestEjercicio.pressbanca && this.usuarioservicio.selecionTestEjercicio.legcurl || this.usuarioservicio.selecionTestEjercicio.squat || this.usuarioservicio.selecionTestEjercicio.legextension){
      //document.getElementById("Fuerza").classList.add('ocultar')
      this.route.navigateByUrl('/tabs')
   }


  }



}
