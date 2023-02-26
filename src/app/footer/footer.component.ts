import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  show_thank : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  show() : void{
    this.show_thank = !this.show_thank
    console.log(this.show_thank)

  }
  
}
