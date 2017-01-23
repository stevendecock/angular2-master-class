import {Injectable} from "@angular/core";
import {CONTACT_DATA} from "./data/contact-data";
import "rxjs/add/operator/map";
import {Http} from "@angular/http";
import {Contact} from "./models/contact";

@Injectable()
export class ContactsService {

  private contacts = CONTACT_DATA;

  constructor(private http: Http) {}

  getContacts() {
    return this.http.get('http://localhost:4201/api/contacts')
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id : string) {
    return this.http.get(`http://localhost:4201/api/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    return this.http.put(`http://localhost:4201/api/contacts/${contact.id}`, contact);
  }

}
