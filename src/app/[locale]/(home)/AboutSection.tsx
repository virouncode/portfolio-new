import Link from "next/link";
import { caveat } from "./ProjectsSection";

const AboutSection = () => {
  return (
    <section
      className="min-h-[calc(100vh-3rem)] bg-(--cream) flex flex-col gap-10  scroll-mt-11 lg:scroll-mt-14 pt-10"
      id="about"
    >
      <h3
        className={`text-6xl tracking-tight font-bold text-center ${caveat.className}`}
      >
        A propos
      </h3>

      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-4 lg:gap-20 justify-between px-6 py-10">
        <div className="lg:w-1/2 text-sm text-justify">
          <h3 className={`text-5xl font-bold mb-6 ${caveat.className}`}>
            Mon parcours
          </h3>
          <p className="mb-4">
            Après avoir obtenu mon{" "}
            <span className="text-blue-400 font-bold">
              diplôme d'Ingénieur en Mécanique
            </span>{" "}
            en 2007 à{" "}
            <Link
              className="text-blue-400 font-bold hover:underline underline lg:no-underline"
              href="https://www.isae-supmeca.fr/"
              target="_blank"
            >
              {" "}
              ISAE - SUPMECA
            </Link>
            , et avoir travaillé quelques années en entreprise, j'ai finalement
            suivi ma passion pour la musique et la guitare.
          </p>
          <p className="mb-4">
            J'ai eu pendant 10 ans la chance d'accompagner de nombreux artistes
            sur scène et en studio comme{" "}
            <span className="text-blue-400 font-bold">
              guitariste et compositeur
            </span>
            . La période du COVID-19 et l'arrêt des concerts fut pour moi
            l'opportunité de découvrir le monde de la{" "}
            <span className="text-blue-400 font-bold">
              programmation informatique
            </span>
            . J'avais fait un peu de code en école d'ingénieur, mais cette
            fois-ci, c'est devenu une autre passion.
          </p>
          <p className="mb-4">
            En tant que développeur autodidacte, j'ai appris de la même manière
            qu'avec la musique,{" "}
            <span className="text-blue-400 font-bold">
              en faisant des projets personnels{""}
            </span>{" "}
            plutôt qu'en suivant des formations théoriques, souvent trop
            éloignées des enjeux et problèmes d'une application "réelle".
          </p>
          <p className="mb-4">
            Cette approche est selon moi la meilleure source de{" "}
            <span className="text-blue-400 font-bold">motivation</span> et d'
            <span className="text-blue-400 font-bold">apprentissage</span>. Voir
            ce que l'on a imaginé, seul ou en équipe, prendre progressivement
            forme, ajouter des fonctionnalités au fur et à mesure, et{" "}
            <span className="text-blue-400 font-bold">
              améliorer continuellement le produit
            </span>
            . Chaque nouvelle fonctionnalité est un nouveau défi à résoudre.
          </p>
          {/* <p className="mb-4">
            J'ai d'abord co-développé une application mobile qui aide à la
            composition et à la production musicale. Nous ne savions pas comment
            nous y prendre ni quel langage utiliser, mais ce qui comptait le
            plus, c’est que nous voulions VRAIMENT la créer, et nous avions une
            idée assez claire des fonctionnalités. Finalement, nous avons opté
            pour le{" "}
            <span className="text-blue-400 font-bold">
              framework JUCE en C++
            </span>
            , spécialisé dans le développement d’applications audio et
            compatible avec un{" "}
            <span className="text-blue-400 font-bold">
              déploiement multiplateforme (Android, iOS, desktop).
            </span>{" "}
            L’application{" "}
            <Link
              className="text-blue-400 font-bold"
              href="https://www.toool.fr"
              target="_blank"
            >
              Toool Music Production App
            </Link>{" "}
            est aujourd'hui disponible sur les stores.
          </p>
          <p className="mb-4">
            Par la suite, mon frère médecin m’a offert l’opportunité de me
            spécialiser dans le{" "}
            <span className="text-blue-400 font-bold">développement web</span>:
            la librairie <span className="text-blue-400 font-bold">React </span>
            et tout son écosystème pour le frontend,{" "}
            <span className="text-blue-400 font-bold">Node/Express </span> pour
            le backend. Nous avons créé le logiciel SaaS{" "}
            <span className="text-blue-400 font-bold">Calvin EMR</span> pour la
            gestion de cliniques médicales, qui est désormais commercialisé en
            Ontario (Canada).
          </p>
          <p className="mb-4">
            Dernièrement, j'ai co-fondé la{" "}
            <span className="text-blue-400 font-bold">
              plateforme fm4all.com :{" "}
            </span>
            entreprise de mise en relation entre les PME/TPE et les sociétés de
            services aux entreprises (nettoyage, maintenance règlementaire,
            sécurité incendie, locations de machines à café, etc...). La
            plateforme s'articule autour d'un comparateur, d'un émetteur de
            devis en ligne et d'un back-office fournisseur et client,
            entièrement réalisés en{" "}
            <span className="text-blue-400 font-bold">
              Next JS 15 fullstack
            </span>
            .
          </p> */}
          <p className="mb-4">
            Mon parcours atypique reflète celui d’une personne passionnée, qui
            aime créer et apprendre.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4 lg:gap-20">
          <div className="flex-1 text-sm">
            <h3 className={`text-5xl font-bold mb-6 ${caveat.className}`}>
              Education
            </h3>
            <ul>
              <li className="mb-4">
                2004-2007:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://www.isae-supmeca.fr/"
                  target="_blank"
                >
                  ISAE-SUPMECA - Institut supérieur de mécanique de Paris
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  Diplôme d'Ingénieur en Mécanique
                </span>
              </li>
              <li className="mb-4">
                2001-2004:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil"
                  target="_blank"
                >
                  Lycée Saint Louis - Paris
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  Classes Préparatoires{" "}
                </span>
                Mathématiques, Physique, Science de l'ingénieur (MPSI/MP)
              </li>
              <li className="mb-4">
                2010-2015:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://www.imep.pro"
                  target="_blank"
                >
                  IMEP Paris College of Music (Berklee Global Partners)
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  Diplôme de fin d'études en Harmonie, Composition, Arrangement
                  et Improvisation
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-sm">
            <h3 className={`text-5xl font-bold mb-6 ${caveat.className}`}>
              Centres d'intérêt
            </h3>
            <ul>
              <li>Musique</li>
              <li>Audio Programming / Traitement du signal / Electronique</li>
              <li>Tennis</li>
              <li>Astronomie</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
