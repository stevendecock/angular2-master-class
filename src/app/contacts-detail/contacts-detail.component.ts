import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  private contact : Contact;

  constructor(private contactsService : ContactsService, private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}
