import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-nav',
  templateUrl: './window-nav.component.html',
  styleUrls: ['./window-nav.component.scss']
})
export class WindowNavComponent implements OnInit {

  @Input() titulo : any

  color : any 
  number_random : number = 0
  red : string = '#DD6062'
  blue : string = '#357EA5'
  yellow : string = '#DDB52A'
  green : string = '#5EB092'


  constructor() { }

  ngOnInit(): void {
    this.mathRandom(3,0)
  }


  mathRandom(max : number , min : number) : void{
    let number = Math.round(Math.random() * (max - min) + min);
    this.number_random = number
  }

  getRandomColor() : string{
      if( this.number_random === 0){
        return '#DD6062'
      }else if(this.number_random === 1){
        return '#357EA5'
      }else if(this.number_random === 2 ){
        return '#DDB52A'
      }else{
        return '#5EB092'
      }
  }
}
