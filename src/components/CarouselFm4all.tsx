import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const CarouselFm4all = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-[500px] sm:h-auto sm:px-12"
    >
      <CarouselContent className="h-[500px] sm:h-auto">
        <CarouselItem className="h-[500px] sm:h-auto">
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[500px] sm:h-auto overflow-y-auto">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Création d’une plateforme web B2B de gestion des services
                    aux entreprises (facility management).
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-5 text-sm">
                <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
                  <p className="leading-relaxed">
                    fm4all est une société spécialisée dans la{" "}
                    <strong>
                      gestion externalisée des services aux PME/TPE
                    </strong>
                    .
                  </p>
                  <p className="leading-relaxed">
                    Sa plateforme regroupe des prestataires dans des domaines
                    clés : nettoyage, hygiène sanitaire, maintenance, sécurité
                    incendie, location de machines à café , fontaines à eau,
                    etc.
                  </p>
                  <p className="leading-relaxed italic">
                    {" "}
                    La promesse : 1 seul contact. 1 seul contrat. 1 seule
                    facture.
                  </p>
                </div>
                <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
                  <p className="font-bold text-[color:var(--blue)]">
                    Objectifs & livrables
                  </p>
                  <ul className="ml-4 space-y-1.5">
                    <li className="list-disc list-outside">
                      Conception et développement d’un{" "}
                      <strong>site vitrine</strong> multilingue (FR/EN)
                    </li>
                    <li className="list-disc list-outside">
                      Intégration d’un <strong>référencement SEO</strong> adapté
                      pour les deux langues
                    </li>
                    <li className="list-disc list-outside">
                      Développement d’une{" "}
                      <strong>application de comparaison de services</strong>{" "}
                      avec génération de <strong>devis en ligne</strong>
                    </li>
                    <li className="list-disc list-outside">
                      Modélisation d’une{" "}
                      <strong>base de données relationnelle</strong> :
                      utilisateurs, fournisseurs, services, produits, tarifs,
                      devis, etc.
                    </li>
                    <li className="list-disc list-outside">
                      Mise en place de <strong>back-offices sécurisés</strong>{" "}
                      pour clients et fournisseurs : authentification, gestion
                      des contrats, mises à jour des tarifs en temps réel, etc.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row gap-6 mt-2">
                  <div className="flex-1 bg-white/70 p-3 rounded-lg">
                    <p className="font-bold text-[color:var(--blue)] mb-2">
                      Stack front-end
                    </p>
                    <p className="ml-2">
                      Typescript, React, Next.js 15, Tailwind, shadcn/ui,
                      next-intl
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
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[500px] sm:h-auto">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Technologies et architecture
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
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
                  <p className="font-bold text-[color:var(--blue)]">
                    Déploiement
                  </p>
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
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Présentation vidéo du comparateur en ligne
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px]  rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PWTnAQTO8lM?si=B_TiaOlg3QSiHCeb&modestbranding=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col scale-">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Screenshot : landing page
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg  overflow-hidden relative">
                <Image
                  src="/img/projets/fm4all_landing.png"
                  alt="fm4all Landing Page"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Screenshot : comparateur en ligne
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src="/img/projets/fm4all_comparateur.png"
                  alt="fm4all comparateur en ligne"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Screenshot : présentation des offres
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src="/img/projets/fm4all_produits.png"
                  alt="fm4all présentation des produits"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Screenshot : affichage du total en temps réel
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src="/img/projets/fm4all_total.png"
                  alt="fm4all Total"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Screenshot : émission du devis
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src="/img/projets/fm4all_devis.png"
                  alt="fm4all devis"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.fm4all.com"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-[120px] h-[48px] relative">
                    <Image
                      src="/img/logos/fm4allLogo.png"
                      alt="fm4all Logo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
                  <p className="text-base font-medium">
                    Screenshot : back office fournisseur
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src="/img/projets/fm4all_backoffice.png"
                  alt="fm4all backoffice"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselFm4all;
