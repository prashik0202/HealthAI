import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FadeInWrapper from "@/components/global/FadeInWrapper";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CardContentDetails } from "@/contants";

const CardSection = () => {
  return (
    <div className="mt-36 bg-inherit p-4 md:p-20 md:mt-52 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5 w-full rounded-md">
      <div className="p-4">
        <FadeInWrapper duration={1}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl">HealthAI <br /> got you covered</h1>
        </FadeInWrapper>
      </div>
      {CardContentDetails.map((item) => (
        <FadeInWrapper key={item.content} duration={1}>
          <Card className="w-full h-fit min-h-[300px] bg-card shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl">{item.header}</CardTitle>
              <CardDescription className="text-md">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              {item.content}
            </CardContent>
            <CardFooter className="w-full">
              <Button
                variant={"default"}
                size={"sm"}
                className="border-accent-foreground"
              >
                {item.footer}
                <ExternalLink />
              </Button>
            </CardFooter>
          </Card>
        </FadeInWrapper>
      ))}
    </div>
  );
};

export default CardSection;
