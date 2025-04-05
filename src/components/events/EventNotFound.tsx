
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EventNotFound: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
        <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/events">Browse All Events</Link>
        </Button>
      </div>
    </div>
  );
};

export default EventNotFound;
