'use client'

import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowUp } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { getProjectTechnologies } from "@/app/utils/get-project-technologies";
import { getProjectCopy } from "@/app/utils/get-project-copy";
import { useLanguage } from "@/app/i18n/language-provider";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage();
  const projectTechnologies = getProjectTechnologies(project);
  const projectCopy = getProjectCopy(project, language);

  return (
    <a
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-[1.45rem] bg-slate-950/45 p-2 shadow-[0_18px_62px_rgba(2,6,23,0.36),inset_0_0_0_1px_rgba(167,139,250,0.16)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_76px_rgba(124,58,237,0.16),inset_0_0_0_1px_rgba(167,139,250,0.34)]"
    >
      <article>
        <div className="relative min-h-[300px] overflow-hidden rounded-[1.15rem] bg-slate-900 sm:aspect-[16/9] sm:min-h-0">
          <Image
            width={900}
            height={560}
            src={project.thumbnail.url}
            alt={`${t.projects.thumbnailAlt} ${projectCopy.title}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/34 to-slate-950/10" />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-slate-950/62 p-4 shadow-[0_18px_44px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(226,232,240,0.08)] backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium leading-tight text-gray-50 sm:text-xl">
                  {projectCopy.title}
                </h3>

                <p className="mt-2 line-clamp-2 max-w-[360px] text-xs leading-relaxed text-gray-300 sm:text-sm">
                  {projectCopy.shortDescription}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {projectTechnologies.map((tech) => (
                    <TechBadge key={`${project.slug}-${tech}`} name={tech} />
                  ))}
                </div>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900/85 text-lg text-gray-300 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.14)] transition-colors group-hover:text-violet-200">
                <HiArrowNarrowUp className="rotate-45" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
};
