import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemScreenshot from "./CarouselItemScreenshot";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselToool = () => {
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
          description="Co-création de l'app mobile Toool (iOS & Android)"
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                <strong>Toool</strong> est une application mobile destinée aux{" "}
                <strong>musiciens et producteurs</strong> pour composer, mixer
                et exporter leurs créations directement depuis leur smartphone.
              </p>
              <p className="leading-relaxed">
                L&apos;application adopte l&apos;apparence et l&apos;ergonomie
                d&apos;un <strong>plug-in audio</strong>, avec une interface
                intuitive et adaptée à un usage mobile.
              </p>
              <p className="leading-relaxed italic">
                Développée en pair programming, Toool est conçue pour faciliter
                l&apos;inspiration en déplacement, tout en offrant des outils
                puissants de production musicale.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                Fonctionnalités clés
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  <strong>Générateur musical intelligent</strong>
                </li>
                <li className="list-disc list-outside">
                  <strong>460 progressions d&apos;accords</strong> dans toutes
                  les tonalités
                </li>
                <li className="list-disc list-outside">
                  <strong>250 motifs rythmiques</strong> variés
                </li>
                <li className="list-disc list-outside">
                  <strong>50 packs de sons</strong> intégrés
                </li>
                <li className="list-disc list-outside">
                  <strong>&quot;Human groove&quot;</strong> pour des rythmes
                  plus naturels
                </li>
                <li className="list-disc list-outside">
                  <strong>Table de mixage</strong>
                </li>
                <li className="list-disc list-outside">
                  <strong>Séquenceur pas à pas</strong> (step sequencer)
                </li>
                <li className="list-disc list-outside">
                  <strong>Export MIDI, WAV et stems</strong>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 p-3 rounded-lg">
              <p className="font-bold text-[color:var(--blue)] mb-2">
                Stack technique
              </p>
              <div className="ml-2 space-y-1">
                <p>
                  <strong>Langage :</strong> C++
                </p>
                <p>
                  <strong>Framework :</strong> JUCE
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description="Présentation de l'app Toool"
          videoUrl="https://www.youtube.com/embed/MGB92QYb9Qc?rel=0"
          videoTitle="Toool - Présentation de l'application"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description="Utilisation de l'app Toool"
          videoUrl="https://www.youtube.com/embed/yrcZXgQ9340?rel=0"
          videoTitle="Toool - Utilisation de l'application"
        />
        <CarouselItemScreenshot
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description="Page principale & step sequencer"
          screenshotUrl="/img/projets/toool/tooolMainstep.png"
          screenshotAlt="Toool page principale et step sequencer"
        />
        <CarouselItemScreenshot
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description="Jam Pad & table de mixage"
          screenshotUrl="/img/projets/toool/tooolPadsMix.png"
          screenshotAlt="Toool jam pad et table de mixage"
        />
        <CarouselItemScreenshot
          logoUrl="/img/logos/tooolLogo.png"
          logoAlt="Toool Logo"
          siteUrl="https://www.toool.fr/"
          description="Reviews"
          screenshotUrl="/img/projets/toool/tooolProof.png"
          screenshotAlt="Toool reviews"
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselToool;
