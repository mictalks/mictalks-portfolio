import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <article className="group grid overflow-hidden rounded-2xl bg-slate-900/70 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] transition-all hover:bg-slate-900 hover:shadow-[inset_0_0_0_1px_rgba(167,139,250,0.24),0_24px_80px_rgba(15,23,42,0.35)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[200px] overflow-hidden sm:min-h-[240px] md:min-h-[300px]">
        <Image
          width={720}
          height={480}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 font-mono text-xs text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.16)] backdrop-blur">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet-300">
            Featured Project
          </span>
          <h3 className="mt-3 text-xl font-medium leading-tight text-gray-50 sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-gray-400">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <div className="mb-6 mt-6 flex flex-wrap gap-x-2 gap-y-3">
            {project.technologies.map((tech) => (
              <TechBadge key={`${project.slug}-${tech.name}`} name={tech.name} />
            ))}
          </div>

          <Link href={`/projects/${project.slug}`} className="text-sm sm:text-base">
            Ver estudo do projeto
            <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
};
