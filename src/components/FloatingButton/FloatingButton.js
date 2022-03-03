import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import styles from "./floating-button.module.css";

const FloatingButton = ({ className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.floatingButton, styles[theme], className);

  return <button className={className} {...props}>{children}</button>;
};

export default FloatingButton;
