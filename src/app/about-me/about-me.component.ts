import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public text_show : string = ''
  public text : string = 'Hola! Me llamo Romina y soy desarrolladora web junior'
  public array_text : any = new String(this.text)
  public control_interval : any;
  public control_interval2 : any;
  public indice : number = 0;
  public fuente : boolean = true
  public time_out : any;

  constructor() { }

  ngOnInit(): void {
    this.writing()
  }


  public pause() : void{
    this.fuente = !this.fuente
  }

  writing() : void{
    
    if( this.fuente){
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




}
