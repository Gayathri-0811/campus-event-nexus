
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EventOrganizerProps {
  organizerName: string;
}

const EventOrganizer: React.FC<EventOrganizerProps> = ({ organizerName }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Organizer</h2>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold">
                {organizerName.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-medium">{organizerName}</h3>
              <p className="text-sm text-muted-foreground">Event Organizer</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventOrganizer;
