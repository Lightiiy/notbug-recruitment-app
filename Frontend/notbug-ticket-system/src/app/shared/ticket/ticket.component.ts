import { Component, input, Input, InputSignal } from '@angular/core';
import { TicketData } from '../../models/ticket.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket',
  imports: [RouterLink],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  ticket$$: InputSignal<TicketData> = input.required<TicketData>({
    alias: 'ticket',
  });
}
