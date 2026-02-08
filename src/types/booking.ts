export interface BookingFormData {
  tourId: string;
  departureCity: string;
  date: Date | undefined;
  adults: number;
  children: number;
  addOns: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specialRequests: string;
}

export interface QuickBookingData {
  tourId: string;
  departureCity: string;
  date: Date | undefined;
  guests: number;
}