import Header from "@/components/header/header";
import { LocaleType, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Manrope, Noto_Serif_Lao } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif_Lao({
  variable: "--font-noto-serif",
  subsets: ["lao"],
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Viroun Kattygnarath | Développeur React/Node/Next JS",
  description:
    "Portfolio de Viroun Kattygnarath, développeur fullstack React/Node/Next JS à Paris, France.",
};

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({
    locale,
  }));
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: LocaleType }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body
        className={`${manrope.className} ${notoSerif.variable}  antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Toaster richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
