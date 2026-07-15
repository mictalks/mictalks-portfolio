import Image from "next/image";
import { HiBriefcase, HiCode, HiGlobeAlt, HiLocationMarker, HiMail } from "react-icons/hi";
import { HomePageInfo } from "@/app/types/page-info";
import { SectionTitle } from "@/app/components/section-title";

type AboutSectionProps = {
  homeInfo: HomePageInfo;
};

export const AboutSection = ({ homeInfo }: AboutSectionProps) => {
  return (
    <section id="about" className="container pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div className="mx-auto max-w-[1080px]">
        <SectionTitle
          subtitle="sobre"
          title=""
          className="[&>h3]:hidden"
        />

        <div className="mt-6 grid gap-8 rounded-[1.8rem] bg-slate-950/55 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(148,163,184,0.09)] md:grid-cols-[1.05fr_0.95fr] md:items-center lg:p-8">
          <div>
            <h3 className="max-w-[520px] text-2xl font-medium leading-tight text-gray-50 sm:text-3xl">
              Desenvolvedora apaixonada por resolver problemas.
            </h3>

            <div className="mt-6 grid gap-4 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <HiCode />
                </span>
                Desenvolvimento de interfaces responsivas, integrações com APIs e experiências completas do início ao deploy.
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                  <HiGlobeAlt />
                </span>
                Evolução constante para atuar no produto inteiro, conectando front-end, dados, performance e experiência do usuário.
              </p>
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl bg-slate-900/55 p-5 text-center shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <HiLocationMarker />
                </span>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Localização</p>
                  <p className="text-sm text-gray-100">Brasil</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <HiBriefcase />
                </span>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Atuação</p>
                  <p className="text-sm text-gray-100">Full Stack Developer</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <HiMail />
                </span>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Disponível</p>
                  <p className="text-sm text-gray-100">Para contato</p>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="w-full max-w-[320px] overflow-hidden rounded-[1.6rem] bg-violet-500/10 p-2 shadow-[inset_0_0_0_1px_rgba(167,139,250,0.16)]">
              <Image
                className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
                width={520}
                height={650}
                src={homeInfo.profilePicture.url}
                alt="Foto de Milena Coyado"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
