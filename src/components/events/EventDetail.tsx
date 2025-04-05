
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getEventById } from "@/services/eventService";
import EventNotFound from "./EventNotFound";
import EventHeader from "./EventHeader";
import EventInfo from "./EventInfo";
import EventDescription from "./EventDescription";
import EventTags from "./EventTags";
import EventOrganizer from "./EventOrganizer";
import EventRegistration from "./EventRegistration";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = id ? getEventById(id) : null;
  
  if (!event) {
    return <EventNotFound />;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link to="/events" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back to Events</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <EventHeader 
            title={event.title}
            imageUrl={event.imageUrl}
            category={event.category}
            eventType={event.eventType}
            price={event.price}
          />
          
          <EventInfo 
            startDate={event.startDate}
            endDate={event.endDate}
            location={event.location}
          />
          
          <EventDescription description={event.description} />
          
          <EventTags tags={event.tags} />
          
          <EventOrganizer organizerName={event.organizerName} />
        </div>
        
        <div>
          <EventRegistration
            capacity={event.capacity}
            registered={event.registered}
            startDate={event.startDate}
            endDate={event.endDate}
            location={event.location}
            title={event.title}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
