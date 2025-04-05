
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Academic",
    description: "Lectures, workshops, and seminars",
    icon: "📚",
    bgClass: "bg-event-academic/10 hover:bg-event-academic/20",
    textClass: "text-event-academic",
    href: "/events/academic",
  },
  {
    title: "Cultural",
    description: "Performances, exhibitions, and festivals",
    icon: "🎭",
    bgClass: "bg-event-cultural/10 hover:bg-event-cultural/20",
    textClass: "text-event-cultural",
    href: "/events/cultural",
  },
  {
    title: "Sports",
    description: "Competitions, tournaments, and games",
    icon: "🏆",
    bgClass: "bg-event-sports/10 hover:bg-event-sports/20",
    textClass: "text-event-sports",
    href: "/events/sports",
  },
  {
    title: "Social",
    description: "Networking, parties, and social gatherings",
    icon: "🎉",
    bgClass: "bg-event-social/10 hover:bg-event-social/20",
    textClass: "text-event-social",
    href: "/events/social",
  },
  {
    title: "Career",
    description: "Job fairs, recruitment, and professional development",
    icon: "💼",
    bgClass: "bg-event-career/10 hover:bg-event-career/20",
    textClass: "text-event-career",
    href: "/events/career",
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Browse Events by Category</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Explore our diverse range of campus events organized into categories to help you find exactly what you're interested in.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link to={category.href} key={category.title}>
              <Card className={cn(
                "p-6 h-full transition-all duration-300 group hover:shadow-md",
                category.bgClass
              )}>
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className={cn("font-bold text-xl mb-2", category.textClass)}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {category.description}
                  </p>
                  <div className={cn(
                    "flex items-center text-sm font-medium transition-colors",
                    category.textClass
                  )}>
                    <span>Explore</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
