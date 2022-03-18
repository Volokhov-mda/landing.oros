import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import styles from "./info-block.module.css";

const InfoBlock = ({ icon, className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.infoBlock, styles[theme], className);

  return (
    <div className={className} {...props}>
      <div className={styles.square} />
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default InfoBlock;
