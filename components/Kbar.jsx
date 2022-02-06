// the code is awful

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";
import { forwardRef, Fragment, useMemo } from "react";
import { FaPython } from "react-icons/fa";
import { AiTwotoneContainer } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { DiGit, DiGoogleAnalytics } from "react-icons/di";
import { GiProcessor } from "react-icons/gi";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  background: "#fcfcfc",
  color: "rgb(28 28 29)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "#fcfcfc",
  color: "rgb(28 28 29)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "rgb(0 0 0 / 50%) 0px 16px 70px",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  opacity: 0.5,
};

const ResultItem = forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        style={{
          padding: "12px 16px",
          background: active ? "rgba(0 0 0 / 0.05)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: 14,
          }}
        >
          {action.icon && action.icon}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8,
                      }}
                    >
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </span>
                  </Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span style={{ fontSize: 12 }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

const RenderResults = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
};

const Kbar = ({ children }) => {
  const router = useRouter();

  const locales = {
    locale: router.locale,
  };

  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "posts",
      perform: () => router.push("/#blog"),
      subtitle:
        router.locale === "en"
          ? "A collection of my posts"
          : "Una colección de mis artículos",
      icon: (
        <BiNews
          style={{
            width: "26px",
            height: "26px",
          }}
        />
      ),
    },
    {
      id: "contact",
      name: router.locale === "en" ? "Contact" : "Contacto",
      shortcut: ["c"],
      keywords: "email",
      perform: () => router.push("/contact"),
      subtitle:
        router.locale === "en"
          ? "Get in touch"
          : "Puede contactar conmigo aquí",
      icon: (
        <AiTwotoneContainer
          style={{
            width: "26px",
            height: "26px",
          }}
        />
      ),
    },
    {
      id: "python",
      name: "Learning to code in python",
      shortcut: ["p"],
      keywords: "python code tutorial",
      perform: () =>
        router.push(
          `/python${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          `/python${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          { locale: "en" }
        ),
      subtitle: "A guide to learning to code in python",
      icon: (
        <FaPython
          style={{
            width: "26px",
            height: "26px",
          }}
        />
      ),
    },
    {
      id: "git",
      name: "Learning git",
      shortcut: ["g"],
      keywords: "git commit",
      perform: () =>
        router.push(
          `/git${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          `/git${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          { locale: "en" }
        ),
      subtitle: "A guide to learning git",
      icon: (
        <DiGit
          style={{
            width: "26px",
            height: "26px",
          }}
        />
      ),
    },
    {
      id: "silicon",
      name: "Our computers run on sand",
      shortcut: ["s"],
      keywords: "silicon sand cs computer",
      perform: () =>
        router.push(
          `/silicon${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          `/silicon${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          { locale: "en" }
        ),
      subtitle: "A story about our processors",
      icon: (
        <GiProcessor
          style={{
            width: "26px",
            height: "26px",
          }}
        />
      ),
    },
    {
      id: "privacy",
      name: "Privacy for web developers",
      shortcut: ["p"],
      keywords: "analytics privacy splitbee",
      perform: () =>
        router.push(
          `/privacy-for-web-developers${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          `/privacy-for-web-developers${
            router.locale == "es" ? "?return_locale=es" : "?return_locale=en"
          }`,
          { locale: "en" }
        ),
      subtitle: "Learn about analytics",
      icon: (
        <DiGoogleAnalytics
          style={{
            width: "26px",
            height: "26px",
          }}
        />
      ),
    },
  ];

  return (
    <KBarProvider
      options={{
        enableHistory: true,
      }}
      actions={actions}
    >
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch
              placeholder={
                router.locale === "en"
                  ? "Type what you want to search for"
                  : "Escribe lo que quieres buscar"
              }
              style={searchStyle}
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default Kbar;
