import FadeInWrapper from "@/components/global/FadeInWrapper";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 md:mt-52 h-[100px] flex flex-col items-center justify-center gap-10 p-10 md:p-20 lg:p-32">
      <FadeInWrapper duration={0.7}>
        <div>
          <h1 className="text-4xl">✨HealthAI</h1>
          <h1 className="text-lg mt-5 text-center">Made with 💖</h1>
        </div>
      </FadeInWrapper>
    </footer>
  );
};

export default Footer;
