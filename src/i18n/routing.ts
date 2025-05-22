import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": {
      fr: "/",
      en: "/",
    },
  },
});

export type LocaleType = (typeof routing.locales)[number];
