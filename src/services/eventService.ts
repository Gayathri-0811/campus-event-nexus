
import { EventType, Event, EventCategory } from "@/types/event";

// Mock data for events
const events: Event[] = [
  {
    id: "1",
    title: "Annual Tech Symposium",
    description: "Join us for a day of cutting-edge tech talks, workshops, and networking opportunities with industry professionals.",
    startDate: new Date(2025, 4, 15, 9, 0),
    endDate: new Date(2025, 4, 15, 17, 0),
    location: "Main Campus Auditorium",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: EventCategory.ACADEMIC,
    organizerId: "org1",
    organizerName: "Computer Science Department",
    eventType: EventType.FREE,
    capacity: 300,
    registered: 215,
    tags: ["technology", "computer science", "research"],
    isPopular: true,
  },
  {
    id: "2",
    title: "Spring Cultural Festival",
    description: "Celebrate diversity with performances, food stalls, and cultural exhibits from around the world.",
    startDate: new Date(2025, 4, 20, 11, 0),
    endDate: new Date(2025, 4, 20, 22, 0),
    location: "Campus Square",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: EventCategory.CULTURAL,
    organizerId: "org2",
    organizerName: "International Students Association",
    eventType: EventType.FREE,
    capacity: 1000,
    registered: 750,
    tags: ["culture", "diversity", "food", "performance"],
    isPopular: true,
  },
  {
    id: "3",
    title: "Career Fair 2025",
    description: "Connect with top employers, gain insights into industry trends, and explore internship and job opportunities.",
    startDate: new Date(2025, 4, 25, 10, 0),
    endDate: new Date(2025, 4, 25, 16, 0),
    location: "Business School Building",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: EventCategory.CAREER,
    organizerId: "org3",
    organizerName: "Career Services Center",
    eventType: EventType.FREE,
    capacity: 500,
    registered: 490,
    tags: ["career", "jobs", "networking", "professional"],
    isPopular: true,
  },
  {
    id: "4",
    title: "Inter-College Basketball Tournament",
    description: "Watch the most talented basketball players from different colleges compete in our annual tournament.",
    startDate: new Date(2025, 5, 5, 13, 0),
    endDate: new Date(2025, 5, 7, 18, 0),
    location: "University Sports Complex",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: EventCategory.SPORTS,
    organizerId: "org4",
    organizerName: "Sports Department",
    eventType: EventType.PAID,
    price: 5,
    capacity: 800,
    registered: 450,
    tags: ["sports", "basketball", "competition"],
    isPopular: false,
  },
  {
    id: "5",
    title: "End of Year Social Mixer",
    description: "Relax and socialize with fellow students and faculty members to celebrate the end of the academic year.",
    startDate: new Date(2025, 5, 20, 18, 0),
    endDate: new Date(2025, 5, 20, 23, 0),
    location: "Student Center Ballroom",
    imageUrl: "https://images.unsplash.com/photo-1507878866276-a947ef722fee",
    category: EventCategory.SOCIAL,
    organizerId: "org5",
    organizerName: "Student Council",
    eventType: EventType.FREE,
    capacity: 400,
    registered: 320,
    tags: ["social", "networking", "fun"],
    isPopular: false,
  },
  {
    id: "6",
    title: "Research Symposium",
    description: "Undergraduate and graduate students present their research findings across various disciplines.",
    startDate: new Date(2025, 5, 12, 9, 0),
    endDate: new Date(2025, 5, 12, 17, 0),
    location: "Science Building Conference Hall",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    category: EventCategory.ACADEMIC,
    organizerId: "org6",
    organizerName: "Research Office",
    eventType: EventType.FREE,
    capacity: 200,
    registered: 150,
    tags: ["research", "academic", "science"],
    isPopular: false,
  },
  {
    id: "7",
    title: "Entrepreneurship Workshop",
    description: "Learn from successful entrepreneurs and develop skills to launch your own startup.",
    startDate: new Date(2025, 5, 15, 14, 0),
    endDate: new Date(2025, 5, 15, 18, 0),
    location: "Innovation Hub",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    category: EventCategory.CAREER,
    organizerId: "org7",
    organizerName: "Entrepreneurship Center",
    eventType: EventType.PAID,
    price: 10,
    capacity: 100,
    registered: 85,
    tags: ["entrepreneurship", "business", "startup"],
    isPopular: false,
  },
  {
    id: "8",
    title: "International Film Festival",
    description: "A week-long celebration of cinema featuring award-winning films from around the world.",
    startDate: new Date(2025, 6, 1, 16, 0),
    endDate: new Date(2025, 6, 7, 22, 0),
    location: "Campus Cinema Hall",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    category: EventCategory.CULTURAL,
    organizerId: "org8",
    organizerName: "Film Society",
    eventType: EventType.PAID,
    price: 8,
    capacity: 150,
    registered: 120,
    tags: ["film", "cinema", "culture", "arts"],
    isPopular: false,
  },
];

// Service functions
export const getEvents = (): Event[] => {
  return events;
};

export const getPopularEvents = (): Event[] => {
  return events.filter(event => event.isPopular);
};

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getEventsByCategory = (category: EventCategory): Event[] => {
  return events.filter(event => event.category === category);
};

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return events.filter(event => event.startDate > now);
};

export const filterEvents = (
  searchTerm: string = "",
  category?: EventCategory,
  eventType?: EventType,
  startDate?: Date,
  endDate?: Date
): Event[] => {
  return events.filter(event => {
    // Filter by search term
    const matchesSearchTerm = searchTerm 
      ? event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;

    // Filter by category
    const matchesCategory = category ? event.category === category : true;

    // Filter by event type
    const matchesEventType = eventType ? event.eventType === eventType : true;

    // Filter by date range
    const matchesDateRange = (startDate && endDate) 
      ? event.startDate >= startDate && event.endDate <= endDate
      : true;

    return matchesSearchTerm && matchesCategory && matchesEventType && matchesDateRange;
  });
};
