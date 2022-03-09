import { forwardRef } from "react";
import { themeAtom } from "data/atoms";
import { useAtom } from "jotai";
import clsx from "clsx";

import styles from "./checkbox.module.css";

const Checkbox = forwardRef(({ className, children, error, ...props }, ref) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.label, error && styles.error, className);

  return (
    <label className={className} ref={ref}>
      <input className={styles.checkbox} type="checkbox" {...props} />
      <div className={clsx(styles.mark, styles[theme])} />
      <span className={styles.text}>{children}</span>
    </label>
  );
});

export default Checkbox;
