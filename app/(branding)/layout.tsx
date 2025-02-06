import React from "react";
import Header from "./_components/Header";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh bg-background">
      {/* Header */}
      <Header />
      <main className="flex flex-col gap-5 items-center justify-center p-5 md:p-16 lg:p-32">
        {children}
      </main>
    </div>
  );
};

export default HomePageLayout;
