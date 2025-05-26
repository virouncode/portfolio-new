"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { toast } from "sonner";

const PhoneContactButton = () => {
  const t = useTranslations("Hero");
  const handleClickContact = async () => {
    try {
      await navigator.clipboard.writeText("+33683267962");
      toast.success(t("merci"), {
        description: t(
          "mon-numero-de-telephone-a-ete-copie-dans-votre-presse-papiers-a-bientot"
        ),
      });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(t("erreur"), {
          description:
            t(
              "impossible-de-copier-le-numero-de-telephone-dans-le-presse-papiers"
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
      title={t("appelez-moi")}
    >
      <Link
        href="tel:+33683267962"
        className="flex items-center gap-2 justify-center cursor-default"
      >
        <Phone /> {t("appelez-moi")}
      </Link>
    </Button>
  );
};

export default PhoneContactButton;
