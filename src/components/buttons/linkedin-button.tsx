import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const LinkedInButton = () => {
  const t = useTranslations("Hero");
  return (
    <Link
      href="https://www.linkedin.com/in/tiao-viroun-kattygnarath-823a53a5/"
      target="_blank"
      className="p-3 bg-(--cream) rounded-full border border-(--cream) hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
      title={t("mon-profil-linkedin")}
    >
      <Image
        src="/img/linkedin.svg"
        alt="linkedin logo"
        width={18}
        height={18}
      />
    </Link>
  );
};

export default LinkedInButton;
