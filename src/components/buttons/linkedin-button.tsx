import Image from "next/image";
import Link from "next/link";

const LinkedInButton = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/tiao-viroun-kattygnarath-823a53a5/"
      target="_blank"
      className="p-3 bg-(--cream) rounded-full border border-(--cream) hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
    >
      <Image
        src="/img/linkedin.svg"
        alt="logo linkedin"
        width={18}
        height={18}
      />
    </Link>
  );
};

export default LinkedInButton;
