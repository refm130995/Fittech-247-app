import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-resistencia',
  templateUrl: './test-resistencia.page.html',
  styleUrls: ['./test-resistencia.page.scss'],
})
export class TestResistenciaPage implements OnInit {
    atleta = {
      correr:null
    }

  constructor(private route:Router) { }

  ngOnInit() {
  }


  test(){
    console.log(this.atleta.correr)
    if(this.atleta.correr == null || this.atleta.correr < 0){
     return
    }else{
      this.route.navigateByUrl('/tabs')
    }

  }



}
