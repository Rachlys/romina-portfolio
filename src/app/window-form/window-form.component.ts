import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-window-form',
  templateUrl: './window-form.component.html',
  styleUrls: ['./window-form.component.scss']
})
export class WindowFormComponent implements OnInit {

  number_random : number = 0
  open_close : boolean = true
  
  constructor(
    private builder : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.mathRandom(5,0)

  }


  mathRandom(max : number , min : number) : void{
    let number = Math.round(Math.random() * (max - min) + min);
    this.number_random = number
  }

  open() : void{
    this.open_close = !this.open_close
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
