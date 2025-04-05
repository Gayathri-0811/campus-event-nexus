
import React from "react";
import { Link } from "react-router-dom";
import EventsGrid from "@/components/events/EventsGrid";
import { Button } from "@/components/ui/button";
import { getPopularEvents } from "@/services/eventService";

const FeaturedEvents: React.FC = () => {
  const popularEvents = getPopularEvents();

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Events</h2>
          <p className="text-muted-foreground mt-1">Don't miss out on these popular campus activities</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/events">View All Events</Link>
        </Button>
      </div>
      
      <EventsGrid events={popularEvents} />
    </section>
  );
};

export default FeaturedEvents;
