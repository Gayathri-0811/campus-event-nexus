
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import EventCalendar from "@/components/calendar/EventCalendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import Leaderboard from "@/components/gamification/Leaderboard";
import { CalendarDays, BarChart2, Trophy } from "lucide-react";

const CalendarPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("calendar");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["calendar", "dashboard", "leaderboard"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  return (
    <Layout>
      <div className="container mx-auto py-6 px-4 flex flex-col h-full bg-gradient-to-b from-background to-accent/5">
        <div className="mb-6 bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 shadow-sm">
          <h1 className="text-3xl font-bold mb-1 text-primary">Your Academic Journey</h1>
          <p className="text-muted-foreground">
            Plan your schedule, track your progress, and compete with peers
          </p>
        </div>
        
        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange} 
          className="w-full flex-1 flex flex-col"
        >
          <TabsList className="grid w-full grid-cols-3 mb-4 shadow-sm">
            <TabsTrigger value="calendar" className="flex items-center gap-2 py-3">
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Event Calendar</span>
              <span className="sm:hidden">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2 py-3">
              <BarChart2 className="h-4 w-4" />
              <span className="hidden sm:inline">Student Dashboard</span>
              <span className="sm:hidden">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2 py-3">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Achievement Board</span>
              <span className="sm:hidden">Achievements</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-white rounded-lg shadow-sm border border-border/50 flex-1 overflow-hidden">
            <TabsContent value="calendar" className="m-0 p-4 h-full">
              <EventCalendar />
            </TabsContent>
            
            <TabsContent value="dashboard" className="m-0 p-4 h-full">
              <StudentDashboard />
            </TabsContent>
            
            <TabsContent value="leaderboard" className="m-0 p-4 h-full overflow-y-auto">
              <Leaderboard />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CalendarPage;
