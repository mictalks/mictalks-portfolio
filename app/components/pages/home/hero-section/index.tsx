import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@/app/components/rich-text";
import { CMSIcon } from "@/app/components/cms-icon";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  return (
    <section className="relative flex min-h-[640px] w-full items-center overflow-hidden px-0 pb-10 pt-24 lg:min-h-[720px]">
      <div className="absolute inset-0 z-[-2] bg-hero-image bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(2,6,23,0.76),rgba(2,6,23,0.98)),radial-gradient(circle_at_22%_28%,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(34,211,238,0.08),transparent_22%)]" />

      <div className="container">
        <div className="mx-auto flex max-w-[1080px] flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div className="w-full text-center lg:max-w-[580px] lg:text-left">
            <p className="font-mono text-sm text-cyan-300">Olá, meu nome é</p>

            <h1 className="mt-3 text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-[1] tracking-normal text-gray-50">
              MicTalks
            </h1>

            <div className="mx-auto mt-5 max-w-[620px] text-sm leading-relaxed text-gray-300 sm:text-base lg:mx-0 lg:text-lg">
              <RichText content={homeInfo.introduction.raw} />
            </div>

            <div className="mx-auto mt-7 flex max-w-[560px] flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
              {homeInfo.technologies.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} />
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#selected-work"
                className="rounded-full bg-violet-500 px-5 py-3 text-sm text-gray-50 shadow-button transition-all hover:bg-violet-400"
              >
                <span className="flex items-center gap-2">
                  Ver projetos
                  <HiArrowNarrowRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full bg-slate-950/50 px-5 py-3 text-sm text-gray-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-colors hover:bg-slate-900/80 hover:text-cyan-100"
              >
                Entrar em contato
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 text-xl text-gray-500 lg:justify-start">
              <span className="h-px w-8 bg-violet-400/20" />
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-200 transition-colors"
                  aria-label={`Abrir rede social ${index + 1}`}
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[260px] sm:max-w-[310px] lg:max-w-[340px]">
            <div className="absolute -inset-3 rounded-2xl bg-violet-500/10 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl bg-slate-900/70 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.55),inset_0_0_0_1px_rgba(148,163,184,0.10)]">
              <Image
                className="aspect-[4/4.4] w-full rounded-xl object-cover"
                width={420}
                height={462}
                src={homeInfo.profilePicture.url}
                alt="Foto de perfil MicTalks"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
