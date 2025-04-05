
import React from "react";
import EventCard from "./EventCard";
import { Event } from "@/types/event";

interface EventsGridProps {
  events: Event[];
  emptyMessage?: string;
}

const EventsGrid: React.FC<EventsGridProps> = ({ 
  events, 
  emptyMessage = "No events found" 
}) => {
  if (events.length === 0) {
    return (
      <div className="flex justify-center items-center p-8 border rounded-lg">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsGrid;
