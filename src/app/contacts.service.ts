import {Injectable} from "@angular/core";
import {CONTACT_DATA} from "./data/contact-data";

@Injectable()
export class ContactsService {

  private contacts = CONTACT_DATA;

  getContacts() {
    return this.contacts;
  }

  getContact(id : string) {
    return this.contacts.find(contact => contact.id.toString() === id);
  }

}
