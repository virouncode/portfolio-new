"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const CVButton = () => {
  const locale = useLocale();
  const t = useTranslations("Hero");
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      locale === "fr"
        ? "https://s4cx2wlukgk9wkdl.public.blob.vercel-storage.com/TV_KATTYGNARATH_CV-ufX17j7LcfPNr0LWs5dwYLWdoAwSzj.pdf"
        : "https://s4cx2wlukgk9wkdl.public.blob.vercel-storage.com/TV_KATTYGNARATH_RESUME-yZrOBatO7ubXqUr2FoEbsY23DGtKGF.pdf"; // URL relative ou absolue
    link.download =
      locale === "fr" ? "TV_KATTYGNARATH_CV.pdf" : "TV_KATTYGNARATH_RESUME.pdf"; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    // Supprimez le lien après le téléchargement
    document.body.removeChild(link);
  };
  return (
    <Button
      variant="outline"
      className="bg-(--cream) min-w-[180px] px-6 py-5 rounded-full shadow-xl shadow-black/10  hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
      onClick={handleDownloadCV}
      title={t("telechargez-mon-cv")}
    >
      <Download />
      CV
    </Button>
  );
};

export default CVButton;
