import { Card, CardContent } from "@/components//ui/card";
import CarouselItemCardHeader from "@/components/CarouselItemCardHeader";
import { CarouselItem } from "@/components/ui/carousel";

type CarouselItemVideoProps = {
  logoUrl: string;
  logoAlt: string;
  siteUrl: string;
  description: string;
  videoUrl: string;
  videoTitle: string;
};

const CarouselItemVideo = ({
  logoUrl,
  logoAlt,
  siteUrl,
  description,
  videoUrl,
  videoTitle,
}: CarouselItemVideoProps) => {
  return (
    <CarouselItem>
      <Card className="bg-gradient-to-b from-white to-[color:var(--cream)] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <CarouselItemCardHeader
          logoUrl={logoUrl}
          logoAlt={logoAlt}
          siteUrl={siteUrl}
          description={description}
        />
        <CardContent className="flex-1 flex justify-center items-center">
          <div className="w-[95%] xl:w-[80%]  max-w-4xl h-[280px] md:h-[350px] lg:h-[480px]  rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CarouselItemVideo;
