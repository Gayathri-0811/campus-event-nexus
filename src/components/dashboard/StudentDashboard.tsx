
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip, Legend } from "recharts";
import { BookOpen, Calendar, CheckCircle2, CheckSquare, Clock, Trophy, Users } from "lucide-react";

const attendanceData = [
  { name: "Week 1", attendance: 100 },
  { name: "Week 2", attendance: 95 },
  { name: "Week 3", attendance: 90 },
  { name: "Week 4", attendance: 85 },
  { name: "Week 5", attendance: 92 },
  { name: "Week 6", attendance: 88 },
  { name: "Week 7", attendance: 94 },
  { name: "Week 8", attendance: 89 },
];

const gradeData = [
  { name: "Math", grade: 85 },
  { name: "Science", grade: 92 },
  { name: "History", grade: 78 },
  { name: "Literature", grade: 88 },
  { name: "Art", grade: 95 },
  { name: "Music", grade: 90 },
];

const activityData = [
  { name: "Mon", events: 2, tasks: 5 },
  { name: "Tue", events: 3, tasks: 4 },
  { name: "Wed", events: 1, tasks: 6 },
  { name: "Thu", events: 4, tasks: 2 },
  { name: "Fri", events: 2, tasks: 3 },
  { name: "Sat", events: 0, tasks: 1 },
  { name: "Sun", events: 0, tasks: 0 },
];

const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">12 upcoming</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Academic Points</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">+120 this week</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <Progress value={92} className="h-2 mt-1" />
          </CardContent>
        </Card>
        <Card className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15/20</div>
            <Progress value={75} className="h-2 mt-1" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" /> 
              Attendance Trend
            </CardTitle>
            <CardDescription>Your weekly attendance percentage</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={attendanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2" /> 
              Academic Performance
            </CardTitle>
            <CardDescription>Current grades by subject</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={gradeData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="grade" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-primary/20 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" /> 
            Weekly Activity
          </CardTitle>
          <CardDescription>Events attended and tasks completed</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ChartContainer
            config={{
              events: {
                label: "Events",
                color: "#8B5CF6",
              },
              tasks: {
                label: "Tasks",
                color: "#10B981",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={activityData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                  content={
                    <ChartTooltipContent className="bg-white dark:bg-gray-800" />
                  }
                />
                <Legend />
                <Bar dataKey="events" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="tasks" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
