import { FlipWords } from "@/components/ui/flip-words";
import React from "react";


export function FlipWordsDemo() {
  const words = ["Full Stack", "Front-end", "Back-end"];

  return (
    <div className="text-2xl md:text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-2">
        <FlipWords words={words} /> Developer
    </div   >
  );
}
