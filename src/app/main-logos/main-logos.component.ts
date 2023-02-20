import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logos',
  templateUrl: './main-logos.component.html',
  styleUrls: ['./main-logos.component.scss']
})
export class MainLogosComponent implements OnInit {

  @Input() info : any
  
  constructor() { }

  ngOnInit(): void {
  }

}
