import { ProjectCard } from "./project-card";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section id="selected-work" className="container -mt-8 pb-10 pt-0 sm:-mt-10 sm:pb-12">
      <div className="mx-auto mb-8 flex max-w-[1080px] items-center justify-between gap-5">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]" />
          Projetos em destaque
        </span>

        <a href="/projects" className="relative z-10 flex w-max items-center gap-2 rounded-full bg-slate-950/55 px-4 py-3 text-sm text-gray-300 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-colors hover:text-cyan-200">
          Ver todos os projetos
          <HiArrowCircleRight />
        </a>
      </div>

      <div className="mx-auto grid max-w-[1080px] gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index + 1} />
        ))}

        <article className="relative min-h-[420px] overflow-hidden rounded-[1.7rem] bg-slate-950/45 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.34),inset_0_0_0_1px_rgba(103,232,249,0.12)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_76%_72%,rgba(167,139,250,0.16),transparent_34%)]" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-200 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.16)]">
                <HiSparkles />
              </div>

              <span className="mt-8 inline-flex rounded-full bg-slate-900/80 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
                Em construção
              </span>

              <h3 className="mt-4 max-w-[420px] text-2xl font-medium leading-tight text-gray-50">
                Novos projetos estão tomando forma.
              </h3>

              <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-gray-400">
                Estou desenvolvendo novas aplicações com foco em produto, dados e performance.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
