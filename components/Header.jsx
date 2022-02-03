import L from "next/link";
import Image from "next/image";
import { FeedbackFish } from "@feedback-fish/react";
import { trackEvent } from "utils/analytics";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = ({ locales }) => {
  const [isMacOs, setIsMacOs] = useState(false);

  useEffect(() => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    setIsMacOs(isMac);
  }, []);

  const router = useRouter();

  const { return_locale } = router.query;

  const Link = (props) => (
    <L
      {...props}
      locale={
        return_locale == "en"
          ? "en"
          : return_locale == "es"
          ? "es"
          : router.locale
      }
    >
      {props.children}
    </L>
  );

  const handleLocale = (locale) => {
    trackEvent("locale changed", { locale: locale });
    router.push(router.asPath, router.asPath, { locale: locale });
  };

  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
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
              {`${isMacOs ? "⌘" : "Ctrl"} + K`}
            </kbd>
          </section>
          <FeedbackFish projectId="7b1560278ec928" lang={router.locale}>
            <button
              onClick={() => trackEvent("Feedback form clicked")}
              className="text-lg font-bold mr-6"
            >
              {locales.feedback}
            </button>
          </FeedbackFish>
          <Link href="/contact">
            <a
              onClick={() => trackEvent("contact clicked")}
              className="text-xl font-bold"
            >
              {locales.contact}
              <Image
                priority={true}
                src="/arrow.svg"
                width="24"
                height="13"
                alt="arrow"
              />
            </a>
          </Link>
          <select
            className="border-none rounded-md pl-1 pr-1 py-1 text-left outline-none"
            name="locale"
            onChange={(e) => handleLocale(e.target.value)}
          >
            <option value="en" selected={router.locale == "en" ? true : false}>
              🇺🇸
            </option>
            <option value="es" selected={router.locale == "es" ? true : false}>
              🇪🇸
            </option>
          </select>
        </section>
      </header>
    </div>
  );
};

export default Header;
