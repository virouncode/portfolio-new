import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselStudioNouvel = () => {
  const t = useTranslations("Projets.studioNouvel");
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-[500px] sm:h-auto sm:px-12"
    >
      <CarouselContent className="h-[500px] sm:h-auto">
        <CarouselItemPresentation
          logoUrl="/img/logos/studioNouvelLogo.png"
          logoAlt="Studio Nouvel Logo"
          siteUrl="https://www.studionouvel.com"
          description={t("site-vitrine-bilingue-pour-un-collectif-musical")}
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                <strong>Studio Nouvel</strong> {t("est-une-equipe-de")}{" "}
                <strong>
                  {t("compositeurs-musiciens-et-ingenieurs-du-son")}
                </strong>{" "}
                {t(
                  "specialises-dans-la-musique-a-limage-et-les-realisations-dalbums"
                )}
              </p>
              <p className="leading-relaxed">
                {t("le-site-met-en-valeur-leur")}{" "}
                <strong>{t("univers-artistique-et-leur-expertise")}</strong>{" "}
                {t(
                  "a-travers-une-interface-elegante-bilingue-fr-en-et-optimisee-pour-le-referencement"
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                {t("objectifs-du-projet")}
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  {t(
                    "presenter-lidentite-de-lequipe-et-ses-services-de-maniere-claire-et-immersive"
                  )}
                </li>
                <li className="list-disc list-outside">
                  {t("offrir-une")} <strong>{t("navigation-fluide")}</strong>{" "}
                  {t("en-francais-et-en-anglais")}
                </li>
                <li className="list-disc list-outside">
                  {t("garantir-une-excellente")}{" "}
                  <strong>{t("experience-utilisateur")}</strong>{" "}
                  {t("sur-mobile-et-desktop")}
                </li>
                <li className="list-disc list-outside">
                  {t("optimiser-le")}{" "}
                  <strong>{t("referencement-naturel")}</strong>{" "}
                  {t("seo-bilingue")}
                </li>
              </ul>
            </div>

            <div className="bg-white/70 p-3 rounded-lg">
              <p className="font-bold text-[color:var(--blue)] mb-2">
                {t("stack-technique")}
              </p>
              <div className="ml-2 space-y-1">
                <p>
                  <strong>{t("frontend")}</strong>{" "}
                  {t("react-next-js-typescript")}
                </p>
                <p>
                  <strong>{t("ui")}</strong> Shadcn/UI
                </p>
                <p>
                  <strong>{t("internationalisation")}</strong> next-intl
                </p>
                <p>
                  <strong>{t("design")}</strong>{" "}
                  {t("responsive-and-oriente-ux-ui")}
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/studioNouvelLogo.png"
          logoAlt="Studio Nouvel Logo"
          videoUrl="https://www.youtube.com/embed/0sEmqMhTMhg?rel=0"
          siteUrl="https://www.studionouvel.com"
          description={t("presentation-du-site-vitrine")}
          videoTitle={t("studio-nouvel-site-vitrine")}
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselStudioNouvel;
