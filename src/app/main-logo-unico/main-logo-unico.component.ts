import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logo-unico',
  templateUrl: './main-logo-unico.component.html',
  styleUrls: ['./main-logo-unico.component.scss']
})
export class MainLogoUnicoComponent implements OnInit {

  @Input() info : any
  
  constructor() { }

  ngOnInit(): void {
  }

}
