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
import StartJourney from "components/ui/StartJourney";
import Icon from "components/ui/Icon";

import styles from "./overlay.module.css";

const Overlay = ({ disableZoom, className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const [breakpointFirst, setBreakpointFirst] = useState(false);
  const [breakpointSecond, setBreakpointSecond] = useState(false);
  const [breakpointThird, setBreakpointThird] = useState(false);
  const [zoomDisabled, setZoomDisabled] = useState(disableZoom);

  const handleChangeLanguage = () =>
    setLanguage(language === "eng" ? "ru" : "eng");

  const handleScrollJourney = () => {
    const scrollSnap = document.getElementById("scrollSnap");
    const scrollInfoScreen = document.getElementById("scroll-info");

    scrollSnap.scrollTo({
      top: scrollInfoScreen.offsetTop - (window.innerWidth < 2560 ? 150 : window.innerHeight / 2),
      behavior: "smooth",
    });
  };

  const handleSwipeDown = () => {
    const scrollSnap = document.getElementById("scrollSnap");
    const secondScreen = document.getElementById("start-journey");

    if (!breakpointFirst) {
      scrollSnap.scrollTo({
        top: secondScreen.offsetTop,
        behavior: "smooth",
      });
    } else {
      handleScrollJourney();
    }
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

      if (scrollTop < window.innerHeight * 0.3) {
        setBreakpointFirst(false);
      } else {
        setBreakpointFirst(true);
      }

      if (scrollTop > window.innerHeight * 1.3) {
        document.body.style.backgroundColor =
          theme === "light" ? "var(--primary-color)" : "var(--secondary-color)";
        setBreakpointSecond(true);
      } else {
        document.body.style.backgroundColor =
          theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
        setBreakpointSecond(false);
        setZoomDisabled(false);
      }

      if (window.innerWidth > 1920) {
        if (scrollTop > window.innerHeight * 1.63) {
          setBreakpointThird(true);
        } else {
          setBreakpointThird(false);
        }
      } else if (window.innerWidth > 1000) {
        if (scrollTop >= window.innerHeight * 1.95) {
          setBreakpointThird(true);
        } else {
          setBreakpointThird(false);
        }
      } else {
        if (scrollTop >= window.innerHeight * 2.18) {
          setBreakpointThird(true);
        } else {
          setBreakpointThird(false);
        }
      }

      if (scrollTop >= contactsScreen.offsetTop - 450) {
        document.body.style.backgroundColor =
          theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
      }
    };

    scrollSnap.addEventListener("scroll", onScroll);

    return () => {
      scrollSnap.removeEventListener("scroll", onscroll);
    };
  }, []);

  className = clsx(!breakpointSecond && styles.frontLayer, className);

  return (
    <>
      <div id={styles.overlay} className={className} {...props}>
        <div className={styles.content}>
          <div
            className={clsx(
              styles.titleWrapper,
              (zoomDisabled || breakpointSecond) && styles.remove
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
              (zoomDisabled || breakpointSecond) && styles.hidden
            )}
          >
            <div
              className={clsx(
                styles.contacts,
                breakpointFirst && styles.hidden
              )}
            >
              <Link
                className={clsx(styles.link, styles[theme])}
                href={`mailto:${email}`}
              >
                {email}
              </Link>
            </div>
            <button
              className={clsx(styles.hint, styles[theme], breakpointSecond && styles.hidden)}
              onClick={handleSwipeDown}
            >
              {window.innerWidth <= 1000
                ? localizedText[language].swipeDown
                : localizedText[language].scrollDown}{" "}
              <Icon className={styles.swipeDownIcon} icon={swipeDown} />
            </button>
            <div
              className={clsx(
                styles.controls,
                breakpointFirst && styles.hidden
              )}
            >
              <FloatingButton onClick={handleChangeLanguage}>
                {getLanguageButtontext(language === "ru" ? "eng" : "ru")}
              </FloatingButton>
            </div>
          </div>
          <div
            className={clsx(
              styles.startJourneyWrapper,
              (zoomDisabled || breakpointFirst) && styles.center,
              (zoomDisabled || breakpointSecond) && styles.scale,
              styles[language]
            )}
          >
            <StartJourney
              showButton={breakpointFirst}
              onClick={handleScrollJourney}
              className={clsx(
                styles.startJourney,
                (zoomDisabled || breakpointSecond) && styles.hidden,
                breakpointThird && styles.forceHidden
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
