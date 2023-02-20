import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logos-grandes',
  templateUrl: './main-logos-grandes.component.html',
  styleUrls: ['./main-logos-grandes.component.scss']
})
export class MainLogosGrandesComponent implements OnInit {

  @Input() info : any 
  constructor() { }

  ngOnInit(): void {
  }

}
