import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-capacidad-info',
  templateUrl: './test-capacidad-info.page.html',
  styleUrls: ['./test-capacidad-info.page.scss'],
})
export class TestCapacidadInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log("hola mundo")
  }

}
