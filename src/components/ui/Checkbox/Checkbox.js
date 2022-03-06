import clsx from "clsx";
import { themeAtom } from "data/atoms";
import { useAtom } from "jotai";

import styles from "./checkbox.module.css";

const Checkbox = ({ className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);
  
  className = clsx(styles.label, className);

  return (
    <label className={className}>
      <input className={styles.checkbox} type="checkbox" {...props} />
      <div className={clsx(styles.mark, styles[theme])} />
      <span className={styles.text}>{children}</span>
    </label>
  );
};

export default Checkbox;
