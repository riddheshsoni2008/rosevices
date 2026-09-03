// Static website configuration - Direct WhatsApp booking enabled.
export interface IBookingRecord {
  ticketId: string;
  name: string;
  phone: string;
  serviceType: string;
  preferredTime: string;
  address: string;
  comments?: string;
}
