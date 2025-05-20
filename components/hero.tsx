import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-6 py-16">
      <div className="text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Student Energy OAU
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Join a passionate community of changemakers driving sustainability and
          energy innovation at OAU. Empower yourself, build your network, and
          make a real impact.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDyghan6zmO1nxUy8nSApcLbnZVHz5C5jvzCy1h0LtJJ8jxg/viewform?usp=sf_link"
              target="_blank"
            >
              Join Our Crew!<ArrowUpRight className="!h-5 !w-5 -ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto aspect-video bg-accent rounded-xl" />
    </div>
  );
};

export default Hero;