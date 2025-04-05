
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getEvents } from "@/services/eventService";
import { format } from "date-fns";
import { Event, EventCategory, EventType } from "@/types/event";
import { cn } from "@/lib/utils";
import { DayContent } from "react-day-picker";
import { BookOpen, Gift, Star, Trophy } from "lucide-react";

const EventCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const events = getEvents();

  // Create a map of dates to events
  const eventsByDate = events.reduce((acc, event) => {
    const dateStr = format(event.startDate, "yyyy-MM-dd");
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  // Get events for the selected date
  const selectedDateStr = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const eventsForSelectedDate = selectedDateStr ? eventsByDate[selectedDateStr] || [] : [];

  // Function to render event indicators in calendar cells
  const renderEventIndicator = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    const dayEvents = eventsByDate[dateStr] || [];
    
    if (dayEvents.length === 0) return null;
    
    // Limit to showing indicators for up to 3 different categories
    const categories = Array.from(new Set(dayEvents.map(event => event.category))).slice(0, 3);
    
    return (
      <div className="flex justify-center gap-1 mt-1">
        {categories.map((category) => (
          <div
            key={category}
            className={cn(
              "h-2 w-2 rounded-full animate-pulse",
              getCategoryDotColor(category)
            )}
          />
        ))}
        {dayEvents.length > 3 && <div className="h-2 w-2 rounded-full bg-gray-400" />}
      </div>
    );
  };

  const getCategoryDotColor = (category: EventCategory) => {
    switch (category) {
      case EventCategory.ACADEMIC:
        return "bg-event-academic";
      case EventCategory.CULTURAL:
        return "bg-event-cultural";
      case EventCategory.SPORTS:
        return "bg-event-sports";
      case EventCategory.SOCIAL:
        return "bg-event-social";
      case EventCategory.CAREER:
        return "bg-event-career";
      default:
        return "bg-gray-400";
    }
  };
  
  const getCategoryBadgeClass = (category: EventCategory) => {
    return `category-badge category-badge-${category}`;
  };
  
  const getEventIcon = (category: EventCategory) => {
    switch (category) {
      case EventCategory.ACADEMIC:
        return <BookOpen className="h-4 w-4 mr-1" />;
      case EventCategory.CULTURAL:
        return <Star className="h-4 w-4 mr-1" />;
      case EventCategory.SPORTS:
        return <Trophy className="h-4 w-4 mr-1" />;
      default:
        return <Gift className="h-4 w-4 mr-1" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 p-4 border-2 border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Event Calendar
            <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full"></div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border shadow-inner bg-gradient-to-br from-white to-accent/10"
            components={{
              DayContent: (props) => (
                <div className="flex flex-col items-center">
                  <div>{format(props.date, "d")}</div>
                  {renderEventIndicator(props.date)}
                </div>
              ),
            }}
          />
        </CardContent>
      </Card>
      
      <Card className="p-4 border-2 border-primary/20 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold">
            Events for {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Today"}
            <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col h-full">
            {eventsForSelectedDate.length > 0 ? (
              <div className="space-y-4 flex-grow">
                {eventsForSelectedDate.map((event) => (
                  <div key={event.id} className="border-b pb-3 last:border-0 hover:bg-accent/20 p-2 rounded-md transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-lg flex items-center">
                        {getEventIcon(event.category)}
                        {event.title}
                      </h4>
                      <div className={cn(getCategoryBadgeClass(event.category), "animate-fade-in")}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2 pl-5">
                      {format(event.startDate, "h:mm a")} - {format(event.endDate, "h:mm a")}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-2 pl-5">
                      {event.location}
                    </p>
                    
                    <div className="flex gap-1 pl-5">
                      {event.eventType === EventType.FREE ? (
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-600">Free</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs bg-amber-50 text-amber-600">${event.price}</Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {event.registered}/{event.capacity} registered
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center flex-grow text-muted-foreground text-center py-8 bg-accent/10 rounded-lg">
                <p>No events scheduled for this date.</p>
                <p className="text-sm mt-1">Select another date or create a new event.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;
