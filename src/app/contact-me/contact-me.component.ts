import { Component, OnInit } from '@angular/core';
import { BbddService } from '../services/bbdd.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  info_contact_me : Array<any> = []


  constructor(
    private bbddService : BbddService
  ) {
    this.info_contact_me = bbddService.contact_me
   }

  ngOnInit(): void {

  }

}
