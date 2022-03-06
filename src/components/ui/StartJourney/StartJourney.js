import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import { ReactComponent as Logo } from "images/logos/logo.svg";

import styles from "./start-journey.module.css";

const StartJourney = ({ showButton, className, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.startJourney, styles[theme], className);

  return (
    <div className={className} {...props}>
      <button className={clsx(styles.button, !showButton && styles.hidden)}>
        Start <br /> Journey
      </button>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} />
      </div>
    </div>
  );
};

export default StartJourney;
