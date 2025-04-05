
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import EventsGrid from "@/components/events/EventsGrid";
import { getEventsByCategory } from "@/services/eventService";
import { ArrowLeft } from "lucide-react";
import { EventCategory } from "@/types/event";

const CategoryEventsPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Convert URL parameter to EventCategory
  const eventCategory = category as EventCategory;
  const events = eventCategory ? getEventsByCategory(eventCategory) : [];
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <Link to="/events" className="flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to All Events</span>
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {category ? formatCategoryName(category) : "Category"} Events
          </h1>
          <p className="text-muted-foreground">
            Browse all {category ? formatCategoryName(category).toLowerCase() : "category"} events happening on campus
          </p>
        </div>
        
        <EventsGrid 
          events={events} 
          emptyMessage={`No ${category ? formatCategoryName(category).toLowerCase() : "category"} events currently available.`}
        />
      </div>
    </Layout>
  );
};

export default CategoryEventsPage;
