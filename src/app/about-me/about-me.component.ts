import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public text_show : string = ''
  public text : string = 'Me llamo Romina y soy desarrolladora web junior'
  public decoration : string = '|'
  public array_text : any = new String(this.text)
  public control_interval : any;
  public control_interval2 : any;
  public control_interval_decor : any;
  public indice : number = 0;
  public fuente : boolean = true
  public display : boolean = false
  public time_out : any;

  public mouseX : number = 0
  public mouseY : number = 0


  constructor() { }

  ngOnInit(): void {
    this.writing()
    this.animation_decor()
  }

  @HostListener("document:mousemove", ['$event'])
  mousemove(event : MouseEvent) {

    event.preventDefault();

    this.mouseX = event.clientX
    this.mouseY = event.clientY

  }


  cancel_writing() : void{
    this.fuente  = !this.fuente
  }

  writing() : void{
      this.control_interval = setInterval(() =>{
      
        this.text_show += this.array_text[this.indice]
        
        this.indice++;
  
        if(this.indice === this.array_text.length){
  
          clearInterval(this.control_interval)
          this.indice = 0
  
          this.time_out = setTimeout(() =>{ this.deswriting() }, 3000)
          
        }
  
      }, 100)
  }

  deswriting() : void {

    this.control_interval2 = setInterval(() =>{
      this.text_show = this.text_show.slice(0 , -1)
    
      if(this.text_show.length === 0){
        clearInterval(this.control_interval2)
        this.writing()
      }
    },100)
  }


  animation_decor() : void {
    this.control_interval_decor = setInterval(() =>{

      if(this.display === true){
        this.decoration = ''
        this.display = !this.display
      }else{
        this.decoration = '|'
        this.display = !this.display

      }
    }, 400)

  }

  clip() : string{
    return `circle(30px at ${this.mouseX - 55}px ${this.mouseY - 45}px)`
  }


}
