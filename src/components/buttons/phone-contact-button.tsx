"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const PhoneContactButton = () => {
  const handleClickContact = async () => {
    try {
      await navigator.clipboard.writeText("+33683267962");
      toast.success("Merci 😀 !", {
        description:
          "Mon numéro de téléphone a été copié dans votre presse-papiers. A bientôt !",
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(
          `Impossible de copier le numéro de téléphone dans le presse-papiers ! ${err.message}`
        );
      }
    }
  };
  return (
    <Button
      variant="outline"
      className="bg-(--cream) min-w-[180px] px-6 py-5 rounded-full shadow-xl shadow-black/10  hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
      onClick={handleClickContact}
    >
      <Link
        href="tel:+33683267962"
        className="flex items-center gap-2 justify-center cursor-default"
      >
        <Phone /> Appelez-moi
      </Link>
    </Button>
  );
};

export default PhoneContactButton;
