import { marqueeText } from "consts";
import { useAtom } from "jotai";
import { clsx } from "clsx";

import { themeAtom } from "data/atoms";

import Overlay from "components/Overlay";
import Screen from "components/Screen";
import Title from "components/Title";
import Marquee from "components/Marquee";

import styles from "./styles.module.css";

const Home = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <div id="scrollSnap" className={styles.scrollSnap}>
      <div style={{ position: "relative" }}>
        <Screen className={styles.primaryPalette} />
        <Screen className={styles.primaryPalette} />
        <Screen className={styles.primaryPalette} height="200vh" />
        <Screen className={styles.primaryPalette}>
          <Title>OROS DIGITAL 3</Title>
          <Marquee className={styles.indent}>{marqueeText}</Marquee>
        </Screen>
        <Overlay />
      </div>
    </div>
  );
};

export default Home;
