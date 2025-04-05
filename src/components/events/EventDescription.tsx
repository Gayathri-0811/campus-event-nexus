
import React from "react";

interface EventDescriptionProps {
  description: string;
}

const EventDescription: React.FC<EventDescriptionProps> = ({ description }) => {
  return (
    <div className="prose max-w-none mb-8">
      <h2 className="text-xl font-semibold mb-3">About This Event</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default EventDescription;
