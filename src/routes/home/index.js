import { useEffect, useState } from "react";
import clsx from "clsx";

import Overlay from "components/partials/Overlay";
import ScrollSnap from "components/ui/ScrollSnap";
import ScrollInfo from "components/partials/ScrollInfo";
import Contacts from "components/partials/Contacts";

import styles from "./styles.module.css";

const Home = () => {
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
    <ScrollSnap id="scrollSnap">
      <div className={styles.content}>
        <Overlay />
        <ScrollSnap.Screen className={styles.screen} snap />
        <ScrollSnap.Screen className={styles.screen} snap />
        <ScrollSnap.Screen
          className={clsx(
            styles.screen,
            styles.primaryPalette,
            !breakpoint && styles.hidden
          )}
          height={window.innerWidth <= 1000 ? "200vh" : "265vh"}
          snap={window.innerWidth <= 1000}
        >
          <ScrollInfo />
        </ScrollSnap.Screen>
        <ScrollSnap.Screen className={styles.screen} snap>
          <Contacts />
        </ScrollSnap.Screen>
      </div>
    </ScrollSnap>
  );
};

export default Home;
