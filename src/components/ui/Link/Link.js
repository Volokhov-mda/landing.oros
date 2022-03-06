import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import styles from "./link.module.css";

const Link = ({ href, className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.link, styles[theme], className);

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
