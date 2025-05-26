import CVButton from "@/components/buttons/cv-button";
import GithubButton from "@/components/buttons/github-button";
import LinkedInButton from "@/components/buttons/linkedin-button";
import MailContactButton from "@/components/buttons/mail-contact-button";
import PhoneContactButton from "@/components/buttons/phone-contact-button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { caveat } from "./ProjectsSection";

const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section
      className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[var(--blue)] via-[color-mix(in_oklch,var(--blue),black_10%)] to-[color-mix(in_oklch,var(--blue),black_40%)] relative scroll-mt-14 flex flex-col items-center justify-center"
      id="hero"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[100px]"></div>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl"></div> */}
      <div className="container relative z-10 h-full w-full mx-auto px-6 flex flex-col items-center justify-center p-10">
        <div className="mb-8 animate-fadeIn">
          <div className="relative mx-auto">
            <div className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-white/80 shadow-xl shadow-black/20 relative z-10">
              <Image
                src="/img/portrait_viroun_2.webp"
                alt={t("viroun-kattygnarath-portrait")}
                fill
                priority={true}
                quality={100}
                sizes="300px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -inset-2 border-2 border-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center max-w-2xl text-center animate-fadeIn">
          <div className="mb-8">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 font-bold ${caveat.className}`}
            >
              {t("bonjour-je-suis-viroun")}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6  font-light">
              {t("developpeur-fullstack-react-node-next-js")}
            </h2>
            <div className="h-1 w-20 bg-(--cream) rounded-full mx-auto mb-6"></div>
            <p className="text-base lg:text-lg max-w-[60ch] leading-relaxed mx-auto">
              {t(
                "je-concois-et-developpe-des-applications-web-performantes-robustes-et-evolutives-pour-des-clients-en-france-et-a-l-international"
              )}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center mt-4">
            <MailContactButton />
            <PhoneContactButton />
            <CVButton />
            <div className="flex gap-4 items-center">
              <LinkedInButton />
              <GithubButton />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[2px] absolute bottom-0 bg-[var(--cream)] opacity-90 container mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
