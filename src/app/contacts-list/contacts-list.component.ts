import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts : Contact[];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  foo(index, contact) {
    return contact.id;
  }

}

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './alternate-contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class AlternateContactsListComponent implements OnInit {

  contacts : Contact[];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  foo(index, contact) {
    return contact.id;
  }

}
