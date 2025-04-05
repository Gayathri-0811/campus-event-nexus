
import React from "react";
import Layout from "@/components/layout/Layout";
import StudentDashboard from "@/components/dashboard/StudentDashboard";

const StudentDashboardPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4 flex flex-col h-full bg-gradient-to-b from-background to-accent/5">
        <div className="mb-6 bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 shadow-sm">
          <h1 className="text-3xl font-bold mb-1 text-primary">Student Dashboard</h1>
          <p className="text-muted-foreground">
            Track your academic progress and performance
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-border/50 flex-1 p-4 overflow-hidden">
          <StudentDashboard />
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboardPage;
