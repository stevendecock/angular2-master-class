import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Contact;

  constructor(private contactsService : ContactsService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // Alternatief:
    // this.router.navigate(['/contacts',contact.id,'edit']);
  }

  navigateToList() {
    this.router.navigate(['']);
  }

}
