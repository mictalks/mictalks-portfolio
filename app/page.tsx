import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { AboutSection } from "./components/pages/home/about-section";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: { slug: "home" }) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
               highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24 hours)
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData();


  return (
    <>
      <HeroSection homeInfo={pageData} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <KnownTechs techs={pageData.knownTechs} />
      <AboutSection homeInfo={pageData} />
      <WorkExperience />
    </>
  );
}
