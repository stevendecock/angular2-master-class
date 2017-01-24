import {Injectable, Inject} from "@angular/core";
import {CONTACT_DATA} from "./data/contact-data";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";
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

  search(terms: Observable<string>, debounceMs = 400): Observable<Array<Contact>> {
    return terms
      .debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(this.rawSearch());
  }

  private rawSearch() {
    return term =>
      this.http.get(`${this.apiEndpoint}/search?text=${term}`)
        .map(res => res.json().items);
  }

}
