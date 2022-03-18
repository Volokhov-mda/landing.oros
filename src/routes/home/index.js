import { useEffect, useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import Overlay from "components/partials/Overlay";
import ScrollSnap from "components/ui/ScrollSnap";
import ScrollInfo from "components/partials/ScrollInfo";
import Contacts from "components/partials/Contacts";

import styles from "./styles.module.css";

const Home = () => {
  const disableZoom = localStorage.getItem("fromPolicy");

  const [theme] = useAtom(themeAtom);
  const [breakpointFirst, setBreakpointFirst] = useState(false);
  const [breakpointSecond, setBreakpointSecond] = useState(false);

  useEffect(() => {
    const scrollSnap = document.getElementById("scrollSnap");

    const onScroll = () => {
      const scrollTop = scrollSnap.scrollTop;

      if (scrollTop < window.innerHeight * 1.3) {
        setBreakpointFirst(false);
      } else {
        setBreakpointFirst(true);
      }
      
      if (window.innerWidth > 1920) {
        if (scrollTop > window.innerHeight * 1.63) {
          setBreakpointSecond(true);
        } else {
          setBreakpointSecond(false);
        }
      } else if (window.innerWidth > 1000) {
        if (scrollTop >= window.innerHeight * 1.95) {
          setBreakpointSecond(true);
        } else {
          setBreakpointSecond(false);
        }
      } else {
        if (scrollTop >= window.innerHeight * 2.15) {
          setBreakpointSecond(true);
        } else {
          setBreakpointSecond(false);
        }
      }
    };

    scrollSnap.addEventListener("scroll", onScroll);

    document.body.style.overflow = "hidden";
    window.document.title = "Oros Digital — Influencer Marketing Agency";

    return () => {
      scrollSnap.removeEventListener("scroll", onscroll);
    };
  }, []);

  useEffect(() => {
    const scrollSnap = document.getElementById("scrollSnap");
    const contactsScreen = document.getElementById("contacts-screen");

    if (disableZoom) {
      scrollSnap.scrollTo({
        top: contactsScreen.offsetTop,
        behavior: "instant",
      });
      localStorage.removeItem("fromPolicy");
    }
  }, []);

  return (
    <ScrollSnap id="scrollSnap">
      <div className={styles.content}>
        <Overlay disableZoom={disableZoom} />
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
            styles[theme],
            !breakpointFirst && !breakpointSecond && styles.hidden,
            breakpointSecond && styles.forceShow
          )}
          minHeight={window.innerWidth <= 1000 ? "100vh" : "unset"}
          snap={window.innerWidth <= 1000}
        >
          <ScrollInfo className={clsx(
            
          )} />
        </ScrollSnap.Screen>
        <ScrollSnap.Screen
          id="contacts-screen"
          className={clsx(styles.screen, styles[theme], styles.contacts)}
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
