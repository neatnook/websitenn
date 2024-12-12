import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (date: string | Date) => {
  return format(new Date(date), 'PPP');
};

export const formatTime = (date: string | Date) => {
  return format(new Date(date), 'p');
};

export const formatRelativeTime = (date: string | Date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatDateTime = (date: string | Date) => {
  return format(new Date(date), 'PPp');
};