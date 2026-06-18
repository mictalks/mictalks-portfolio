import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/link";

export const ProjectCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="w-full lg:w-[420px] shrink-0">
        <Image
          width={420}
          height={304}
          src="https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg"
          alt="Thumbnail do projeto BookWise"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center gap-2 font-medium text-xl text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          BookWise
        </h3>

        <p className="text-gray-400 mt-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
          eaque vel nam iure delectus ut quaerat harum ea aliquid vero
          voluptates aliquam suscipit, natus dolorem cumque quos dolor dicta
          cum!
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};