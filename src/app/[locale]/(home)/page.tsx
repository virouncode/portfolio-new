import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({
    locale,
  }));
};

export const metadata = (): Metadata => ({
  title: "Viroun Kattygnarath | Développeur React/Node/Next JS",
  description:
    "Portfolio de Viroun Kattygnarath, développeur fullstack React/Node/Next JS à Paris, France.",
  openGraph: {},
});

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
