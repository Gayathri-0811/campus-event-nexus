
import React from "react";
import { Bell, Calendar, BarChart2, Trophy, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">EventNexus</span>
          </Link>
        </div>

        <div className="hidden md:flex md:w-1/3 lg:w-1/4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events..."
              className="w-full bg-background pl-8"
            />
          </div>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categories.map((category) => (
                    <ListItem
                      key={category.title}
                      title={category.title}
                      href={category.href}
                    >
                      {category.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/calendar" className="px-4 py-2 hover:text-primary flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/calendar?tab=dashboard" className="px-4 py-2 hover:text-primary flex items-center gap-1">
                <BarChart2 className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/calendar?tab=leaderboard" className="px-4 py-2 hover:text-primary flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                <span>Leaderboard</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/create-event" className="px-4 py-2 hover:text-primary">
                Create Event
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              3
            </span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          <Button asChild>
            <Link to="/create-event">Create Event</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const categories = [
  {
    title: "Academic Events",
    href: "/events/academic",
    description:
      "Lectures, workshops, and seminars to enhance your knowledge and skills.",
  },
  {
    title: "Cultural Events",
    href: "/events/cultural",
    description:
      "Celebrate diversity through performances, exhibitions, and festivals.",
  },
  {
    title: "Sports Events",
    href: "/events/sports",
    description:
      "Competitions, tournaments, and recreational activities for sports enthusiasts.",
  },
  {
    title: "Social Events",
    href: "/events/social",
    description:
      "Gatherings, parties, and mixers to connect with fellow students.",
  },
  {
    title: "Career Events",
    href: "/events/career",
    description:
      "Job fairs, networking events, and career development opportunities.",
  },
];

export default Navbar;
