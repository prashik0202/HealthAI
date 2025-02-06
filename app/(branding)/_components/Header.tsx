import { ThemeToggle } from "@/components/global/ThemeToggle";
import { Button } from "@/components/ui/button";
import { HeartPulse } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="py-4 px-10 w-full flex flex-row items-center gap-5 justify-between border-b md:border-none ">
      {/* logo and name */}
      <h1 className="text-2xl flex items-center gap-2">
        <HeartPulse />
        HealthAI
      </h1>
      {/* theme toggle and signup */}
      <div className="hidden md:block  space-x-5">
        <Button variant={"outline"} className="shadow-xl">
          <Image
            src={"/icons/google.png"}
            alt="google"
            height={20}
            width={20}
          />
          Sign In with Google
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
