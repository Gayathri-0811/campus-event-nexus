
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getEvents } from "@/services/eventService";
import { format } from "date-fns";
import { Event, EventCategory } from "@/types/event";
import { cn } from "@/lib/utils";

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
  const renderEventIndicator = (day: Date) => {
    const dateStr = format(day, "yyyy-MM-dd");
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
              "h-1.5 w-1.5 rounded-full",
              getCategoryDotColor(category)
            )}
          />
        ))}
        {dayEvents.length > 3 && <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />}
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          components={{
            DayContent: ({ day }) => (
              <div className="flex flex-col items-center">
                <div>{format(day, "d")}</div>
                {renderEventIndicator(day)}
              </div>
            ),
          }}
        />
      </Card>
      
      <Card className="p-4">
        <div className="flex flex-col h-full">
          <h3 className="font-semibold text-lg mb-4">
            Events for {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Today"}
          </h3>
          
          {eventsForSelectedDate.length > 0 ? (
            <div className="space-y-4 flex-grow">
              {eventsForSelectedDate.map((event) => (
                <div key={event.id} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <div className={getCategoryBadgeClass(event.category)}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {format(event.startDate, "h:mm a")} - {format(event.endDate, "h:mm a")}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {event.location}
                  </p>
                  
                  <div className="flex gap-1">
                    {event.eventType === "FREE" ? (
                      <Badge variant="outline" className="text-xs">Free</Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">${event.price}</Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {event.registered}/{event.capacity} registered
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-grow text-muted-foreground text-center py-8">
              <p>No events scheduled for this date.</p>
              <p className="text-sm mt-1">Select another date or create a new event.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EventCalendar;
