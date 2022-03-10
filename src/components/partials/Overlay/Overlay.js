import { useEffect, useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import { email } from "consts";

import localizedText from "consts/localizedText.json";

import { languageAtom, themeAtom } from "data/atoms";

import Title from "components/ui/Title";
import Marquee from "components/ui/Marquee";
import Link from "components/ui/Link";
import FloatingButton from "components/ui/FloatingButton";
import StartJourney from "components/ui/StartJourney";

import styles from "./overlay.module.css";

const Overlay = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const [breakpointFirst, setBreakpointFirst] = useState(false);
  const [breakpointSecond, setBreakpointSecond] = useState(false);

  const handleChangeLanguage = () =>
    setLanguage(language === "eng" ? "ru" : "eng");

  const handleScroll = () => {
    const scrollSnap = document.getElementById("scrollSnap");
    const scrollInfoScreen = document.getElementById("scroll-info");

    scrollSnap.scrollTo({
      top: scrollInfoScreen.offsetTop,
      behavior: "smooth",
    });
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

      if (scrollTop > window.innerHeight * 1.75) {
        document.body.style.backgroundColor = theme === "light" ? "var(--primary-color)" : "var(--secondary-color)";
        setBreakpointSecond(true);
      } else {
        document.body.style.backgroundColor = theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
        setBreakpointSecond(false);
      }
      
      if (scrollTop >= contactsScreen.offsetTop - 550) {
        console.log(scrollTop, contactsScreen.scrollTop);
        document.body.style.backgroundColor = theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
      }
    };

    scrollSnap.addEventListener("scroll", onScroll);

    return () => {
      scrollSnap.removeEventListener("scroll", onscroll);
    };
  }, []);

  className = clsx(!breakpointSecond && styles.frontLayer, className);

  return (
    <div id={styles.overlay} className={className} {...props}>
      <div className={styles.content}>
        <div
          className={clsx(
            styles.titleWrapper,
            breakpointSecond && styles.remove
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
            breakpointSecond && styles.hidden
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
          <div className={clsx(styles.hint, breakpointSecond && styles.hidden)}>
            {localizedText[language].swipeDown}
          </div>
          <div
            className={clsx(styles.controls, breakpointFirst && styles.hidden)}
          >
            <FloatingButton onClick={handleChangeLanguage}>
              {capitalizeFirstChar(language)}
            </FloatingButton>
          </div>
        </div>

        <div
          className={clsx(
            styles.startJourneyWrapper,
            breakpointFirst && styles.center,
            breakpointSecond && styles.scale,
            styles[language]
          )}
        >
          <StartJourney
            showButton={breakpointFirst}
            onClick={handleScroll}
            className={clsx(
              styles.startJourney,
              breakpointSecond && styles.hidden
            )}
          />
        </div>
      </div>
    </div>
  );
};

const capitalizeFirstChar = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default Overlay;
