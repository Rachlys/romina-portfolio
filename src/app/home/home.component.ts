import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numTranslate : number = 0
  defaultTouch = { x: 0, y: 0, time: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("wheel" , ["$event"])
  public onScroll( event: WheelEvent){
    console.log(event)

    if( event.deltaY === 100){
      this.numTranslate += -10
      
    }else{
      this.numTranslate += 10

    }
  }

  @HostListener('touchstart', ['$event'])
  @HostListener("touchend" , ["$event"])
  public handleTouch(event : TouchEvent){
    
    event.preventDefault();

    let touch = event.touches[0] || event.changedTouches[0];

    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    }else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      if (deltaTime < 500) {
          if (Math.abs(deltaX) > 60) {

            if (deltaX > 0) {
                  this.doSwipeRight(event);
              } else {
                  this.doSwipeLeft(event);
              }
          }

      }
  }


  }

  doSwipeLeft(event : TouchEvent) {
    this.numTranslate += -100
  }

  doSwipeRight(event : TouchEvent) {
    this.numTranslate += 100
  }


  translate() : string{
    return `translate(${this.numTranslate}vw)`
  }


}
