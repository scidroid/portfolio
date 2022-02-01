import Link from "next/link";
import { trackEvent } from "utils/analytics";

const Footer = () => {
  return (
    <footer className="bg-black p-6">
      <section className="sm:p-12 md:pl-32 md:pr-32 mb-4 mt-4">
        <p className="text-white text-4xl sm:text-5xl font-bold">
          Ready to make something kickass?
        </p>
        <Link href="/contact">
          <a
            onClick={() => trackEvent("contact clicked")}
            className="footer-cta text-4xl sm:text-5xl mt-6 font-bold"
          >
            Let&apos;s start talking.
          </a>
        </Link>
      </section>
      <p className="sm:pl-12 text-gray-400 md:pl-32 md:pr-32 mb-2 text-xl">
        &copy; Developed by Juan Almanza under GPL V3 License
      </p>
    </footer>
  );
};

export default Footer;
