import { useEffect, useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import { email } from "consts";

import { themeAtom } from "data/atoms";

import Title from "components/ui/Title";
import Marquee from "components/ui/Marquee";
import Link from "components/ui/Link";
import FloatingButton from "components/ui/FloatingButton";
import StartJourney from "components/ui/StartJourney";

import styles from "./overlay.module.css";

const Overlay = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom)

  const [breakpointFirst, setBreakpointFirst] = useState(false);
  const [breakpointSecond, setBreakpointSecond] = useState(false);

  useEffect(() => {
    const scrollSnap = document.getElementById("scrollSnap");

    const onScroll = () => {
      const scrollTop = scrollSnap.scrollTop;

      if (scrollTop < window.innerHeight / 2) {
        setBreakpointFirst(false);
      } else {
        setBreakpointFirst(true);
      }

      if (scrollTop > window.innerHeight * 1.25) {
        setBreakpointSecond(true);
      } else {
        setBreakpointSecond(false);
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
            <Link className={clsx(styles.link, styles[theme])} href={`mailto:${email}`}>{email}</Link>
          </div>
          <div className={clsx(styles.hint, breakpointSecond && styles.hidden)}>
            swipe down
          </div>
          <div
            className={clsx(styles.controls, breakpointFirst && styles.hidden)}
          >
            <FloatingButton>Eng</FloatingButton>
          </div>
        </div>

        <div
          className={clsx(
            styles.startJourneyWrapper,
            breakpointFirst && styles.center,
            breakpointSecond && styles.scale
          )}
        >
          <StartJourney
            showButton={breakpointFirst}
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

export default Overlay;
