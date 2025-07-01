import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { SubmitTicketComponent } from './components/submit-ticket/submit-ticket.component';

export const routes: Routes = [
  {
    path: 'tickets',
    component: TicketListComponent,
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent,
  },
  {
    path: 'submit',
    component: SubmitTicketComponent,
  },
  {
    path: '**',
    component: HomepageComponent,
  },
];
