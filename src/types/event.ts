
export enum EventCategory {
  ACADEMIC = "academic",
  CULTURAL = "cultural",
  SPORTS = "sports",
  SOCIAL = "social",
  CAREER = "career",
}

export enum EventType {
  FREE = "free",
  PAID = "paid",
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  imageUrl: string;
  category: EventCategory;
  organizerId: string;
  organizerName: string;
  eventType: EventType;
  price?: number;
  capacity: number;
  registered: number;
  tags: string[];
  isPopular: boolean;
}

export interface EventFilters {
  searchTerm?: string;
  category?: EventCategory;
  eventType?: EventType;
  startDate?: Date;
  endDate?: Date;
}
