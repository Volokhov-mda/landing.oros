import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import logo from "images/logos/logo.svg";

import Icon from "components/ui/Icon";

import styles from "./start-journey.module.css";

const StartJourney = ({ showButton, onClick, className, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.startJourney, styles[theme], className);

  return (
    <div className={className} {...props}>
      <button onClick={onClick} className={clsx(styles.button, !showButton && styles.hidden)}>
        Start <br /> Journey
      </button>
      <div className={styles.logoWrapper}>
        <Icon icon={logo} className={styles.logo} />
      </div>
    </div>
  );
};

export default StartJourney;
