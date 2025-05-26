import { useTranslations } from "next-intl";
import Link from "next/link";
import { caveat } from "./ProjectsSection";

const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <section
      className="min-h-[calc(100vh-3rem)] bg-(--cream) flex flex-col gap-10  scroll-mt-11 lg:scroll-mt-14 pt-10"
      id="about"
    >
      <h2
        className={`text-6xl tracking-tight font-bold text-center ${caveat.className}`}
      >
        {t("a-propos")}
      </h2>

      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-4 lg:gap-20 justify-between px-6 py-10">
        <div className="lg:w-1/2 text-sm text-justify">
          <h3 className={`text-5xl font-bold mb-6 ${caveat.className}`}>
            {t("mon-parcours")}
          </h3>
          <p className="mb-4">
            {t("apres-avoir-obtenu-mon")}{" "}
            <span className="text-blue-400 font-bold">
              {t("diplome-dingenieur-en-mecanique")}
            </span>{" "}
            {t("en-2007-a")}{" "}
            <Link
              className="text-blue-400 font-bold hover:underline underline lg:no-underline"
              href="https://www.isae-supmeca.fr/"
              target="_blank"
            >
              {" "}
              {t("isae-supmeca")}
            </Link>
            {t(
              "et-avoir-travaille-quelques-annees-en-entreprise-jai-finalement-suivi-ma-passion-pour-la-musique-et-la-guitare"
            )}
          </p>
          <p className="mb-4">
            {t(
              "jai-eu-pendant-10-ans-la-chance-daccompagner-de-nombreux-artistes-sur-scene-et-en-studio-comme"
            )}{" "}
            <span className="text-blue-400 font-bold">
              {t("guitariste-et-compositeur")}
            </span>
            {t(
              "la-periode-du-covid-19-et-larret-des-concerts-fut-pour-moi-lopportunite-de-decouvrir-le-monde-de-la"
            )}{" "}
            <span className="text-blue-400 font-bold">
              {t("programmation-informatique")}
            </span>
            {t(
              "javais-fait-un-peu-de-code-en-ecole-dingenieur-mais-cette-fois-ci-cest-devenu-une-autre-passion"
            )}
          </p>
          <p className="mb-4">
            {t(
              "en-tant-que-developpeur-autodidacte-jai-appris-de-la-meme-maniere-quavec-la-musique"
            )}{" "}
            <span className="text-blue-400 font-bold">
              {t("en-faisant-des-projets-personnels")}
              {""}
            </span>{" "}
            {t(
              "plutot-quen-suivant-des-formations-theoriques-souvent-trop-eloignees-des-enjeux-et-problemes-dune-application-and-quot-reelle-and-quot"
            )}
          </p>
          <p className="mb-4">
            {t("cette-approche-est-selon-moi-la-meilleure-source-de")}{" "}
            <span className="text-blue-400 font-bold">{t("motivation")}</span>{" "}
            {t("et-d")}
            <span className="text-blue-400 font-bold">
              {t("apprentissage")}
            </span>
            {t(
              "voir-ce-que-lon-a-imagine-seul-ou-en-equipe-prendre-progressivement-forme-ajouter-des-fonctionnalites-au-fur-et-a-mesure-et"
            )}{" "}
            <span className="text-blue-400 font-bold">
              {t("ameliorer-continuellement-le-produit")}
            </span>
            {t("chaque-nouvelle-fonctionnalite-est-un-nouveau-defi-a-resoudre")}
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
            {t(
              "mon-parcours-atypique-reflete-celui-dune-personne-passionnee-qui-aime-creer-et-apprendre"
            )}
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4 lg:gap-20">
          <div className="flex-1 text-sm">
            <h3 className={`text-5xl font-bold mb-6 ${caveat.className}`}>
              {t("education")}
            </h3>
            <ul>
              <li className="mb-4">
                2004-2007:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://www.isae-supmeca.fr/"
                  target="_blank"
                >
                  {t("isae-supmeca-institut-superieur-de-mecanique-de-paris")}
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  {t("diplome-dingenieur-en-mecanique-0")}
                </span>
              </li>
              <li className="mb-4">
                2001-2004:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil"
                  target="_blank"
                >
                  {t("lycee-saint-louis-paris")}
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  {t("classes-preparatoires")}{" "}
                </span>
                {t("mathematiques-physique-science-de-lingenieur-mpsi-mp")}
              </li>
              <li className="mb-4">
                2010-2015:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://www.imep.pro"
                  target="_blank"
                >
                  {t("imep-paris-college-of-music-berklee-global-partners")}
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  {t(
                    "diplome-de-fin-detudes-en-harmonie-composition-arrangement-et-improvisation"
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-sm">
            <h3 className={`text-5xl font-bold mb-6 ${caveat.className}`}>
              {t("centres-dinteret")}
            </h3>
            <ul>
              <li>{t("musique")}</li>
              <li>
                {t("audio-programming-traitement-du-signal-electronique")}
              </li>
              <li>{t("tennis")}</li>
              <li>{t("astronomie")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
