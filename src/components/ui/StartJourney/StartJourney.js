import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom, themeAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import logo from "images/logos/logo.svg";

import Icon from "components/ui/Icon";

import styles from "./start-journey.module.css";
import { useMemo } from "react";

const StartJourney = ({ showButton, onClick, className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  const [language] = useAtom(languageAtom);

  const startJourneyText = useMemo(() => {
    return localizedText[language].startJourney.split(/(?=[ ])|(?<=[ ])/g);
  }, [language]);

  className = clsx(styles.startJourney, styles[theme], className);

  return (
    <div className={className} {...props}>
      <button
        onClick={onClick}
        className={clsx(styles.button, !showButton && styles.hidden)}
      >
        {startJourneyText.map((value, i) => {
          if (value === " ") {
            return <br />;
          }

          return value;
        })}
      </button>
      <div className={styles.logoWrapper}>
        <Icon icon={logo} className={styles.logo} />
      </div>
    </div>
  );
};

export default StartJourney;
