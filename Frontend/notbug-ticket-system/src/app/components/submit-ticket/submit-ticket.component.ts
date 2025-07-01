import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-ticket',
  imports: [ReactiveFormsModule],
  templateUrl: './submit-ticket.component.html',
  styleUrl: './submit-ticket.component.scss',
})
export class SubmitTicketComponent {
  ticketForm: FormGroup = new FormGroup({
    ticketTitle: new FormControl(),
    ticketDescription: new FormControl(),
  });

  onSubmit() {
    console.log('API POST TICKET');
  }
}
