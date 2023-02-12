import { Component, HostListener, OnInit } from '@angular/core';
import { BbddService } from '../services/bbdd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info_sobre_mi : Array<any> = []
  info_proyectos : Array<any> = []
  

  numTranslate : number = 0
  defaultTouch = { x: 0, y: 0, time: 0 };
  mouseX : number = 0
  mouseY : number = 0

  

  constructor(
    private bbddService : BbddService
  ) { 
    this.info_sobre_mi = bbddService.sobre_mi
    this.info_proyectos = bbddService.proyectos

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

    if( event.deltaY === 100){
      this.numTranslate += -10
      
    }else{
      this.numTranslate += 10

    }
  }

  // @HostListener('touchstart', ['$event'])
  
  // @HostListener("touchend" , ["$event"])
  // public handleTouch(event : TouchEvent){
    
  //   event.preventDefault();

  //   let touch = event.touches[0] || event.changedTouches[0];

  //   if (event.type === 'touchstart') {
  //     this.defaultTouch.x = touch.pageX;
  //     this.defaultTouch.y = touch.pageY;
  //     this.defaultTouch.time = event.timeStamp;
  //   }else if (event.type === 'touchend') {
  //     let deltaX = touch.pageX - this.defaultTouch.x;
  //     let deltaTime = event.timeStamp - this.defaultTouch.time;

  //     if (deltaTime < 500) {
  //         if (Math.abs(deltaX) > 60) {

  //           if (deltaX > 0) {
  //                 this.doSwipeRight(event);
  //             } else {
  //                 this.doSwipeLeft(event);
  //             }
  //         }

  //     }
  // }


  // }


  // doSwipeLeft(event : TouchEvent) {
  //   this.numTranslate += -100
  // }

  // doSwipeRight(event : TouchEvent) {
  //   this.numTranslate += 100
  // }




  translate() : string{
    return `translate(${this.numTranslate}vw)`
  }

}
