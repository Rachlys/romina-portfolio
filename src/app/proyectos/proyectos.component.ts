import { Component, OnInit } from '@angular/core';
import { BbddService } from '../services/bbdd.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  info_proyectos : Array<any> = []


  constructor(
    private bbddService : BbddService
  ) {
    this.info_proyectos = bbddService.proyectos

   }

  ngOnInit(): void {
  }

}
