import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import {Subject} from "rxjs";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts : Observable<Array<Contact>>;
  // terms$: $ is a convention, saying that this is s stream
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    let filteredContacts$ = this.contactsService.search(this.terms$, 400);
    this.contacts = this.contactsService.getContacts().delay(3000) // Forceer delay van 3 seconden om heel trage initiële request te simuleren. Als je snel genoeg filtert zou je nooit de volledige lijst mogen zien.
      .takeUntil(filteredContacts$) // We consumen de values op deze observable tot er value op de filteredContacts$ observable komen. Zonder deze lijn krijg je als je snel filtert eerst even de gefilterde lijst te zien, en dan na 5 seconden opnieuw de volledige lijst.
      .merge(filteredContacts$); // We mergen de initiële observable en de filteredContacts$ observable
  }

  trackByContactId(index, contact) {
    return contact.id;
  }

}
