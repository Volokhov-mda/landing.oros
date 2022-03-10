import { useEffect, useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import { email } from "consts";

import localizedText from "consts/localizedText.json";

import { languageAtom, themeAtom } from "data/atoms";

import swipeDown from "images/icons/swipe-down.svg";

import Title from "components/ui/Title";
import Marquee from "components/ui/Marquee";
import Link from "components/ui/Link";
import FloatingButton from "components/ui/FloatingButton";
import Icon from "components/ui/Icon";

import styles from "./overlay.module.css";
import Logo from "components/ui/Logo";

const Overlay = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const [breakpointFirst, setBreakpointFirst] = useState(false);

  const handleChangeLanguage = () =>
    setLanguage(language === "eng" ? "ru" : "eng");

  const handleScrollToInfo = () => {
    const scrollSnap = document.getElementById("scrollSnap");
    const scrollInfoScreen = document.getElementById("scroll-info");

    scrollSnap.scrollTo({
      top: scrollInfoScreen.offsetTop,
      behavior: "smooth",
    });
  };

  const getLanguageButtontext = () => {
    const text = language === "ru" ? "eng" : "ru";

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    const scrollSnap = document.getElementById("scrollSnap");
    const contactsScreen = document.getElementById("contacts-screen");

    const onScroll = () => {
      const scrollTop = scrollSnap.scrollTop;

      if (scrollTop < window.innerHeight / 2) {
        setBreakpointFirst(false);
      } else {
        setBreakpointFirst(true);
      }

      if (scrollTop > window.innerHeight * 0.8) {
        document.body.style.backgroundColor =
          theme === "light" ? "var(--primary-color)" : "var(--secondary-color)";
      } else {
        document.body.style.backgroundColor =
          theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
      }

      if (scrollTop >= contactsScreen.offsetTop - 550) {
        document.body.style.backgroundColor =
          theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
      }
    };

    scrollSnap.addEventListener("scroll", onScroll);

    return () => {
      scrollSnap.removeEventListener("scroll", onscroll);
    };
  }, []);

  className = clsx(!breakpointFirst && styles.frontLayer, className);

  return (
    <div id={styles.overlay} className={className} {...props}>
      <div className={styles.content}>
        <div
          className={clsx(
            styles.titleWrapper,
            breakpointFirst && styles.remove
          )}
        >
          <Title
            className={clsx(styles.title, breakpointFirst && styles.hidden)}
          >
            OROS DIGITAL
          </Title>
          <Marquee
            className={clsx(styles.marquee, breakpointFirst && styles.hidden)}
          >
            INFLUENCER MARKETING AGENCY
          </Marquee>
        </div>

        <div
          className={clsx(
            styles.floatingMenu,
            breakpointFirst && styles.hidden
          )}
        >
          <div
            className={clsx(styles.contacts, breakpointFirst && styles.hidden)}
          >
            <Link
              className={clsx(styles.link, styles[theme])}
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </div>
          <button
            className={clsx(styles.hint, breakpointFirst && styles.hidden)}
            onClick={handleScrollToInfo}
          >
            {localizedText[language].swipeDown}{" "}
            <Icon className={styles.swipeDownIcon} icon={swipeDown} />
          </button>
          <div
            className={clsx(styles.controls, breakpointFirst && styles.hidden)}
          >
            <FloatingButton onClick={handleChangeLanguage}>
              {getLanguageButtontext(language)}
            </FloatingButton>
          </div>
        </div>

        <div
          className={clsx(
            styles.startJourneyWrapper,
            breakpointFirst && styles.scale
          )}
        >
          <Logo
            className={clsx(styles.logo, breakpointFirst && styles.hidden)}
          />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
