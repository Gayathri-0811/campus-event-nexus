
import React from "react";
import { Calendar, MapPin, Users, Share2, Heart } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface EventRegistrationProps {
  capacity: number;
  registered: number;
  startDate: Date;
  endDate: Date;
  location: string;
  title: string;
}

const EventRegistration: React.FC<EventRegistrationProps> = ({
  capacity,
  registered,
  startDate,
  endDate,
  location,
  title
}) => {
  const { toast } = useToast();
  const registrationPercentage = Math.round((registered / capacity) * 100);
  
  const handleRegister = () => {
    toast({
      title: "Registration Successful!",
      description: `You've registered for ${title}.`,
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Event Shared",
      description: "Event link copied to clipboard.",
    });
  };
  
  const handleSave = () => {
    toast({
      title: "Event Saved",
      description: "Event has been added to your saved events.",
    });
  };

  return (
    <Card className="sticky top-20">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Registration</h2>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Spots remaining</span>
            <span className="font-medium">
              {capacity - registered} of {capacity}
            </span>
          </div>
          <Progress value={registrationPercentage} className="h-2" />
          
          <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{registered} people registered</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button className="w-full" onClick={handleRegister}>
            Register for Event
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={handleSave}>
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" className="flex-1" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <h3 className="font-medium mb-2">Event Details</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm">
              <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium">Date and Time</p>
                <p className="text-muted-foreground">
                  {format(startDate, "MMMM d, yyyy")}
                  <br />
                  {format(startDate, "h:mm a")} - {format(endDate, "h:mm a")}
                </p>
              </div>
            </li>
            
            <li className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">{location}</p>
              </div>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventRegistration;
