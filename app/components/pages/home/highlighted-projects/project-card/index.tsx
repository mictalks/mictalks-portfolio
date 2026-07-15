import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowUp } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-[1.7rem] bg-slate-950/55 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(167,139,250,0.16)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(124,58,237,0.18),inset_0_0_0_1px_rgba(167,139,250,0.34)]"
    >
      <article>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-slate-900">
          <Image
            width={900}
            height={560}
            src={project.thumbnail.url}
            alt={`Thumbnail do projeto ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 font-mono text-xs text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.16)] backdrop-blur">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <div className="grid gap-5 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium leading-tight text-gray-50 sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-gray-400">
                {project.shortDescription}
              </p>
            </div>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900/80 text-lg text-gray-300 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-colors group-hover:text-violet-200">
              <HiArrowNarrowUp className="rotate-45" />
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={`${project.slug}-${tech.name}`} name={tech.name} />
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};
