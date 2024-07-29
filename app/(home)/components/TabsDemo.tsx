"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "StudyPace",
      value: "StudyPace",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-300]">
          <p>StudyPace</p>
          <ImageContainer src="/StudypaceUI.png" href="" />
        </div>
      ),
    },
    {
      title: "QuickPin",
      value: "QuickPin",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-300">
          <p>QuickPin</p>
          <ImageContainer2
            src="/QuickPinUI.png"
            href="https://github.com/IbrahimD0/QuickPin"
          />
        </div>
      ),
    },
    {
      title: "ResumeAI",
      value: "ResumeAI",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-300">
          <p>ResumeAI</p>
          <ImageContainer src="/ResumeAIUI.png" href="https://github.com/Kardee12/ResumeAI" />
        </div>
      ),
    },
    {
      title: "Coursebrief",
      value: "Coursebrief",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-300">
          <p>Coursebrief</p>
          <ImageContainer
            src="/CourseBriefUI.png"
            href="https://github.com/TimothyPhan2/CS157A-CourseBrief"
          />
        </div>
      ),
    },
    {
      title: "Fitlog",
      value: "Fitlog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-300">
          <p>Fitlog</p>
          <ImageContainer
            src=""
            href="https://github-user-search-app-one-pi.vercel.app/"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px]  relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Best Project</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
      />
    </Link>
  );
}
function ImageContainer2({ src, href }: { src: string; href: string }) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="dummy image"
        width={400}
        height={400}
        className="mx-auto rounded-lg "
      />
    </Link>
  );
}
