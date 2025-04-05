
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import CategorySection from "@/components/home/CategorySection";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedEvents />
      <CategorySection />
      <StatsSection />
    </Layout>
  );
};

export default Index;
