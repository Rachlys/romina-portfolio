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
  nombre_validacion : boolean = false
  email_validacion : boolean = false
  servicio_validacion : boolean = false
  proyect_validacion : boolean = false


  submit : boolean = false
  nombre : string = ''
  email : string = ''
  servicio : string = ''
  proyect : string = ''

  patron1 : any = /[\d]/
  patron2 : any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


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

  check_name() : void{
      console.log(this.nombre)
      this.nombre = this.nombre.trim()
      
      if(!this.patron1.test(this.nombre) && this.nombre.length >= 3){
          this.nombre_validacion = true
          console.log(this.nombre_validacion)
      }else{
          this.nombre_validacion = false
          console.log(this.nombre_validacion)

      }
      
    }

    check_email() : void{
      console.log(this.email)
      this.email = this.email.trim()
      
      if(!this.patron2.test(this.email) && this.email.length >= 0){
          this.email_validacion = false
          console.log(this.email_validacion)
      }else{
          this.email_validacion = true
          console.log(this.email_validacion)
      }
      
    }

    check_servicio() : void{
      console.log(this.servicio)

      if(this.servicio.length > 10){
        this.servicio_validacion = true
      }else{
        this.servicio_validacion = false
      }
    }


    check_submit() : string{
      if(this.nombre_validacion && this.email_validacion && this.servicio_validacion){
          return 'activo'
      }else{
        return ''
      }
    }




}
