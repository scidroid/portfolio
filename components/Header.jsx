import Link from "next/link";
import Image from "next/image";
import splitbee from "@splitbee/web";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-around m-4">
      <Link href="/">
        <a className="text-3xl font-bold text-center">
          Juan Almanza<span className="text-red-400">.</span>
        </a>
      </Link>
      <section>
        <Link href="/contact">
          <a
            onClick={() => splitbee.track("contact clicked")}
            className="text-lg font-bold"
          >
            Book a meeting
            <Image
              src="/arrow.svg"
              loading="lazy"
              width="24"
              height="13"
              alt="arrow"
            />
          </a>
        </Link>
      </section>
    </header>
  );
};

export default Header;
