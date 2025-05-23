import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItemPresentation from "./CarouselItemPresentation";
import CarouselItemVideo from "./CarouselItemVideo";

const CarouselCalvinEMR = () => {
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
          siteUrl="#"
          description="Développement full-stack du SaaS Calvin EMR"
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 px-3 rounded-lg">
              <p className="leading-relaxed">
                Calvin EMR est une{" "}
                <strong>plateforme SaaS pour cliniques médicales</strong> en
                Ontario (Canada).
              </p>
              <p className="leading-relaxed">
                Conception et développement full-stack d&apos;un logiciel de
                gestion médicale destiné aux professionnels de santé. Réalisé en{" "}
                <strong>collaboration directe avec un médecin</strong>, ce SaaS
                permet une gestion centralisée des dossiers patients, de la
                prise de rendez-vous, de la messagerie interne, de l&apos;envoi
                d&apos;e-fax, ainsi que de l&apos;édition assistée des
                ordonnances et des factures.
              </p>
              <p className="leading-relaxed italic">
                Le système intègre également l&apos;
                <strong>intelligence artificielle (ChatGPT)</strong> pour
                optimiser certaines tâches.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">
                Fonctionnalités principales
              </p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  <strong>Mises à jour en temps réel</strong> via WebSockets
                </li>
                <li className="list-disc list-outside">
                  <strong>Authentification et autorisation</strong> avec gestion
                  des rôles
                </li>
                <li className="list-disc list-outside">
                  <strong>Calendrier partagé</strong> pour la gestion des
                  rendez-vous
                </li>
                <li className="list-disc list-outside">
                  Notifications par <strong>SMS, email et eFax</strong>
                </li>
                <li className="list-disc list-outside">
                  <strong>Aide à la rédaction d&apos;ordonnances</strong> et de
                  factures
                </li>
                <li className="list-disc list-outside">
                  <strong>Intégration de l&apos;IA (GPT)</strong> pour
                  l&apos;assistance médicale
                </li>
                <li className="list-disc list-outside">
                  <strong>Export de données</strong> au format XML
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6 mt-2">
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Stack front-end
                </p>
                <p className="ml-2">
                  React (Vite), TanStack Query, SASS/SCSS, yup
                </p>
              </div>
              <div className="flex-1 bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Stack back-end
                </p>
                <p className="ml-2">
                  Node.js (Express), WebSockets (Socket.IO), Xano, yup
                </p>
              </div>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemPresentation
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="#"
          description="Architecture et technologies"
        >
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-3 bg-white/50 p-3 rounded-lg">
              <p className="leading-relaxed">
                La plateforme Calvin EMR a été développée avec une architecture
                moderne orientée performance et évolutivité pour répondre aux
                besoins spécifiques des cliniques médicales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Architecture
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    Application SaaS full-stack
                  </li>
                  <li className="list-disc list-outside">
                    API RESTful avec Express
                  </li>
                  <li className="list-disc list-outside">
                    Base de données PostgreSQL
                  </li>
                  <li className="list-disc list-outside">
                    Communication temps réel WebSockets
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-[color:var(--blue)] mb-2">
                  Fonctionnalités clés
                </p>
                <ul className="ml-4 space-y-1.5">
                  <li className="list-disc list-outside">
                    Gestion centralisée des dossiers médicaux
                  </li>
                  <li className="list-disc list-outside">
                    Système de notifications multi-canal
                  </li>
                  <li className="list-disc list-outside">Assistance IA</li>
                  <li className="list-disc list-outside">
                    Export XML des dossiers pour transferts
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-l-4 border-[color:var(--blue)] pl-4">
              <p className="font-bold text-[color:var(--blue)]">Déploiement</p>
              <ul className="ml-4 space-y-1.5">
                <li className="list-disc list-outside">
                  Monorepo full-stack avec déploiement unifié sur Heroku.
                </li>
                <li className="list-disc list-outside">
                  Base de données sur Xano
                </li>
                <li className="list-disc list-outside">
                  Application web multi-tenant personnalisable
                </li>
                <li className="list-disc list-outside">
                  Déploiement automatisé via Git
                </li>
              </ul>
            </div>
          </div>
        </CarouselItemPresentation>
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description="Calendrier partagé (librairie fullcalendar)"
          videoUrl="https://www.youtube.com/embed/Y3tS8SNgGgI?rel=0"
          videoTitle="Calendrier partagé de Calvin EMR"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description="Dossier médical électronique"
          videoUrl="https://www.youtube.com/embed/WISYlW_H5t8?rel=0"
          videoTitle="Dossier médical électronique de Calvin EMR"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description="Messagerie avec websockets"
          videoUrl="https://www.youtube.com/embed/SAxNPqtOBfE?rel=0"
          videoTitle="Messagerie de Calvin EMR"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description="Intégration de ChatGPT (Open AI API)"
          videoUrl="https://www.youtube.com/embed/6uW23sbIvlk?rel=0"
          videoTitle="Chat GPT de Calvin EMR"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description="Facturation et export CSV"
          videoUrl="https://www.youtube.com/embed/fvzA9Rl-ics?rel=0"
          videoTitle="Facturation de Calvin EMR"
        />
        <CarouselItemVideo
          logoUrl="/img/logos/calvinLogo.png"
          logoAlt="Calvin EMR Logo"
          siteUrl="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
          description="Aide à la rédaction d'ordonnances"
          videoUrl="https://www.youtube.com/embed/KjpsiuB84s8?rel=0"
          videoTitle="Aide à la rédaction d'ordonnances de Calvin EMR"
        />
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default CarouselCalvinEMR;
