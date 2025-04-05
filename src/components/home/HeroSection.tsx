
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Discover <span className="text-primary">Campus Events</span> That Matter To You
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Your centralized hub for all campus activities. Find events, join communities, and make the most of your campus experience.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search for events..." 
                  className="pl-10 pr-4 py-6 text-lg rounded-full shadow-sm"
                />
              </div>
              <Button size="lg" className="rounded-full px-6">
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="text-sm font-medium">Popular Categories:</span>
              <Link to="/events/academic">
                <Badge>Academic</Badge>
              </Link>
              <Link to="/events/cultural">
                <Badge>Cultural</Badge>
              </Link>
              <Link to="/events/sports">
                <Badge>Sports</Badge>
              </Link>
              <Link to="/events/career">
                <Badge>Career</Badge>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-subtle" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-subtle" />
              
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-8">
                    <img 
                      src="https://images.unsplash.com/photo-1505236858219-8359eb29e329" 
                      alt="Campus event" 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a" 
                      alt="Students enjoying event" 
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754" 
                      alt="Academic symposium" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b" 
                      alt="Cultural festival" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
    {children}
  </span>
);

export default HeroSection;
