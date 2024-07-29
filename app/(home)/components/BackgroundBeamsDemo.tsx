"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export function BackgroundBeamsDemo() {
  

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Looking to work together? Send me an email and let's get started.
        </p>
        <button
         
          className="mt-4 p-2.5 bg-teal-500 text-white rounded-lg w-full hover:cursor-pointer  hover:bg-teal-600"
        >
          Send Message
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
