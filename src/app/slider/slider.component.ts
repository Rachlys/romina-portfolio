import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movidoRow    : number = 0
  numElementos : number = 4

  calcularAncho() : string {
    return `${ (this.numElementos / 2) * 100 }%`
  }
  calcularTransform() : string {
    return `translateX(-${ this.movidoRow * ( 100 / (this.numElementos / 2) ) }%)`
  }
  calcularGrid() : string {
    return `repeat( ${ this.numElementos } , 1fr )`
  }
  aumentarRow() : void {
    this.movidoRow++
  }
  disminuirRow() : void {
    this.movidoRow--
  }
}
