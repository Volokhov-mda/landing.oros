import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom, themeAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import Logo from "components/ui/Logo";

import styles from "./start-journey.module.css";

const StartJourney = ({ showButton, onClick, className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  const [language] = useAtom(languageAtom);

  className = clsx(styles.startJourney, styles[theme], className);

  return (
    <div className={className} {...props}>
      <button
        onClick={onClick}
        className={clsx(styles.button, !showButton && styles.hidden)}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: localizedText[language].startJourney,
          }}
        />
      </button>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} />
      </div>
    </div>
  );
};

export default StartJourney;
