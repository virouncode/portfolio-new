"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LocaleType, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

type LocaleButtonProps = {
  className?: string;
};

const LocaleButton = ({ className }: LocaleButtonProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();

  const handleChangeLang = (newLocale: LocaleType) => {
    if (newLocale === locale) return;
    router.replace({ pathname }, { locale: newLocale });
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={`flex items-center gap-1 text-sm hover:opacity-75 cursor-pointer w-16 h-9 justify-center ${className} bg-transparent border-none shadow-none`}
          aria-label="Change language"
          variant="outline"
        >
          {locale === "fr" ? "🇫🇷" : "🇬🇧"} {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routing.locales.map((l) => (
          <DropdownMenuCheckboxItem
            key={l}
            checked={locale === l}
            onCheckedChange={() => handleChangeLang(l)}
            className="text-base"
          >
            {l === "fr" ? "🇫🇷" : "🇬🇧"} {l.toUpperCase()}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleButton;
