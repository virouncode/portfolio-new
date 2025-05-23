import Image from "next/image";
import Link from "next/link";

const GithubButton = () => {
  return (
    <Link
      href="https://github.com/virouncode"
      target="_blank"
      className="p-3 bg-(--cream) rounded-full border border-(--cream) hover:bg-(--cream)/90 active:shadow-none active:scale-[98%] transition-all duration-300"
    >
      <Image
        src="/img/github-mark.svg"
        alt="logo github"
        width={18}
        height={18}
      />
    </Link>
  );
};

export default GithubButton;
