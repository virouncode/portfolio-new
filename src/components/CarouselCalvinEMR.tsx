import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselCalvinEMR = () => {
  const t = useTranslations("Projets.calvinEMR");
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-[500px] sm:h-auto sm:px-12"
    >
      <CarouselContent className="h-[500px] sm:h-auto">
        <CarouselItemPresentation
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          // siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com"
          siteUrl="https://calvinemr.com/"
          description={t("developpement-full-stack-du-saas-calvin-emr")}
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                {t("calvin-emr-est-une")}{" "}
                <strong>{t("plateforme-saas-pour-cliniques-medicales")}</strong>{" "}
                {t("en-ontario-canada")}
              </p>
              <p className="leading-relaxed">
                {t(
                  "conception-et-developpement-full-stack-d-un-logiciel-de-gestion-medicale-destine-aux-professionnels-de-sante-realise-en"
                )}{" "}
                <strong>{t("collaboration-directe-avec-un-medecin")}</strong>
                {t(
                  "ce-saas-permet-une-gestion-centralisee-des-dossiers-patients-de-la-prise-de-rendez-vous-de-la-messagerie-interne-de-l-envoi-d-e-fax-ainsi-que-de-l-edition-assistee-des-ordonnances-et-des-factures"
                )}
              </p>
              <p className="leading-relaxed italic">
                {t("le-systeme-integre-egalement-l")}
                <strong>{t("intelligence-artificielle-chatgpt")}</strong>{" "}
                {t("pour-optimiser-certaines-taches")}
              </p>
            </div>
            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                {t("fonctionnalites-principales")}
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  <strong>{t("mises-a-jour-en-temps-reel")}</strong>{" "}
                  {t("via-websockets")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("authentification-et-autorisation")}</strong>{" "}
                  {t("avec-gestion-des-roles")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("calendrier-partage")}</strong>{" "}
                  {t("pour-la-gestion-des-rendez-vous")}
                </li>
                <li className="list-disc list-outside">
                  {t("notifications-par")}{" "}
                  <strong>{t("sms-email-et-efax")}</strong>
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("aide-a-la-redaction-dordonnances")}</strong>{" "}
                  {t("et-de-factures")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("integration-de-lia-gpt")}</strong>{" "}
                  {t("pour-lassistance-medicale")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("export-de-donnees")}</strong> {t("au-format-xml")}
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6 mt-2">
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("stack-front-end")}
                </p>
                <p className="ml-2">
                  {t("react-vite-tanstack-query-sass-scss-yup")}
                </p>
              </div>
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("stack-back-end")}
                </p>
                <p className="ml-2">
                  {t("node-js-express-websockets-socket-io-xano-yup")}
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemPresentation
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com"
          description={t("architecture-et-technologies")}
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 p-3 rounded-lg">
              <p className="leading-relaxed">
                {t(
                  "la-plateforme-calvin-emr-a-ete-developpee-avec-une-architecture-moderne-orientee-performance-et-evolutivite-pour-repondre-aux-besoins-specifiques-des-cliniques-medicales"
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
                    {t("application-saas-full-stack")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("api-restful-avec-express")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("base-de-donnees-postgresql")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("communication-temps-reel-websockets")}
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  {t("fonctionnalites-cles")}
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    {t("gestion-centralisee-des-dossiers-medicaux")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("systeme-de-notifications-multi-canal")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("assistance-ia")}
                  </li>
                  <li className="list-disc list-outside">
                    {t("export-xml-des-dossiers-pour-transferts")}
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                {t("deploiement")}
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  {t("monorepo-full-stack-avec-deploiement-unifie-sur-heroku")}
                </li>
                <li className="list-disc list-outside">
                  {t("base-de-donnees-sur-xano")}
                </li>
                <li className="list-disc list-outside">
                  {t("application-web-multi-tenant-personnalisable")}
                </li>
                <li className="list-disc list-outside">
                  {t("deploiement-automatise-via-git")}
                </li>
              </ul>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description={t("calendrier-partage-librairie-fullcalendar")}
          videoUrl="https://www.youtube-nocookie.com/embed/Y3tS8SNgGgI?rel=0"
          videoTitle={t("calendrier-partage-de-calvin-emr")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description={t("dossier-medical-electronique")}
          videoUrl="https://www.youtube-nocookie.com/embed/TSplJr1gUBU?rel=0"
          videoTitle={t("dossier-medical-electronique-de-calvin-emr")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description={t("messagerie-avec-websockets")}
          videoUrl="https://www.youtube-nocookie.com/embed/SAxNPqtOBfE?rel=0"
          videoTitle={t("messagerie-de-calvin-emr")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description={t("integration-de-chatgpt-open-ai-api")}
          videoUrl="https://www.youtube-nocookie.com/embed/6uW23sbIvlk?rel=0"
          videoTitle={t("chat-gpt-de-calvin-emr")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description={t("facturation-et-export-csv")}
          videoUrl="https://www.youtube-nocookie.com/embed/fvzA9Rl-ics?rel=0"
          videoTitle={t("facturation-de-calvin-emr")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description={t("aide-a-la-redaction-dordonnances-0")}
          videoUrl="https://www.youtube-nocookie.com/embed/KjpsiuB84s8?rel=0"
          videoTitle={t("aide-a-la-redaction-dordonnances-de-calvin-emr")}
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselCalvinEMR;
