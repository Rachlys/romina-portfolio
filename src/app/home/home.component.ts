import { Component, HostListener, OnInit } from '@angular/core';
import { BbddService } from '../services/bbdd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show_back : boolean = false

  numTranslate : number = 0
  defaultTouch = { x: 0, y: 0, time: 0 };
  mouseX : number = 0
  mouseY : number = 0


  constructor(
  ) { 
  }

  ngOnInit(): void {
  }


  sobremi() : void{
    this.numTranslate = -100
  }

  proyectos() : void{
    this.numTranslate = -200
  }

  contacto() : void{
    this.numTranslate = -300
  }

  inicio() : void{
    this.numTranslate = 0
    console.log('mao')
  }

  

  @HostListener("wheel" , ["$event"])
  public onScroll( event: WheelEvent){
    event.preventDefault();

    console.log(event)

    console.log(this.numTranslate)


    if( event.deltaY === 100){

      if( this.numTranslate === -300){
        this.numTranslate = -300
      }else{
        this.numTranslate += -10

      }
      
    }else{

      if(this.numTranslate === 0){
        this.numTranslate = 0
      }else{
        this.numTranslate += 10

      }

    }
  }




  translate() : string{
    return `translate(${this.numTranslate}vw)`
  }

  show_button() : string{
    if(this.numTranslate < -9){
      return '1'
    }else{
      return '0'
    }
  }
}
