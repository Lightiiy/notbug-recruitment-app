import { Status } from './status.type';

export interface TicketData {
  id: string;
  status: Status;
  title: string;
  description: string;
}
