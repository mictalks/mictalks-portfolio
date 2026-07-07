import { ProjectCard } from "./project-card";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section id="selected-work" className="container py-16 sm:py-24">
      <div className="mx-auto mb-10 flex max-w-[900px] flex-col items-center gap-4 py-7 text-center shadow-[inset_0_1px_0_rgba(148,163,184,0.08),inset_0_-1px_0_rgba(148,163,184,0.08)]">
        <div>
          <span className="font-mono text-sm text-cyan-300">../selected-work</span>
          <h2 className="mt-3 max-w-[620px] text-2xl font-medium leading-tight text-gray-50 sm:text-3xl">
            Projetos com presença, contexto e acabamento.
          </h2>
        </div>

        <p className="max-w-[520px] text-sm leading-relaxed text-gray-400">
          Uma seleção de aplicações desenvolvidas com foco em experiência, organização visual e tecnologia front-end moderna.
        </p>
      </div>

      <div className="mx-auto flex max-w-[980px] flex-col gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index + 1} />
        ))}

        <p className="mt-4 flex items-center gap-1.5">
          <span className="text-gray-400">Quer ver mais?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowCircleRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
