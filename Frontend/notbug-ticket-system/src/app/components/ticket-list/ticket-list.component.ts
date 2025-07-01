import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetTickets } from '../../mock-data/mocktickets';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { TicketData } from '../../models/ticket.model';
import { TicketComponent } from '../../shared/ticket/ticket.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  imports: [TicketComponent, AsyncPipe],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss',
})
export class TicketListComponent {
  tickets$: Observable<TicketData[]> = GetTickets();
}
