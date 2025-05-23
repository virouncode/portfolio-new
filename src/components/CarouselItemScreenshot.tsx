import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import CarouselItemCardHeader from "./CarouselItemCardHeader";

type CarouselItemScreenshotProps = {
  logoUrl: string;
  logoAlt: string;
  siteUrl: string;
  description: string;
  screenshotUrl: string;
  screenshotAlt: string;
};

const CarouselItemScreenshot = ({
  logoUrl,
  logoAlt,
  siteUrl,
  description,
  screenshotUrl,
  screenshotAlt,
}: CarouselItemScreenshotProps) => {
  return (
    <CarouselItem>
      <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col scale-">
        <CarouselItemCardHeader
          logoUrl={logoUrl}
          logoAlt={logoAlt}
          siteUrl={siteUrl}
          description={description}
        />
        <CardContent className="flex-1 flex flex-col justify-center items-center">
          <div className="w-[95%] xl:w-[80%] max-w-4xl h-[280px] md:h-[350px] lg:h-[480px] rounded-lg  overflow-hidden relative">
            <Image
              src={screenshotUrl}
              alt={screenshotAlt}
              fill
              className="object-contain object-center"
            />
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CarouselItemScreenshot;
