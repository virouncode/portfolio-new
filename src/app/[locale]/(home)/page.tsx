import { LocaleType, routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({
    locale,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: LocaleType }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("viroun-kattygnarath-or-developpeur-react-node-next-js"),
    description: t(
      "portfolio-de-viroun-kattygnarath-developpeur-fullstack-react-node-next-js-a-paris-france"
    ),
    openGraph: {},
    alternates: {
      canonical:
        locale === "fr"
          ? "https://www.viroun.dev/fr"
          : "https://www.viroun.dev/en",
      languages: {
        en: "https://www.viroun.dev/en",
        fr: "https://www.viroun.dev/fr",
      },
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </main>
  );
}
