import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import clsx from "clsx";

import { marqueeText } from "consts";

import { themeAtom } from "data/atoms";

import Overlay from "components/Overlay";
import Screen from "components/Screen";
import Title from "components/Title";
import Marquee from "components/Marquee";
import ScrollInfo from "components/ScrollInfo";

import styles from "./styles.module.css";

const Home = () => {
  const [theme] = useAtom(themeAtom);
  const [breakpoint, setBreakpoint] = useState(false);

  useEffect(() => {
    const scrollSnap = document.getElementById("scrollSnap");

    const onScroll = () => {
      const scrollTop = scrollSnap.scrollTop;

      if (scrollTop < window.innerHeight * 1.8) {
        setBreakpoint(false);
      } else {
        setBreakpoint(true);
      }
    };

    scrollSnap.addEventListener("scroll", onScroll);

    return () => {
      scrollSnap.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <div id="scrollSnap" className={styles.scrollSnap}>
      <div className={styles.content}>
        <Overlay />
        <Screen className={clsx(styles.screen, styles.primaryPalette)} />
        <Screen className={clsx(styles.screen, styles.primaryPalette)} />
        <Screen
          className={clsx(
            styles.screen,
            styles.primaryPalette,
            !breakpoint && styles.hidden
          )}
          minHeight="200vh"
        >
          <ScrollInfo />
        </Screen>
        <Screen className={clsx(styles.screen, styles.primaryPalette)}>
          <Title>OROS DIGITAL 3</Title>
          <Marquee className={styles.indent}>{marqueeText}</Marquee>
        </Screen>
      </div>
    </div>
  );
};

export default Home;
