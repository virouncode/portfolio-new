import CarouselFm4all from "@/components/CarouselFm4all";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section
      className="h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-3rem)] bg-gradient-to-br from-[var(--blue)] via-[color-mix(in_oklch,var(--blue),black_10%)] to-[color-mix(in_oklch,var(--blue),black_40%)] scroll-mt-11"
      id="projets"
    >
      <Tabs defaultValue="fm4all" className="container mx-auto px-6 py-10">
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
        {/* <TabsContent value="calvinEMR">
          <CarouselCalvinEMR />
        </TabsContent>
        <TabsContent value="tooolApp">
          <CarouselToool />
        </TabsContent>
        <TabsContent value="studioNouvel">
          <CarouselStudioNouvel />
        </TabsContent> */}
      </Tabs>
    </section>
  );
};

export default ProjectsSection;
