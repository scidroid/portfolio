import Link from "next/link";
import Image from "next/image";
import { FeedbackFish } from "@feedback-fish/react";
import { trackEvent } from "utils/analytics";
import { BiSearch } from "react-icons/bi";

const Header = () => {

  return (
    <div className="sticky top-0 backdrop-blur-3xl z-10">
      <header className="flex flex-wrap items-center justify-around p-4">
        <Link href="/">
          <a className="text-3xl font-bold text-center">
            Juan Almanza<span className="text-red-400">.</span>
          </a>
        </Link>
        <section className="flex flex-wrap items-center justify-center">
          <section className="hidden md:flex flex-row items-center justify-center mr-6">
            <BiSearch
              style={{
                width: "20px",
                height: "20px",
                marginRight: "8px",
              }}
            />
            <kbd
              style={{
                padding: "4px 6px",
                background: "rgba(0 0 0 / .1)",
                borderRadius: "4px",
                fontSize: 14,
              }}
            >
              Ctrl + K
            </kbd>
          </section>
          <FeedbackFish projectId="7b1560278ec928">
            <button
              onClick={() => trackEvent("Feedback form clicked")}
              className="text-lg font-bold mr-6"
            >
              Give feedback
            </button>
          </FeedbackFish>
          <Link href="/contact">
            <a
              onClick={() => trackEvent("contact clicked")}
              className="text-xl font-bold"
            >
              Get in touch
              <Image
                priority={true}
                src="/arrow.svg"
                width="24"
                height="13"
                alt="arrow"
              />
            </a>
          </Link>
        </section>
      </header>
    </div>
  );
};

export default Header;
