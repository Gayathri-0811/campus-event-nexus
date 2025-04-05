
import React from "react";
import Layout from "@/components/layout/Layout";
import EventCalendar from "@/components/calendar/EventCalendar";
import { CalendarDays } from "lucide-react";

const CalendarPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4 min-h-[calc(100vh-4rem)]">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <CalendarDays className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary">Event Calendar</h1>
              <p className="text-muted-foreground max-w-2xl">
                Plan your schedule and discover exciting events happening across campus
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="bg-white ring-1 ring-black/5 rounded-xl shadow-xl overflow-hidden animate-fade-in">
          <div className="p-6">
            <EventCalendar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
