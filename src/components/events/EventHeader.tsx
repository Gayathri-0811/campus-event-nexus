
import React from "react";
import { Badge } from "@/components/ui/badge";
import { EventCategory, EventType } from "@/types/event";

interface EventHeaderProps {
  title: string;
  imageUrl: string;
  category: EventCategory;
  eventType: EventType;
  price?: number;
}

const EventHeader: React.FC<EventHeaderProps> = ({ 
  title, 
  imageUrl, 
  category, 
  eventType, 
  price 
}) => {
  const getCategoryBadgeClass = (category: EventCategory) => {
    return `category-badge category-badge-${category}`;
  };
  
  return (
    <>
      <div className="relative rounded-lg overflow-hidden mb-6">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <div className={getCategoryBadgeClass(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
          {eventType === EventType.FREE ? (
            <Badge variant="secondary">Free</Badge>
          ) : (
            <Badge variant="secondary">${price}</Badge>
          )}
        </div>
      </div>
      
      <h1 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
    </>
  );
};

export default EventHeader;
