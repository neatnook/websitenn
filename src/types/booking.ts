import { CleaningRequest } from './request';

export interface BookingFilters {
  status: 'all' | CleaningRequest['status'];
  serviceType: 'all' | CleaningRequest['serviceType'];
  dateRange: 'all' | 'today' | 'upcoming';
}

export interface BookingListItem {
  id: string;
  clientName: string;
  postcode: string;
  status: CleaningRequest['status'];
  date: string;
  time: string;
  serviceType: CleaningRequest['serviceType'];
}

export interface BookingDetailsProps {
  booking: CleaningRequest;
  onStatusChange: (id: string, status: CleaningRequest['status']) => void;
  onClose: () => void;
}

export interface BookingFiltersProps {
  filters: BookingFilters;
  onFilterChange: (filters: BookingFilters) => void;
}