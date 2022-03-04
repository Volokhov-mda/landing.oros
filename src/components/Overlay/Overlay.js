import { useEffect, useState } from "react";
import clsx from "clsx";

import { marqueeText, email } from "consts";

import Title from "components/Title";
import Marquee from "components/Marquee";
import Link from "components/Link";
import FloatingButton from "components/FloatingButton";

import styles from "./overlay.module.css";
import StartJourney from "components/StartJourney/StartJourney";

const Overlay = ({ className, ...props }) => {
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

  return (
    <div id={styles.overlay} className={className} {...props}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <Title
            className={clsx(styles.title, breakpointFirst && styles.hidden)}
          >
            OROS DIGITAL
          </Title>
          <Marquee
            className={clsx(styles.marquee, breakpointFirst && styles.hidden)}
          >
            {marqueeText}
          </Marquee>
        </div>

        <div className={styles.floatingMenu}>
          <div
            className={clsx(styles.contacts, breakpointFirst && styles.hidden)}
          >
            <Link href={`mailto:${email}`}>{email}</Link>
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

        <StartJourney
          showButton={breakpointFirst}
          className={clsx(
            styles.startJourney,
            breakpointFirst && styles.center,
            breakpointSecond && styles.scale
          )}
          // style={{ transform: "scale(calc(1 / 68))", position: "fixed" }}
        />
      </div>
    </div>
  );
};

export default Overlay;
