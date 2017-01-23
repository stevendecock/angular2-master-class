import {Injectable, Inject} from "@angular/core";
import {CONTACT_DATA} from "./data/contact-data";
import "rxjs/add/operator/map";
import {Http} from "@angular/http";
import {Contact} from "./models/contact";
import {Observable} from "rxjs";
import {API_ENDPOINT_TOKEN} from "./tokens";

@Injectable()
export class ContactsService {

  private contacts = CONTACT_DATA;

  constructor(
    private http: Http,
    @Inject(API_ENDPOINT_TOKEN) private apiEndpoint : string) {}

  getContact(id : string): Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(res => res.json().item);
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map(res => res.json().items);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }

}
