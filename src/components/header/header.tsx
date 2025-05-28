"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LocaleButton from "../buttons/locale-button";

const Header = () => {
  const t = useTranslations("Header");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["hero", "projets", "skills", "about"];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const isActive = (sectionId: string) => {
    return activeSection === sectionId.replace("#", "");
  };
  return (
    <div className="bg-(--cream) shadow-lg sticky top-0 z-50">
      <header className="container w-full mx-auto flex px-6 py-2 justify-between items-center">
        <a
          href="#hero"
          className={`text-4xl text-foreground font-bold font-noto-serif`}
          title={t("accueil")}
        >
          ວີຣຸນ
        </a>

        <div className="flex items-center gap-4 text-sm">
          <nav className=" items-center gap-4 hidden md:flex">
            <a
              href="#projets"
              className={`transition-all duration-300 ${
                isActive("#projets") ? "font-bold scale-110" : ""
              }`}
              title={t("projets")}
            >
              {t("projets")}
            </a>
            <a
              href="#skills"
              className={`transition-all duration-300 ${
                isActive("#skills") ? "font-bold scale-110" : ""
              }`}
              title={t("competences")}
            >
              {t("competences")}
            </a>
            <a
              href="#about"
              className={`transition-all duration-300 ${
                isActive("#about") ? "font-bold scale-110" : ""
              }`}
              title={t("a-propos")}
            >
              {t("a-propos")}
            </a>
            <a
              href="#hero"
              className={`transition-all duration-300 ${
                isActive("#hero") ? "font-bold scale-110" : ""
              }`}
              title={t("contact")}
            >
              {t("contact")}
            </a>
          </nav>
          <LocaleButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
