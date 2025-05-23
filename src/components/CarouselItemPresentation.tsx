import CarouselItemCardHeader from "@/components/CarouselItemCardHeader";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { PropsWithChildren } from "react";

type CarouselItemPresentationProps = {
  logoUrl: string;
  logoAlt: string;
  siteUrl: string;
  description: string;
};

const CarouselItemPresentation = ({
  logoUrl,
  logoAlt,
  siteUrl,
  description,
  children,
}: PropsWithChildren<CarouselItemPresentationProps>) => {
  return (
    <CarouselItem className="h-[500px] sm:h-auto">
      <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[500px] sm:h-auto overflow-y-auto">
        <CarouselItemCardHeader
          logoUrl={logoUrl}
          logoAlt={logoAlt}
          siteUrl={siteUrl}
          description={description}
        />
        <CardContent className="flex-1 overflow-y-auto">{children}</CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CarouselItemPresentation;
