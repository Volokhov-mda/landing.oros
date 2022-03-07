import clsx from "clsx";
import { useMemo } from "react";

import styles from "./marquee.module.css";

const MARQUEE_TEXT_NUM = 12;

const Marquee = ({ className, children }) => {
  className = clsx(styles.wrapper, className);

  const marqueeText = useMemo(() => {
    const text = [];

    for (let i = 0; i < MARQUEE_TEXT_NUM; i++) {
      text.push(children);
    }

    return text;
  }, [children]);

  return (
    <div className={className}>
      <div className={styles.marquee}>
        <span>
          {marqueeText.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </span>
      </div>
      <div className={clsx(styles.marquee, styles.marquee2)}>
        <span>
          {marqueeText.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
