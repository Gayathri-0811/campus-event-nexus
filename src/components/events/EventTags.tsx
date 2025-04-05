
import React from "react";
import { Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventTagsProps {
  tags: string[];
}

const EventTags: React.FC<EventTagsProps> = ({ tags }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-accent text-accent-foreground">
            <Tag className="h-3 w-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default EventTags;
