'use client'

import { ProjectCard } from "./project-card";
import { HiSparkles } from "react-icons/hi2";
import { Project } from "@/app/types/projects";
import { useLanguage } from "@/app/i18n/language-provider";

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  const { t } = useLanguage();

  return (
    <section id="selected-work" className="container -mt-8 pb-10 pt-0 sm:-mt-10 sm:pb-12">
      <div className="mx-auto mb-6 flex max-w-[1040px] items-center gap-5">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]" />
          {t.projects.eyebrow}
        </span>
      </div>

      <div className="mx-auto grid max-w-[1040px] gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        <article className="relative min-h-[300px] overflow-hidden rounded-[1.45rem] bg-slate-950/45 p-6 shadow-[0_18px_62px_rgba(2,6,23,0.32),inset_0_0_0_1px_rgba(103,232,249,0.12)] sm:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_76%_72%,rgba(167,139,250,0.16),transparent_34%)]" />
          <div className="relative flex h-full min-h-[252px] flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-200 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.16)]">
                <HiSparkles />
              </div>

              <span className="mt-7 inline-flex rounded-full bg-slate-900/80 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
                {t.projects.constructionTag}
              </span>

              <h3 className="mt-4 max-w-[420px] text-xl font-medium leading-tight text-gray-50 sm:text-2xl">
                {t.projects.constructionTitle}
              </h3>

              <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-gray-400">
                {t.projects.constructionDescription}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
