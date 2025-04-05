
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";

interface EventInfoProps {
  startDate: Date;
  endDate: Date;
  location: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ startDate, endDate, location }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="h-5 w-5" />
        <span>{format(startDate, "MMMM d, yyyy")}</span>
      </div>
      
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock className="h-5 w-5" />
        <span>
          {format(startDate, "h:mm a")} - {format(endDate, "h:mm a")}
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-5 w-5" />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default EventInfo;
