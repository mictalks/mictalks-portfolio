import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { ProjectCard } from "./components/pages/home/highlighted-projects/project-card";
import { KnownTechs } from "./components/pages/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";


export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
