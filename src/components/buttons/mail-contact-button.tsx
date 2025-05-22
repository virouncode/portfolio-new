"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const MailContactButton = () => {
  const handleClickContact = async () => {
    try {
      await navigator.clipboard.writeText("virounk@gmail.com");
      toast.success("Merci 😀 !", {
        description:
          "Mon adresse e-mail a été copiée dans votre presse-papiers. A bientôt !",
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(
          `Impossible de copier l'adresse email virounk@gmail.com dans le presse-papiers ! ${err.message}`
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
      <Mail />
      Ecrivez-moi
    </Button>
  );
};

export default MailContactButton;
