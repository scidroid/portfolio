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
          <a onClick={() => splitbee.track("Book a call clicked")} className="text-lg font-bold">
            Book a call
            <Image
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
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
