
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    title: "Events Hosted",
    value: "500+",
    description: "Every semester",
    icon: <CalendarCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Active Students",
    value: "10,000+",
    description: "Participating regularly",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Categories",
    value: "50+",
    description: "Diverse event types",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Average Rating",
    value: "4.8/5",
    description: "From attendees",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Campus Events by the Numbers</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Our vibrant community is constantly growing and evolving with new events and participants every day.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-2">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="font-medium mb-1">{stat.title}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
