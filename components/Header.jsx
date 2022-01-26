import Link from "next/link";
import Image from "next/image";
import splitbee from "@splitbee/web";
import { FeedbackFish } from "@feedback-fish/react";

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
          <FeedbackFish projectId="7b1560278ec928">
            <button
              onClick={() => splitbee.track("Feedback form clicked")}
              className="text-lg font-bold mr-6"
            >
              Give feedback
            </button>
          </FeedbackFish>
          <Link href="/contact">
            <a
              onClick={() => splitbee.track("contact clicked")}
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
