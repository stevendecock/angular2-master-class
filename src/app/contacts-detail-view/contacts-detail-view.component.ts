import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit']);
  }

  navigateToList() {
    this.router.navigate(['']);
  }

}
