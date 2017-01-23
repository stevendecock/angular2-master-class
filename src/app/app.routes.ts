import { ContactsListComponent, AlternateContactsListComponent } from "./contacts-list/contacts-list.component"

export const APP_ROUTES = [
  { path: '', component: ContactsListComponent },
  { path: 'test', component: AlternateContactsListComponent },
  { path: '**', component: ContactsListComponent }
];
