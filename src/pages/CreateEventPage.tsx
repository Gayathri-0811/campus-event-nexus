
import React from "react";
import Layout from "@/components/layout/Layout";
import CreateEventForm from "@/components/events/CreateEventForm";

const CreateEventPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
          <p className="text-muted-foreground">
            Fill out the form below to create and publish your event
          </p>
        </div>
        
        <CreateEventForm />
      </div>
    </Layout>
  );
};

export default CreateEventPage;
