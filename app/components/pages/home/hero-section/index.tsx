import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { HomePageInfo } from "@/app/types/page-info";
import { CMSIcon } from "@/app/components/cms-icon";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

const experienceWords = [
  "intuitivas.",
  "data driven.",
  "escaláveis.",
  "acessíveis.",
  "memoráveis.",
  "do front ao back.",
];

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const featuredProjects = homeInfo.highlightProjects?.slice(0, 2) ?? [];
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  return (
    <section id="home" className="relative flex min-h-[88vh] w-full items-center overflow-hidden px-0 pb-6 pt-28 lg:min-h-[92vh] lg:pb-8 lg:pt-32">
      <div className="container">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="hero-reveal w-full text-center lg:text-left">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-2 text-xs text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.16),0_12px_36px_rgba(15,23,42,0.32)] backdrop-blur lg:mx-0">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Full Stack Developer
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-violet-200 sm:tracking-[0.28em]">
              Olá, eu sou a{" "}
              <span className="relative inline-block text-cyan-100">
                Milena Coyado
                <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-cyan-300 to-violet-300" />
              </span>
            </p>

            <h1 className="mt-4 max-w-[650px] text-[clamp(2.55rem,4.6vw,3.7rem)] font-semibold leading-[1.03] tracking-normal text-gray-50">
              <span className="block">Construo experiências</span>
              <span className="hero-word-rotator" aria-hidden="true">
                {experienceWords.map((word, index) => (
                  <span
                    key={word}
                    style={{ animationDelay: `${index * 2.35}s` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <span className="sr-only">
                intuitivas, data driven, escaláveis, acessíveis, memoráveis e do front ao back.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[540px] text-sm leading-relaxed text-gray-300 sm:text-base lg:mx-0">
              Da interface ao back-end, desenvolvo produtos digitais modernos com foco em performance, qualidade de código e experiências que realmente funcionam.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#selected-work"
                className="rounded-full bg-violet-500 px-5 py-3 text-sm text-gray-50 shadow-button transition-all hover:-translate-y-0.5 hover:bg-violet-400"
              >
                <span className="flex items-center gap-2">
                  Ver projetos
                  <HiArrowNarrowRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full bg-slate-950/50 px-5 py-3 text-sm text-gray-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-all hover:-translate-y-0.5 hover:bg-slate-900/80 hover:text-cyan-100"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="hero-reveal delay-150 relative mx-auto min-h-[500px] w-full max-w-[560px] lg:min-h-[580px]">
            <div className="absolute left-1/2 top-4 w-[84%] -translate-x-1/2 rounded-[2rem] bg-slate-950/68 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.55),inset_0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-cyan-200">stack-flow.tsx</span>
                <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[0.68rem] text-violet-100">Full Stack</span>
              </div>

              <div className="mt-5 space-y-3 font-mono text-xs leading-relaxed text-gray-300 sm:text-sm">
                <p><span className="text-violet-300">const</span> produto = criarExperiencia();</p>
                <p><span className="text-cyan-300">await</span> conectarInterfaceAPI();</p>
                <p><span className="text-violet-300">return</span> deployComQualidade;</p>
              </div>
            </div>

            {featuredProjects.map((project, index) => (
              <a
                href={`/projects/${project.slug}`}
                key={project.slug}
                className={`hero-float group absolute overflow-hidden rounded-[1.7rem] bg-slate-950/70 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.55),inset_0_0_0_1px_rgba(148,163,184,0.09)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(124,58,237,0.2),inset_0_0_0_1px_rgba(167,139,250,0.24)] ${
                  index === 0
                    ? "left-0 top-44 w-[72%]"
                    : "animation-delay-700 bottom-14 right-0 w-[64%]"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] bg-slate-900">
                  <Image
                    width={640}
                    height={400}
                    src={project.thumbnail.url}
                    alt={`Prévia do projeto ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-[0.68rem] text-cyan-100 backdrop-blur">
                    0{index + 1}
                  </span>
                </div>
                <div className="px-2 py-3">
                  <h2 className="text-sm font-medium leading-tight text-gray-50 sm:text-base">
                    {project.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-400">
                    {project.shortDescription}
                  </p>
                </div>
              </a>
            ))}

            <div className="hero-float animation-delay-1000 absolute right-5 top-32 hidden max-w-[210px] -rotate-6 rounded-3xl bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.48),inset_0_0_0_1px_rgba(103,232,249,0.12)] backdrop-blur sm:block">
              <p className="font-mono text-xs leading-relaxed text-cyan-100">
                UI clara + lógica bem conectada + entrega funcional.
              </p>
            </div>

            <div className="absolute -bottom-8 right-0 flex items-center gap-3 text-xl text-gray-500 sm:bottom-2">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`hero-social-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                  aria-label={`Abrir rede social ${index + 1}`}
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}

              <a
                href={contactEmail ? `mailto:${contactEmail}` : "#contact"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-cyan-200"
                aria-label="Enviar e-mail"
              >
                <HiOutlineMail />
              </a>

              <a
                href={instagramUrl || "#contact"}
                target={instagramUrl ? "_blank" : undefined}
                rel={instagramUrl ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                aria-label="Abrir Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
