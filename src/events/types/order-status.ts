export enum OrderStatus {
  // When order is created, but ticket it is trying to order has not been reserved
  // (THINK ABOUT RACE CONDITION)
  CREATED = 'created',

  // The ticket we trying to reseve is already reserved,
  // OR when user cancelled order
  // OR Order Expires before payment
  CANCELLED = 'cancelled',

  // Order has successfully reserved the ticket
  AWAITING_PAYMENT = 'awaiting:payment',

  // The order reserved the ticket, and user completed payment
  COMPLETE = 'complete'
}