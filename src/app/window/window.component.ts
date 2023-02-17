import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() info : any

  number_random : number = 0
  position : number = 3
  position_form : number = 5
  position_proyecto : number = 0
  open_close : boolean = true

  constructor() { }

  ngOnInit(): void {
    this.mathRandom(5,0)
  }


  mathRandom(max : number , min : number) : void{
    let number = Math.round(Math.random() * (max - min) + min);
    this.number_random = number
  }

  getRandomColor() : string{
    if( this.number_random === 0){
      return '#357EA5'
    }else if(this.number_random === 1){
      return '#DD6062'
    }else if(this.number_random === 2 ){
      return '#DDB52A'
    }else if( this.number_random === 3){
      return '#5EB092'
    }else if( this.number_random === 4 ){
      return '#E484A8'
    }else{
      return '#9092B8'
    }
    
}

open() : void{
  this.open_close = !this.open_close
}


changePosition( nuevoValor : number ) {
  this.position = nuevoValor
}

changePositionForm( nuevoValor : number){
  this.position_form = nuevoValor
}


changePositionProyect( nuevoValor : number){
  this.position_proyecto = nuevoValor
  console.log(this.position_proyecto)
}

}
