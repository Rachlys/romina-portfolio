import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logos-pop',
  templateUrl: './main-logos-pop.component.html',
  styleUrls: ['./main-logos-pop.component.scss']
})
export class MainLogosPopComponent implements OnInit {

  @Input() info : any
  position_form : number = 5
  number_random : number = 0


  constructor() { }

  ngOnInit(): void {
  }

  changePositionForm( nuevoValor : number){
    this.position_form = nuevoValor
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

}
