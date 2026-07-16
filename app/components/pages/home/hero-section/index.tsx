'use client'

import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { HomePageInfo } from "@/app/types/page-info";
import { CMSIcon } from "@/app/components/cms-icon";
import { useLanguage } from "@/app/i18n/language-provider";
import { getProjectCopy } from "@/app/utils/get-project-copy";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const { language, t } = useLanguage();
  const featuredProjects = homeInfo.highlightProjects?.slice(0, 2) ?? [];
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  return (
    <section id="home" className="relative flex min-h-[88vh] w-full items-center overflow-hidden px-0 pb-16 pt-28 sm:pb-20 lg:min-h-[92vh] lg:pb-8 lg:pt-32">
      <div className="container">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="hero-reveal w-full text-center lg:text-left">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-2 text-xs text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.16),0_12px_36px_rgba(15,23,42,0.32)] backdrop-blur lg:mx-0">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              {t.hero.badge}
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-violet-200 sm:tracking-[0.28em]">
              {t.hero.intro}{" "}
              <span className="relative inline-block text-cyan-100">
                Milena Coyado
              </span>
            </p>

            <h1 className="mx-auto mt-4 max-w-[650px] text-[clamp(2.35rem,10vw,3.7rem)] font-semibold leading-[1.03] tracking-normal text-gray-50 lg:mx-0 lg:text-[clamp(2.55rem,4.6vw,3.7rem)]">
              {language === 'en' ? (
                <span className="hero-en-headline" aria-hidden="true">
                  <span>{t.hero.headlinePrefix}</span>
                  <span className="hero-word-rotator hero-adjective-rotator">
                    {t.hero.words.map((word, index) => (
                      <span
                        key={`${language}-${word}-${index}`}
                        style={{ animationDelay: `${index * 2.35}s` }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                  <span>experiences.</span>
                </span>
              ) : (
                <>
                  <span className="block">{t.hero.headlinePrefix}</span>
                  <span className="hero-word-rotator" aria-hidden="true">
                  {t.hero.words.map((word, index) => {
                    return (
                      <span
                        key={`${language}-${word}-${index}`}
                        style={{ animationDelay: `${index * 2.35}s` }}
                      >
                        {word}
                      </span>
                    )
                  })}
                  </span>
                </>
              )}
              <span className="sr-only">{t.hero.srWords}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[540px] text-sm leading-relaxed text-gray-300 sm:text-base lg:mx-0">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#selected-work"
                className="inline-flex h-11 w-[148px] items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-3 text-sm text-gray-50 shadow-button transition-all hover:-translate-y-0.5 hover:bg-violet-400"
              >
                <span className="flex items-center gap-2">
                  {t.hero.viewProjects}
                  <HiArrowNarrowRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex h-11 w-[148px] items-center justify-center whitespace-nowrap rounded-full bg-slate-950/50 px-3 text-sm text-gray-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-all hover:-translate-y-0.5 hover:bg-slate-900/80 hover:text-cyan-100"
              >
                {t.hero.contact}
              </a>
            </div>
          </div>

          <div className="hero-reveal delay-150 relative mx-auto min-h-[500px] w-full max-w-[560px] lg:min-h-[580px]">
            <div className="absolute left-1/2 top-4 w-[84%] -translate-x-1/2 rounded-[2rem] bg-slate-950/68 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.55),inset_0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-cyan-200">{t.hero.codeFile}</span>
                <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[0.68rem] text-violet-100">{t.hero.codeRole}</span>
              </div>

              <div className="mt-5 space-y-3 font-mono text-xs leading-relaxed text-gray-300 sm:text-sm">
                {t.hero.codeLines.map(([keyword, rest], index) => (
                  <p key={keyword}>
                    <span className={index === 1 ? "text-cyan-300" : "text-violet-300"}>
                      {keyword}
                    </span>{" "}
                    {rest}
                  </p>
                ))}
              </div>
            </div>

            {featuredProjects.map((project, index) => {
              const projectCopy = getProjectCopy(project, language);

              return (
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
                      alt={`${t.hero.projectImageAlt} ${projectCopy.title}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="px-2 py-3">
                    <h2 className="text-sm font-medium leading-tight text-gray-50 sm:text-base">
                      {projectCopy.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-400">
                      {projectCopy.shortDescription}
                    </p>
                  </div>
                </a>
              )
            })}

            <div className="hero-float animation-delay-1000 absolute right-5 top-32 hidden max-w-[210px] -rotate-6 rounded-3xl bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.48),inset_0_0_0_1px_rgba(103,232,249,0.12)] backdrop-blur sm:block">
              <p className="font-mono text-xs leading-relaxed text-cyan-100">
                {t.hero.floatingNote}
              </p>
            </div>

            <div className="absolute bottom-8 right-0 hidden items-center gap-3 text-xl text-gray-500 xl:flex">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`hero-social-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                  aria-label={`${t.hero.socialAria} ${index + 1}`}
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}

              <a
                href={contactEmail ? `mailto:${contactEmail}` : "#contact"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-white"
                aria-label={t.hero.emailAria}
              >
                <HiOutlineMail />
              </a>

              <a
                href={instagramUrl || "#contact"}
                target={instagramUrl ? "_blank" : undefined}
                rel={instagramUrl ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                aria-label={t.hero.instagramAria}
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
