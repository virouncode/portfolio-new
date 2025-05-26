"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

const MailContactButton = () => {
  const t = useTranslations("Hero");
  const handleClickContact = async () => {
    try {
      await navigator.clipboard.writeText("virounk@gmail.com");
      toast.success(t("merci"), {
        description: t(
          "mon-adresse-e-mail-a-ete-copiee-dans-votre-presse-papiers-a-bientot"
        ),
      });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(t("erreur"), {
          description:
            t(
              "impossible-de-copier-l-adresse-email-virounk-gmail-com-dans-le-presse-papiers"
            ) +
            " " +
            err.message,
        });
      }
    }
  };
  return (
    <Button
      variant="outline"
      className="bg-(--cream) min-w-[180px] px-6 py-5 rounded-full shadow-xl shadow-black/10  hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
      onClick={handleClickContact}
      title={t("ecrivez-moi")}
    >
      <Mail />
      {t("ecrivez-moi")}
    </Button>
  );
};

export default MailContactButton;
