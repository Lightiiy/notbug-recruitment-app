import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  imports: [],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss',
})
export class TicketDetailsComponent {
  ticketId$$ = input.required<string>({ alias: 'id' });
}
