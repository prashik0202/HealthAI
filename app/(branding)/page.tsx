import React from "react";
import { Button } from "@/components/ui/button";
import FadeInWrapper from "@/components/global/FadeInWrapper";
import HeroSection from "./_components/HeroSection";
import CardSection from "./_components/CardSection";
import Footer from "./_components/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CardSection />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
