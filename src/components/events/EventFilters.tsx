
import React, { useState } from "react";
import { Search, Filter, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { EventCategory, EventType, EventFilters } from "@/types/event";

interface EventFiltersProps {
  onFilterChange: (filters: EventFilters) => void;
}

const EventFiltersComponent: React.FC<EventFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<EventFilters>({
    searchTerm: "",
    category: undefined,
    eventType: undefined,
    startDate: undefined,
    endDate: undefined,
  });
  
  const [date, setDate] = useState<Date | undefined>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = {
      ...filters,
      searchTerm: e.target.value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (value: string) => {
    const newFilters = {
      ...filters,
      category: value as EventCategory,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleEventTypeChange = (value: string) => {
    const newFilters = {
      ...filters,
      eventType: value as EventType,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      const newFilters = {
        ...filters,
        startDate: date,
      };
      setFilters(newFilters);
      onFilterChange(newFilters);
    }
  };

  const handleReset = () => {
    setFilters({
      searchTerm: "",
      category: undefined,
      eventType: undefined,
      startDate: undefined,
      endDate: undefined,
    });
    setDate(undefined);
    onFilterChange({});
  };

  return (
    <div className="bg-card p-4 rounded-lg border mb-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events..."
              className="pl-8"
              value={filters.searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <Select
            value={filters.category}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={EventCategory.ACADEMIC}>Academic</SelectItem>
              <SelectItem value={EventCategory.CULTURAL}>Cultural</SelectItem>
              <SelectItem value={EventCategory.SPORTS}>Sports</SelectItem>
              <SelectItem value={EventCategory.SOCIAL}>Social</SelectItem>
              <SelectItem value={EventCategory.CAREER}>Career</SelectItem>
            </SelectContent>
          </Select>
          
          <Select
            value={filters.eventType}
            onValueChange={handleEventTypeChange}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={EventType.FREE}>Free</SelectItem>
              <SelectItem value={EventType.PAID}>Paid</SelectItem>
            </SelectContent>
          </Select>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full sm:w-[200px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleReset}
            className="flex items-center gap-1"
          >
            <Filter className="h-4 w-4" />
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventFiltersComponent;
