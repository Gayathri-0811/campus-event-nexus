
import React from "react";
import Layout from "@/components/layout/Layout";
import EventCalendar from "@/components/calendar/EventCalendar";

const CalendarPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Event Calendar</h1>
          <p className="text-muted-foreground">
            Plan your schedule with our comprehensive calendar view
          </p>
        </div>
        
        <EventCalendar />
      </div>
    </Layout>
  );
};

export default CalendarPage;
