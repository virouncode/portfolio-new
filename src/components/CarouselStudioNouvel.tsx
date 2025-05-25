import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselStudioNouvel = () => {
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
          description="Site vitrine bilingue pour un collectif musical"
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                <strong>Studio Nouvel</strong> est une équipe de{" "}
                <strong>compositeurs, musiciens et ingénieurs du son</strong>{" "}
                spécialisés dans la musique à l&apos;image et les réalisations
                d&apos;albums
              </p>
              <p className="leading-relaxed">
                Le site met en valeur leur{" "}
                <strong>univers artistique et leur expertise</strong> à travers
                une interface élégante, bilingue (FR/EN) et optimisée pour le
                référencement.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                Objectifs du projet
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  Présenter l&apos;identité de l&apos;équipe et ses services de
                  manière claire et immersive
                </li>
                <li className="list-disc list-outside">
                  Offrir une <strong>navigation fluide</strong> en français et
                  en anglais
                </li>
                <li className="list-disc list-outside">
                  Garantir une excellente{" "}
                  <strong>expérience utilisateur</strong> sur mobile et desktop
                </li>
                <li className="list-disc list-outside">
                  Optimiser le <strong>référencement naturel</strong> (SEO
                  bilingue)
                </li>
              </ul>
            </div>

            <div className="bg-white/70 p-3 rounded-lg">
              <p className="font-bold text-[color:var(--blue)] mb-2">
                Stack technique
              </p>
              <div className="ml-2 space-y-1">
                <p>
                  <strong>Frontend :</strong> React, Next.js, TypeScript
                </p>
                <p>
                  <strong>UI :</strong> Shadcn/UI
                </p>
                <p>
                  <strong>Internationalisation :</strong> next-intl
                </p>
                <p>
                  <strong>Design :</strong> Responsive & orienté UX/UI
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
          description="Présentation du site vitrine"
          videoTitle="Studio Nouvel site vitrine"
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselStudioNouvel;
