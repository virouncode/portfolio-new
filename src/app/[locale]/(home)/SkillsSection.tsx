import CustomStackIcon from "@/components/CustomStackIcon";
import { BookOpen, Brain, Compass, Search, Smile } from "lucide-react";
import { useTranslations } from "next-intl";
import { caveat } from "./ProjectsSection";

const stackIcons = [
  {
    name: "typescript",
    label: "typescript",
  },
  {
    name: "reactjs",
    label: "react",
  },
  {
    name: "nextjs",
    label: "next.js",
  },
  {
    name: "nodejs",
    label: "node.js/express",
  },
  {
    name: "tailwindcss",
    label: "tailwindcss",
  },
];

const SkillsSection = () => {
  const t = useTranslations("Skills");
  const softSkills = [
    {
      icon: Brain,
      title: t("esprit-danalyse"),
      description: t(
        "approche-structuree-des-problemes-et-recherche-de-solutions-efficaces"
      ),
    },
    {
      icon: Search,
      title: t("sens-du-detail"),
      description: t("attention-portee-a-la-precision-et-a-la-qualite-du-code"),
    },
    {
      icon: Compass,
      title: t("autonomie"),
      description: t(
        "capacite-a-avancer-seul-tout-en-collaborant-quand-necessaire"
      ),
    },
    {
      icon: BookOpen,
      title: t("envie-dapprendre"),
      description: t(
        "volonte-de-progresser-continuellement-a-travers-chaque-projet"
      ),
    },
    {
      icon: Smile,
      title: t("maitrise-de-soi"),
      description: t("calme-et-efficacite-meme-en-situation-de-stress"),
    },
  ];
  return (
    <section
      className="min-h-[calc(100vh-3rem)] bg-gradient-to-br from-[var(--blue)] via-[color-mix(in_oklch,var(--blue),black_10%)] to-[color-mix(in_oklch,var(--blue),black_40%)] scroll-mt-11 pt-10 relative"
      id="skills"
    >
      <div className="container mx-auto h-full flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <h2
            className={`text-6xl tracking-tight font-bold text-center ${caveat.className}`}
          >
            {t("competences")}
          </h2>
          <div className="flex items-center gap-4 justify-center p-8 flex-wrap relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-white/20 blur-3xl"></div>
            {stackIcons.map(({ name, label }) => (
              <CustomStackIcon name={name} label={label} key={name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2
            className={`text-6xl tracking-tight font-bold text-center ${caveat.className}`}
          >
            {t("soft-skills")}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-8 gap-8">
            {softSkills.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-4 bg-(--cream) rounded-xl shadow-md border border-neutral-200 items-center h-[170px]"
              >
                <Icon
                  className="w-6 h-6 mx-auto text-(--blue)"
                  strokeWidth={2.5}
                />
                <h3 className="text-lg text-center font-semibold">{title}</h3>
                <p className="text-sm text-center text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[2px]  absolute bottom-0 bg-[var(--cream)] opacity-90 container mx-auto"></div>
      </div>
    </section>
  );
};

export default SkillsSection;
