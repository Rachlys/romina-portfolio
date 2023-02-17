import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.scss']
})
export class HoraComponent implements OnInit {

   info_hora : any = []

  constructor(
    private http:HttpClient
  ) { 

  }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/users' ).subscribe( ( res : any )=>{
      console.log( res )
      this.info_hora = res 
    })


  }



}


