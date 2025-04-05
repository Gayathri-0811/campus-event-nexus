
import React from "react";
import Layout from "@/components/layout/Layout";
import EventCalendar from "@/components/calendar/EventCalendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import Leaderboard from "@/components/gamification/Leaderboard";
import { CalendarDays, BarChart2, Trophy } from "lucide-react";

const CalendarPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary">Your Academic Journey</h1>
          <p className="text-muted-foreground">
            Plan your schedule, track your progress, and compete with peers
          </p>
        </div>
        
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Event Calendar</span>
              <span className="sm:hidden">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              <span className="hidden sm:inline">Student Dashboard</span>
              <span className="sm:hidden">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Achievement Board</span>
              <span className="sm:hidden">Achievements</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="calendar">
            <EventCalendar />
          </TabsContent>
          
          <TabsContent value="dashboard">
            <StudentDashboard />
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <Leaderboard />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CalendarPage;
