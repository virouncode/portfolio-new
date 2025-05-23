import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselFm4all = () => {
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
          siteUrl="https://www.fm4all.com"
          description="Développement full-stack de la plateforme fm4all"
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                fm4all est une société spécialisée dans la{" "}
                <strong>gestion externalisée des services aux PME/TPE</strong>.
              </p>
              <p className="leading-relaxed">
                Sa plateforme regroupe des prestataires dans des domaines clés :
                nettoyage, hygiène sanitaire, maintenance, sécurité incendie,
                location de machines à café , fontaines à eau, etc.
              </p>
              <p className="leading-relaxed italic">
                {" "}
                La promesse : 1 seul contact. 1 seul contrat. 1 seule facture.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                Objectifs & livrables
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  Conception et développement d’un <strong>site vitrine</strong>{" "}
                  multilingue (FR/EN)
                </li>
                <li className="list-disc list-outside">
                  Intégration d’un <strong>référencement SEO</strong> adapté
                  pour les deux langues
                </li>
                <li className="list-disc list-outside">
                  Développement d’une{" "}
                  <strong>application de comparaison de services</strong> avec
                  génération de <strong>devis en ligne</strong>
                </li>
                <li className="list-disc list-outside">
                  Modélisation d’une{" "}
                  <strong>base de données relationnelle</strong> : utilisateurs,
                  fournisseurs, services, produits, tarifs, devis, etc.
                </li>
                <li className="list-disc list-outside">
                  Mise en place de <strong>back-offices sécurisés</strong> pour
                  clients et fournisseurs : authentification, gestion des
                  contrats, mises à jour des tarifs en temps réel, etc.
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6 mt-2">
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Stack front-end
                </p>
                <p className="ml-2">
                  React, Next.js 15, Tailwind, shadcn/ui, react-hook-form,
                  next-intl, zod
                </p>
              </div>
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Stack back-end
                </p>
                <p className="ml-2">
                  Next.js 15 (API routes & Server Actions), Drizzle ORM,
                  better-auth, zod
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemPresentation
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl="https://www.fm4all.com"
          description="Technologies et architecture"
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 p-3 rounded-lg">
              <p className="leading-relaxed">
                La plateforme fm4all a été développée avec une architecture
                moderne orientée performance et évolutivité.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Architecture
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    Application monolithique Next.js
                  </li>
                  <li className="list-disc list-outside">
                    API routes et Server Actions
                  </li>
                  <li className="list-disc list-outside">
                    Base de données PostgreSQL
                  </li>
                  <li className="list-disc list-outside">
                    Authentification multi-niveaux
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Fonctionnalités clés
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    Comparateur de services
                  </li>
                  <li className="list-disc list-outside">
                    Génération de devis PDF
                  </li>
                  <li className="list-disc list-outside">
                    Back-offices personnalisés
                  </li>
                  <li className="list-disc list-outside">
                    Notifications en temps réel (Websockets)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">Déploiement</p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  Hébergement sur Vercel (front-end et API)
                </li>
                <li className="list-disc list-outside">
                  Base de données sur Neon.tech
                </li>
                <li className="list-disc list-outside">
                  CI/CD automatisé via GitHub Actions
                </li>
                <li className="list-disc list-outside">
                  Monitoring avec Google Analytics et Vercel Analytics
                </li>
              </ul>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl="https://www.fm4all.com"
          description="Site vitrine FR/EN"
          videoUrl="https://www.youtube.com/embed/JQTy50x4LSY?rel=0"
          videoTitle="fm4all site vitrine"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl="https://www.fm4all.com"
          description="Comparateur en ligne"
          videoUrl="https://www.youtube.com/embed/ER8qbi4iX_k?rel=0"
          videoTitle="fm4all comparateur en ligne"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl="https://www.fm4all.com"
          description="Devis PDF"
          videoUrl="https://www.youtube.com/embed/-jKvdVpCBTA?rel=0"
          videoTitle="fm4all devis pdf"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/fm4allLogo.png"
          logoAlt="fm4all Logo"
          siteUrl="https://www.fm4all.com"
          description="Back-office fournisseur"
          videoUrl="https://www.youtube.com/embed/MOgfKvilM14?rel=0"
          videoTitle="fm4all back office fournisseur"
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselFm4all;
