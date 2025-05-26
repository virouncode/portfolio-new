import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CarouselItemCardHeaderProps = {
  logoUrl: string;
  logoAlt: string;
  siteUrl: string;
  description: string;
};

const CarouselItemCardHeader = ({
  logoUrl,
  logoAlt,
  siteUrl,
  description,
}: CarouselItemCardHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle>
        <Link
          href={siteUrl}
          target="_blank"
          className="hover:opacity-80 transition-opacity duration-200 flex gap-4"
        >
          <div className="w-[120px] h-[48px] relative">
            <Image
              src={logoUrl}
              alt={logoAlt}
              fill
              className="object-contain object-center"
              sizes={"120px"}
            />
          </div>
          <SquareArrowOutUpRight size={15} />
        </Link>
      </CardTitle>
      <CardDescription>
        <div className="flex flex-col gap-2 border-b-2 border-[color:var(--cream)] pb-4">
          <p className="text-base font-medium">{description}</p>
        </div>
      </CardDescription>
    </CardHeader>
  );
};

export default CarouselItemCardHeader;
