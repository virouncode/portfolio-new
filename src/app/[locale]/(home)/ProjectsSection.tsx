import CarouselCalvinEMR from "@/components/CarouselCalvinEMR";
import CarouselFm4all from "@/components/CarouselFm4all";
import CarouselStudioNouvel from "@/components/CarouselStudioNouvel";
import CarouselToool from "@/components/CarouselToool";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { Caveat } from "next/font/google";
import Image from "next/image";

export const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const ProjectsSection = () => {
  const t = useTranslations("Projets");
  return (
    <section
      className="min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-3rem)] bg-gradient-to-br from-[var(--blue)] via-[color-mix(in_oklch,var(--blue),black_10%)] to-[color-mix(in_oklch,var(--blue),black_40%)] scroll-mt-11 flex flex-col gap-10 pt-10"
      id="projets"
    >
      <h2
        className={`text-6xl tracking-tight font-bold text-center ${caveat.className}`}
      >
        {t("projets")}
      </h2>
      <Tabs defaultValue="fm4all" className="container mx-auto px-6">
        <TabsList className="flex justify-center items-center py-6 mb-6 md:w-1/2 w-full mx-auto">
          <TabsTrigger
            value="fm4all"
            asChild
            className="py-6 data-[state=inactive]:opacity-30"
          >
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/img/logos/fm4allLogo.png"
                alt="fm4all Logo"
                width={80}
                height={60}
              />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="calvinEMR"
            asChild
            className="py-6 data-[state=inactive]:opacity-30"
          >
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/img/logos/calvinLogo.png"
                alt="Clavin EMR Logo"
                width={80}
                height={60}
              />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="tooolApp"
            asChild
            className="py-6 data-[state=inactive]:opacity-30"
          >
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/img/logos/tooolLogo.png"
                alt="Toool App Logo"
                width={80}
                height={60}
              />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="studioNouvel"
            asChild
            className="py-6 data-[state=inactive]:opacity-30"
          >
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/img/logos/studioNouvelLogo.png"
                alt="Studio Nouvel Logo"
                width={50}
                height={50}
                className="text-(--blue)"
              />
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="fm4all" className="h-[600px] sm:h-auto">
          <CarouselFm4all />
        </TabsContent>
        <TabsContent value="calvinEMR" className="h-[600px] sm:h-auto">
          <CarouselCalvinEMR />
        </TabsContent>
        <TabsContent value="tooolApp" className="h-[600px] sm:h-auto">
          <CarouselToool />
        </TabsContent>
        <TabsContent value="studioNouvel" className="h-[600px] sm:h-auto">
          <CarouselStudioNouvel />
        </TabsContent>
      </Tabs>
      <div className="flex justify-center">
        <div className="h-[2px]  bg-[var(--cream)] opacity-90 container mx-auto"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
