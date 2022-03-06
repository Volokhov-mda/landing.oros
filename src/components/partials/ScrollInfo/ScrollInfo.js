import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom, themeAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import sliders from "images/icons/sliders.svg";
import compass from "images/icons/compass.svg";
import trendingUp from "images/icons/trending-up.svg";

import Title from "components/ui/Title";
import InfoBlock from "components/ui/InfoBlock";

import styles from "./scroll-info.module.css";

const ScrollInfo = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  const [language] = useAtom(languageAtom);

  className = clsx(styles.scrollInfo, styles[theme], className);

  return (
    <div className={className} {...props}>
      <div className={styles.titleWrapper}>
        <Title className={styles.stickyTitle}>
          {localizedText[language].aboutUs}
        </Title>
      </div>
      <div className={styles.infoWrapper}>
        <InfoBlock icon={sliders}>
          {localizedText[language].slidersText}
        </InfoBlock>
        <InfoBlock icon={compass}>
          {localizedText[language].compassText}
        </InfoBlock>
        <InfoBlock icon={trendingUp}>
          {localizedText[language].trendingUpText}
        </InfoBlock>
      </div>
      <div className={clsx(styles.round, styles[theme])} />
    </div>
  );
};

export default ScrollInfo;
