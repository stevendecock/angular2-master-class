import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Contact;

  constructor(private contactsService : ContactsService, private router: Router, private route : ActivatedRoute, private eventBusService: EventBusService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact
        this.eventBusService.emit('appTitleChange', contact.name)
      });
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
