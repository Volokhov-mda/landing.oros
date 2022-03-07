import clsx from "clsx";
import { useMemo } from "react";

import styles from "./marquee.module.css";

const MARQUEE_TEXT_NUM = 30;

const Marquee = ({ className, children }) => {
  className = clsx(styles.wrapper, className);

  const marqueeText = useMemo(() => {
    const text = [];

    for (let i = 0; i < MARQUEE_TEXT_NUM; i++) {
      text.push(children);
    }

    return ` ${text.join("    ")}`;
  }, [children]);

  return (
    <div className={className}>
      <div className={styles.marquee}>
        <div className={styles.content}>
          {marqueeText.replace(/ /g, "\u00a0")}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
