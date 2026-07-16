'use client'

import Image from "next/image";
import { HiBriefcase, HiCode, HiGlobeAlt, HiLocationMarker } from "react-icons/hi";
import { HomePageInfo } from "@/app/types/page-info";
import { SectionTitle } from "@/app/components/section-title";
import { useLanguage } from "@/app/i18n/language-provider";

type AboutSectionProps = {
  homeInfo: HomePageInfo;
};

const experienceItems = [
  {
    company: "Cognizant",
    role: {
      pt: "Software Engineer",
      en: "Software Engineer",
    },
    period: {
      pt: "2023 - Agora",
      en: "2023 - Now",
    },
  },
  {
    company: "i9Info Soluções",
    role: {
      pt: "Assist. Comercial de TI",
      en: "IT Commercial Assistant",
    },
    period: {
      pt: "2022 - 2023",
      en: "2022 - 2023",
    },
  },
];

export const AboutSection = ({ homeInfo }: AboutSectionProps) => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="container pb-10 pt-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-[1080px]">
        <SectionTitle
          subtitle={t.about.eyebrow}
          title=""
          className="[&>h3]:hidden"
        />

        <div className="mt-5 grid gap-7 rounded-[1.8rem] bg-slate-950/55 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(148,163,184,0.09)] md:grid-cols-[1.15fr_0.85fr] md:items-center lg:p-7">
          <div>
            <h3 className="max-w-[620px] text-2xl font-medium leading-tight text-gray-50 sm:text-3xl">
              {t.about.title}
            </h3>

            <div className="mt-5 grid max-w-[660px] gap-3 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <HiCode />
                </span>
                {t.about.paragraphs[0]}
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                  <HiGlobeAlt />
                </span>
                {t.about.paragraphs[1]}
              </p>
            </div>

            <div className="mt-6 max-w-[660px]">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-gray-500">
                {t.about.experience}
              </p>

              <div className="mt-3 divide-y divide-slate-800/80">
                {experienceItems.map((item) => (
                  <div
                    key={item.company}
                    className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-start"
                  >
                    <div>
                      <p className="text-base font-medium text-gray-50">
                        {item.company}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.role[language]}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-gray-500 sm:pt-1">
                      {item.period[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="hero-float animation-delay-700 w-full max-w-[300px] -rotate-3 overflow-hidden rounded-[1.5rem] bg-slate-950/72 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.45),inset_0_0_0_1px_rgba(167,139,250,0.16)] transition-all will-change-transform hover:-translate-y-1 hover:-rotate-2 hover:shadow-[0_30px_90px_rgba(124,58,237,0.18),inset_0_0_0_1px_rgba(167,139,250,0.28)]">
              <div className="relative overflow-hidden rounded-[1.2rem] bg-violet-500/10">
                <Image
                  className="aspect-[4/4.65] w-full object-cover"
                  width={520}
                  height={650}
                  src={homeInfo.profilePicture.url}
                  alt={t.about.imageAlt}
                />
                <div className="absolute inset-x-0 bottom-3 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-slate-950/52 px-3 py-2 text-xs font-medium text-white shadow-[0_12px_36px_rgba(2,6,23,0.42)] backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                      <span className="availability-pulse absolute h-full w-full rounded-full bg-emerald-400/70" />
                      <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.72)]" />
                    </span>
                    {t.about.available}
                  </div>
                </div>
              </div>

              <div className="px-2 py-3">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-900/70 p-2.5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">
                      <HiLocationMarker />
                    </span>
                    <div>
                      <p className="text-[0.68rem] text-gray-500">{t.about.locationLabel}</p>
                      <p className="text-xs font-medium text-gray-100">{t.about.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-slate-900/70 p-2.5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                      <HiBriefcase />
                    </span>
                    <div>
                      <p className="text-[0.68rem] text-gray-500">{t.about.roleLabel}</p>
                      <p className="text-xs font-medium text-gray-100">{t.about.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
