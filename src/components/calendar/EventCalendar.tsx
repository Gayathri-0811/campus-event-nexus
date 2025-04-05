
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getEvents } from "@/services/eventService";
import { format } from "date-fns";
import { Event, EventCategory, EventType } from "@/types/event";
import { cn } from "@/lib/utils";
import { BookOpen, Gift, Star, Trophy, MapPin, Clock, Users } from "lucide-react";

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
      <Card className="lg:col-span-2 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/20 pb-2">
          <CardTitle className="text-xl font-bold text-center flex flex-col items-center">
            <span>Events Calendar</span>
            <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full"></div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border-2 shadow-inner bg-gradient-to-br from-white to-accent/10 p-3"
            components={{
              DayContent: (props) => (
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium">{format(props.date, "d")}</div>
                  {renderEventIndicator(props.date)}
                </div>
              ),
            }}
          />
        </CardContent>
      </Card>
      
      <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/20 pb-2">
          <CardTitle className="text-xl font-bold">
            <div className="flex items-center justify-between">
              <span>Events for</span>
              <span className="text-primary">
                {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Today"}
              </span>
            </div>
            <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-col h-full max-h-[500px] overflow-y-auto custom-scrollbar">
            {eventsForSelectedDate.length > 0 ? (
              <div className="space-y-4 flex-grow">
                {eventsForSelectedDate.map((event) => (
                  <div 
                    key={event.id} 
                    className="border-l-4 pl-4 pb-4 mb-4 last:mb-0 hover:bg-accent/20 rounded-r-md transition-colors border-l-primary/50 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-lg flex items-center gap-1 group-hover:text-primary transition-colors">
                        {getEventIcon(event.category)}
                        {event.title}
                      </h4>
                      <div className={cn(getCategoryBadgeClass(event.category), "animate-fade-in")}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </div>
                    </div>
                    
                    <div className="pl-5 space-y-2 text-sm">
                      <div className="text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{format(event.startDate, "h:mm a")} - {format(event.endDate, "h:mm a")}</span>
                      </div>
                      
                      <div className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex gap-1 mt-2">
                        {event.eventType === EventType.FREE ? (
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-600">Free</Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs bg-amber-50 text-amber-600">${event.price}</Badge>
                        )}
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{event.registered}/{event.capacity}</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 bg-accent/10 rounded-lg border border-dashed border-accent">
                <Calendar className="h-10 w-10 text-muted-foreground mb-2 opacity-50" />
                <p className="text-muted-foreground font-medium">No events scheduled for this date</p>
                <p className="text-sm text-muted-foreground/80 mt-1">Select another date or create a new event</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;
