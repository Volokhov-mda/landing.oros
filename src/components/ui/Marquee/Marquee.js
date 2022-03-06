import clsx from "clsx";

import styles from "./marquee.module.css";

const Marquee = ({ className, children }) => {
  className = clsx(styles.wrapper, className);

  return (
    <div className={className}>
      <div className={styles.marquee}>
        <span id="span-1">
          {decodeURIComponent(JSON.parse(`"${children}"`))}
        </span>
      </div>
      <div className={clsx(styles.marquee, styles.marquee2)}>
        <span>{decodeURIComponent(JSON.parse(`"${children}"`))}</span>
      </div>
    </div>
  );
};

export default Marquee;
