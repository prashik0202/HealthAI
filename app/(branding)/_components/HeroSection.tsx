import React from "react";
import FadeInWrapper from "@/components/global/FadeInWrapper";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center w-full gap-4">
      {/* Title */}
      <FadeInWrapper duration={0.7}>
        <h1 className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent text-6xl md:text-7x lg:text-8xl text-center  font-light">
          ✨HealthAI
        </h1>
      </FadeInWrapper>
      {/* Subtitle */}
      <FadeInWrapper duration={0.8}>
        <h1 className='text-5xl md:text-6xl lg"text-7xl text-center font-light'>
          Your personal AI Health Expert
        </h1>
      </FadeInWrapper>
      {/* Paragpaph */}
      <FadeInWrapper duration={0.9}>
        <p className="text-sm md:text-base text-muted-foreground text-center font-light">
          With help of AI you can analyse your health and get AI powered diet
          plan and exercise,
        </p>
      </FadeInWrapper>
      {/* start button */}
      <FadeInWrapper duration={1}>
        <Button
          variant={"default"}
          size={"lg"}
          className="font-semibold uppercase"
        >
          Get Started <ExternalLinkIcon />
        </Button>
      </FadeInWrapper>
    </div>
  );
};

export default HeroSection;
