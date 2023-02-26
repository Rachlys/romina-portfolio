import { Component, OnInit } from '@angular/core';
import { BbddService } from '../services/bbdd.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  info_sobre_mi : Array<any> = []

  constructor(
    private bbddService : BbddService
  ) { }

  ngOnInit(): void {
    this.info_sobre_mi = this.bbddService.sobre_mi
  }

}
