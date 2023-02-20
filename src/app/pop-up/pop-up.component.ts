import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() titulo : any
  @Input() descripcion : any
  @Input() tipo : any

  show : boolean = true
  number_random : number = 0

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

  button_close() : void{
    this.show = false
  }
  
  close() : string{
    if(!this.show){
      return 'none'
    }else{
      return 'flex'
    }
  }

}
