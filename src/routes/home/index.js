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

      if (scrollTop < window.innerHeight * 1.3) {
        setBreakpoint(false);
      } else {
        setBreakpoint(true);
      }
    };

    scrollSnap.addEventListener("scroll", onScroll);

    document.body.style.overflow = "hidden";
    window.document.title = "Oros Digital — Influencer Marketing Agency";

    return () => {
      scrollSnap.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <ScrollSnap id="scrollSnap">
      <div className={styles.content}>
        <Overlay />
        <ScrollSnap.Screen className={styles.screen} height="100vh" snap />
        <ScrollSnap.Screen
          id="start-journey"
          className={styles.screen}
          height="100vh"
          snap
        />
        <ScrollSnap.Screen
          id="scroll-info"
          className={clsx(
            styles.screen,
            styles.scrollInfo,
            !breakpoint && styles.hidden
          )}
          snap={window.innerWidth <= 1000}
        >
          <ScrollInfo />
        </ScrollSnap.Screen>
        <ScrollSnap.Screen
          id="contacts-screen"
          className={clsx(styles.screen, styles.contacts)}
          minHeight="100vh"
          snap
        >
          <Contacts />
        </ScrollSnap.Screen>
      </div>
    </ScrollSnap>
  );
};

export default Home;
