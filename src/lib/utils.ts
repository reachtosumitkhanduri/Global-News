import { format, parseISO } from 'date-fns';

export function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, 'MMM dd, yyyy • h:mm a');
  } catch (error) {
    return dateString;
  }
}

export function truncateText(text: string | null, maxLength: number): string {
  if (!text) return '';
  
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.slice(0, maxLength) + '...';
}

export function getImagePlaceholder(): string {
  return 'https://placehold.co/600x400?text=No+Image+Available';
} 