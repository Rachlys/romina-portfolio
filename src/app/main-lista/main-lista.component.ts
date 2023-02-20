import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lista',
  templateUrl: './main-lista.component.html',
  styleUrls: ['./main-lista.component.scss']
})
export class MainListaComponent implements OnInit {

  @Input() info : any


  constructor() { }

  ngOnInit(): void {
  }

}
