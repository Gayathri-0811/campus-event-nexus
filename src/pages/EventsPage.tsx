
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import EventsGrid from "@/components/events/EventsGrid";
import EventFilters from "@/components/events/EventFilters";
import { filterEvents } from "@/services/eventService";
import { EventFilters as EventFiltersType } from "@/types/event";

const EventsPage = () => {
  const [filters, setFilters] = useState<EventFiltersType>({});
  const filteredEvents = filterEvents(
    filters.searchTerm,
    filters.category,
    filters.eventType,
    filters.startDate,
    filters.endDate
  );

  const handleFilterChange = (newFilters: EventFiltersType) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Campus Events</h1>
          <p className="text-muted-foreground">
            Discover and join events happening across campus
          </p>
        </div>
        
        <EventFilters onFilterChange={handleFilterChange} />
        
        <EventsGrid 
          events={filteredEvents} 
          emptyMessage="No events match your search criteria. Try adjusting your filters."
        />
      </div>
    </Layout>
  );
};

export default EventsPage;
