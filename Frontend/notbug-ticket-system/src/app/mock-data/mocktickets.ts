import { Observable, of } from 'rxjs';
import { Status } from '../models/status.type';
import { TicketData } from '../models/ticket.model';

export const mockTickets: TicketData[] = [
  {
    id: '1',
    status: Status.SUBMITTED,
    title: 'Cannot log in',
    description:
      'User is unable to log into the application with correct credentials.',
  },
  {
    id: '2',
    status: Status.INPROGRESS,
    title: 'Page not loading',
    description:
      'The dashboard page fails to load after clicking the login button.',
  },
  {
    id: '3',
    status: Status.RESOLVED,
    title: 'Typo in header',
    description: 'There is a typo in the application title on the main page.',
  },
  {
    id: '4',
    status: Status.CLOSED,
    title: 'Dark mode not working',
    description: 'User reports that switching to dark mode has no effect.',
  },
  {
    id: '5',
    status: Status.SUBMITTED,
    title: 'Error 500 on form submit',
    description: 'Submitting the contact form returns a 500 server error.',
  },
];

export function GetTickets(): Observable<TicketData[]> {
  return of(mockTickets);
}

export function GetTicketById(id: string): Observable<TicketData | undefined> {
  return of(mockTickets.find((ticket) => ticket.id === id));
}
