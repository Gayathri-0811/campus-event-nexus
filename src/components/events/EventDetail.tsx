
import React from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Tag, 
  ArrowLeft,
  Share2,
  Heart
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { getEventById } from "@/services/eventService";
import { EventCategory } from "@/types/event";
import { useToast } from "@/hooks/use-toast";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const event = id ? getEventById(id) : null;
  
  if (!event) {
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
  }
  
  const registrationPercentage = Math.round((event.registered / event.capacity) * 100);
  
  const handleRegister = () => {
    toast({
      title: "Registration Successful!",
      description: `You've registered for ${event.title}.`,
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
  
  const getCategoryBadgeClass = (category: EventCategory) => {
    return `category-badge category-badge-${category}`;
  };

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
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={event.imageUrl} 
              alt={event.title} 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className={getCategoryBadgeClass(event.category)}>
                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </div>
              {event.eventType === "FREE" ? (
                <Badge variant="secondary">Free</Badge>
              ) : (
                <Badge variant="secondary">${event.price}</Badge>
              )}
            </div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>{format(event.startDate, "MMMM d, yyyy")}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>
                {format(event.startDate, "h:mm a")} - {format(event.endDate, "h:mm a")}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-3">About This Event</h2>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-accent text-accent-foreground">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Organizer</h2>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {event.organizerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">{event.organizerName}</h3>
                    <p className="text-sm text-muted-foreground">Event Organizer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Registration</h2>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Spots remaining</span>
                  <span className="font-medium">
                    {event.capacity - event.registered} of {event.capacity}
                  </span>
                </div>
                <Progress value={registrationPercentage} className="h-2" />
                
                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{event.registered} people registered</span>
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
                        {format(event.startDate, "MMMM d, yyyy")}
                        <br />
                        {format(event.startDate, "h:mm a")} - {format(event.endDate, "h:mm a")}
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
