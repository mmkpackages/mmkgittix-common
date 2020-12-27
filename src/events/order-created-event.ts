import { Subjects }  from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.ORDER_CREATED;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string; // should be Date ???
    ticket: {
      id: string;
      price: number
    };
  }
}