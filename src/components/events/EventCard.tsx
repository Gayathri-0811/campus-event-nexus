
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Event, EventCategory, EventType } from "@/types/event";
import { Progress } from "@/components/ui/progress";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const registrationPercentage = Math.round((event.registered / event.capacity) * 100);
  
  const getCategoryBadgeClass = (category: EventCategory) => {
    return `category-badge category-badge-${category}`;
  };
  
  const formatEventDate = (date: Date) => {
    return format(date, "MMM d, yyyy");
  };
  
  const formatEventTime = (date: Date) => {
    return format(date, "h:mm a");
  };
  
  return (
    <Card className="overflow-hidden event-card-transition">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <div className={getCategoryBadgeClass(event.category)}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold line-clamp-2 mb-1">
            <Link to={`/events/${event.id}`} className="hover:text-primary">
              {event.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {event.description}
          </p>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{formatEventDate(event.startDate)}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>
              {formatEventTime(event.startDate)} - {formatEventTime(event.endDate)}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{event.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between text-xs mb-1">
                <span>{event.registered} registered</span>
                <span>{event.capacity} capacity</span>
              </div>
              <Progress value={registrationPercentage} className="h-1.5" />
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {event.eventType === EventType.FREE ? (
          <Badge variant="outline" className="font-normal">Free</Badge>
        ) : (
          <Badge variant="outline" className="font-normal">${event.price}</Badge>
        )}
        
        <Button asChild>
          <Link to={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
