import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemScreenshot from "./CarouselItemScreenshot";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselToool = () => {
  const t = useTranslations("Projets.toool");
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-[500px] sm:h-auto sm:px-12"
    >
      <CarouselContent className="h-[500px] sm:h-auto">
        <CarouselItemPresentation
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description={t("co-creation-de-lapp-mobile-toool-ios-and-android")}
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                <strong>Toool</strong>{" "}
                {t("est-une-application-mobile-destinee-aux")}{" "}
                <strong>{t("musiciens-et-producteurs")}</strong>{" "}
                {t(
                  "pour-composer-mixer-et-exporter-leurs-creations-directement-depuis-leur-smartphone"
                )}
              </p>
              <p className="leading-relaxed">
                {t("lapplication-adopte-lapparence-et-lergonomie-dun")}{" "}
                <strong>{t("plug-in-audio")}</strong>
                {t("avec-une-interface-intuitive-et-adaptee-a-un-usage-mobile")}
              </p>
              <p className="leading-relaxed italic">
                {t(
                  "toool-est-concue-pour-faciliter-linspiration-en-deplacement-tout-en-offrant-des-outils-puissants-de-production-musicale"
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                {t("fonctionnalites-cles")}
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  <strong>{t("generateur-musical-intelligent")}</strong>
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("460-progressions-daccords")}</strong>{" "}
                  {t("dans-toutes-les-tonalites")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("250-motifs-rythmiques")}</strong> {t("varies")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("50-packs-de-sons")}</strong> {t("integres")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("human-groove")}</strong>{" "}
                  {t("pour-des-rythmes-plus-naturels")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("table-de-mixage")}</strong>
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("sequenceur-pas-a-pas")}</strong>{" "}
                  {t("step-sequencer")}
                </li>
                <li className="list-disc list-outside">
                  <strong>{t("export-midi-wav-et-stems")}</strong>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 p-3 rounded-lg">
              <p className="font-bold text-[color:var(--blue)] mb-2">
                {t("stack-technique")}
              </p>
              <div className="ml-2 space-y-1">
                <p>
                  <strong>{t("langage")}</strong> C++
                </p>
                <p>
                  <strong>{t("framework")}</strong> JUCE
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description={t("presentation-de-lapp-toool")}
          videoUrl="https://www.youtube-nocookie.com/embed/MGB92QYb9Qc?rel=0"
          videoTitle={t("toool-presentation-de-lapplication")}
        />
        <CarouselItemVideo
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description={t("utilisation-de-lapp-toool")}
          videoUrl="https://www.youtube-nocookie.com/embed/yrcZXgQ9340?rel=0"
          videoTitle={t("toool-utilisation-de-lapplication")}
        />
        <CarouselItemScreenshot
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description={t("page-principale-and-step-sequencer")}
          screenshotUrl="/img/projets/toool/tooolMainstep.png"
          screenshotAlt={t("toool-page-principale-et-step-sequencer")}
        />

        <CarouselItemScreenshot
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description={t("jam-pad-and-table-de-mixage")}
          screenshotUrl="/img/projets/toool/tooolPadsMix.png"
          screenshotAlt={t("toool-jam-pad-et-table-de-mixage")}
        />
        <CarouselItemScreenshot
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description={t("reviews")}
          screenshotUrl="/img/projets/toool/tooolProof.png"
          screenshotAlt={t("toool-reviews")}
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselToool;
