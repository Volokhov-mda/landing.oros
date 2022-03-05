import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import Title from "components/Title";

import styles from "./scroll-info.module.css";

const ScrollInfo = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.scrollInfo, styles[theme], className);

  return (
    <div className={className} {...props}>
      <div className={styles.titleWrapper}>
        <Title className={styles.stickyTitle}>О нас</Title>
      </div>
      <div className={styles.infoWrapper}>
        <div
          style={{
            height: "500px",
            width: "50%",
            background: "pink",
          }}
        />
        <div
          style={{
            height: "500px",
            width: "50%",
            background: "pink",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollInfo;
