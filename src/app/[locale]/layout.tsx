import Header from "@/components/header/header";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viroun Kattygnarath | Développeur React/Node/Next JS",
  description:
    "Portfolio de Viroun Kattygnarath, développeur fullstack React/Node/Next JS à Paris, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}  antialiased overflow-x-hidden`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Toaster richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
