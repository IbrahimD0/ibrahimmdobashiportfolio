import { LampDemo } from "@/components/ui/lamp";
import { BackgroundBeamsDemo } from "./(home)/components/BackgroundBeamsDemo";
import { BentoGridDemo } from "./(home)/components/BentoGridDemo";
import { SpotlightPreview } from "./(home)/components/SpotlightPreview";
import { TabsDemo } from "./(home)/components/TabsDemo";


export default function Home() {
  return (
    <div>
      <LampDemo />
      
      <TabsDemo />
     
      <BackgroundBeamsDemo />
    </div>
  );
}