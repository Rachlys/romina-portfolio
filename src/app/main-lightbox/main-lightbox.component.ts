import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lightbox',
  templateUrl: './main-lightbox.component.html',
  styleUrls: ['./main-lightbox.component.scss']
})
export class MainLightboxComponent implements OnInit {

  @Input() info : any
  
  position_proyecto : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  changePositionProyect( nuevoValor : number){
    this.position_proyecto = nuevoValor
    console.log(this.position_proyecto)
  }


}
