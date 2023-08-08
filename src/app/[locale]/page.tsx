import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { HomeSection } from "@/components/sections/HomeSection/HomeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection/SkillsSection";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:px-20 xl:px-32 text-white gap-2 z-0">
      <div
        id="home"
        className="h-screen w-full p-12 flex flex-col justify-center items-center flex-wrap"
      >
        <HomeSection />
      </div>

      <div
        id="projects"
        className="h-screen w-full p-12 justify-center flex items-center"
      >
        <ProjectsSection />
      </div>

      <div
        id="skills"
        className="h-screen w-full p-12 flex flex-col justify-center items-center flex-wrap"
      >
        <SkillsSection />
      </div>

      <div
        id="contact"
        className="h-screen w-full p-12 flex flex-col justify-center items-center flex-wrap"
      >
        <ContactSection />
      </div>
    </main>
  );
}
