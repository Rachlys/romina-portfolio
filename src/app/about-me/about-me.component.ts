import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public text_shown : string = ''
  public text : string = 'Mi nombre es Romina y soy desarrolladora web fullstack junior'
  public decoration : string = '_'
  public array_text : any = new String(this.text)
  public indice : number = 0;
  public show_animate_text : boolean = true

  public interval_write : any;
  public interval_deswrite : any;

  public show_decoration : boolean = false
  public interval_decor : any;
  public time_out : any;

  // public mouseX : number = 0
  // public mouseY : number = 0
  
  constructor() { }

  ngOnInit(): void {
    this.writing()
    this.animation_decor()
  }

  // @HostListener("document:mousemove", ['$event'])
  // mousemove(event : MouseEvent) {

  //   event.preventDefault();

  //   this.mouseX = event.offsetX
  //   this.mouseY = event.offsetY

  // }


  cancel_writing() : void{
    this.show_animate_text  = !this.show_animate_text
  }

  writing() : void{
      this.interval_write = setInterval(() =>{
      
        this.text_shown += this.array_text[this.indice]
        
        this.indice++;
  
        if(this.indice === this.array_text.length){
  
          clearInterval(this.interval_write)
          this.indice = 0
  
          this.time_out = setTimeout(() =>{ this.unwriting() }, 3000)
          
        }
  
      }, 100)
  }

  unwriting() : void {

    this.interval_deswrite = setInterval(() =>{
      this.text_shown = this.text_shown.slice(0 , -1)
    
      if(this.text_shown.length === 0){
        clearInterval(this.interval_deswrite)
        this.writing()
      }
    },100)
  }


  animation_decor() : void {
    this.interval_decor = setInterval(() =>{

      if(this.show_decoration === true){
        this.decoration = ''
        this.show_decoration = !this.show_decoration
      }else{
        this.decoration = '_'
        this.show_decoration = !this.show_decoration

      }
    }, 400)

  }

  // clip() : string{
  //   return `circle(30px at ${this.mouseX }px ${this.mouseY}px)`

  // }



}
