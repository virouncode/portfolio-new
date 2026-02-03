import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale, useTranslations } from "next-intl";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselFm4all = () => {
  const t = useTranslations("Projets.fm4all");
  const locale = useLocale();
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-[500px] sm:h-auto sm:px-12"
    >
      <CarouselContent className="h-[500px] sm:h-auto">
        <CarouselItemPresentation
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl={
            locale === "fr"
              ? "https://www.fm4all.com/fr"
              : "https://www.fm4all.com/en"
          }
          description={t("developpement-full-stack-de-la-plateforme-fm4all")}
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                {t("fm4all-est-une-societe-specialisee-dans-la")}{" "}
                <strong>
                  {t("gestion-externalisee-des-services-aux-pme-tpe")}
                </strong>
                .
              </p>
              <p className="leading-relaxed">
                {t(
                  "sa-plateforme-regroupe-des-prestataires-dans-des-domaines-cles-nettoyage-hygiene-sanitaire-maintenance-securite-incendie-location-de-machines-a-cafe-fontaines-a-eau-etc",
                )}
              </p>
              <p className="leading-relaxed italic">
                {" "}
                {t("la-promesse-1-seul-contact-1-seul-contrat-1-seule-facture")}
              </p>
            </div>
            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                {t("objectifs-and-livrables")}
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  {t("conception-et-developpement-dun")}{" "}
                  <strong>{t("site-vitrine")}</strong> {t("multilingue-fr-en")}
                </li>
                <li className="list-disc list-outside">
                  {t("integration-dun")}{" "}
                  <strong>{t("referencement-seo")}</strong>{" "}
                  {t("adapte-pour-les-deux-langues")}
                </li>
                <li className="list-disc list-outside">
                  {t("developpement-dune")}{" "}
                  <strong>{t("application-de-comparaison-de-services")}</strong>{" "}
                  {t("avec-generation-de")}{" "}
                  <strong>{t("devis-en-ligne")}</strong>
                </li>
                <li className="list-disc list-outside">
                  {t("modelisation-dune")}{" "}
                  <strong>{t("base-de-donnees-relationnelle")}</strong>{" "}
                  {t(
                    "utilisateurs-fournisseurs-services-produits-tarifs-devis-etc",
                  )}
                </li>
                <li className="list-disc list-outside">
                  {t("mise-en-place-de")}{" "}
                  <strong>{t("back-offices-securises")}</strong>{" "}
                  {t(
                    "pour-clients-et-fournisseurs-authentification-gestion-des-contrats-mises-a-jour-des-tarifs-en-temps-reel-etc",
                  )}
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6 mt-2">
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("stack-front-end")}
                </p>
                <p className="ml-2">
                  {t(
                    "react-next-js-15-tailwind-shadcn-ui-react-hook-form-next-intl-zod",
                  )}
                </p>
              </div>
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("stack-back-end")}
                </p>
                <p className="ml-2">
                  {t(
                    "next-js-15-api-routes-and-server-actions-drizzle-orm-better-auth-zod",
                  )}
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemPresentation
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl={
            locale === "fr"
              ? "https://www.fm4all.com/fr"
              : "https://www.fm4all.com/en"
          }
          description={t("technologies-et-architecture")}
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 p-3 rounded-lg">
              <p className="leading-relaxed">
                {t(
                  "la-plateforme-fm4all-a-ete-developpee-avec-une-architecture-moderne-orientee-performance-et-evolutivite",
                )}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("architecture")}
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    {t("application-monolithique-next-js")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("api-routes-et-server-actions")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("base-de-donnees-postgresql")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("authentification-multi-niveaux")}
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("fonctionnalites-cles")}
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    {t("comparateur-de-services")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("generation-de-devis-pdf")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("back-offices-personnalises")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("notifications-en-temps-reel-websockets")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
                <p className="font-bold text-[color:var(--blue)]">
                  {t("deploiement")}
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    {t("hebergement-sur-vercel-front-end-et-api")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("base-de-donnees-sur-neon-tech")}
                  </li>
                  {/* <li className="list-disc list-outside">
                    {t("ci-cd-automatise-via-github-actions")}
                  </li> */}
                  <li className="list-disc list-outside">
                    {t("monitoring-avec-google-analytics-et-vercel-analytics")}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
                <p className="font-bold text-[color:var(--blue)]">Tests</p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    {t("test-unitaires-vitest")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("tests-dintegration-vitest")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("tests-end2end-cypress")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl={
            locale === "fr"
              ? "https://www.fm4all.com/fr"
              : "https://www.fm4all.com/en"
          }
          description={t("site-vitrine-fr-en")}
          videoUrl="https://www.youtube-nocookie.com/embed/JQTy50x4LSY?rel=0"
          videoTitle={t("fm4all-site-vitrine")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl={
            locale === "fr"
              ? "https://www.fm4all.com/fr"
              : "https://www.fm4all.com/en"
          }
          description={t("comparateur-en-ligne")}
          videoUrl="https://www.youtube-nocookie.com/embed/ER8qbi4iX_k?rel=0"
          videoTitle={t("fm4all-comparateur-en-ligne")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl={
            locale === "fr"
              ? "https://www.fm4all.com/fr"
              : "https://www.fm4all.com/en"
          }
          description={t("devis-pdf")}
          videoUrl="https://www.youtube-nocookie.com/embed/-jKvdVpCBTA?rel=0"
          videoTitle={t("fm4all-devis-pdf")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl={
            locale === "fr"
              ? "https://www.fm4all.com/fr"
              : "https://www.fm4all.com/en"
          }
          description={t("back-office-fournisseur")}
          videoUrl="https://www.youtube-nocookie.com/embed/MOgfKvilM14?rel=0"
          videoTitle={t("fm4all-back-office-fournisseur")}
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselFm4all;
